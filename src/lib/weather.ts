// Módulo de clima para Plaza Sargento Lores (Iquitos, Loreto, Perú).
// Fuente de datos: Open-Meteo (pronóstico meteorológico abierto).
// Se consulta en el servidor (Server Component) y se cachea en el borde.

export interface WeatherNow {
  temperature: number;
  apparent: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  precipitation: number;
  weatherCode: number;
  isDay: boolean;
}

export interface WeatherDay {
  date: string;
  code: number;
  tMax: number;
  tMin: number;
  precipProb: number;
  uvMax: number;
  windMax: number;
}

export interface WeatherData {
  now: WeatherNow;
  days: WeatherDay[];
  fetchedAt: string;
}

const LAT = -3.7479237962259844;
const LON = -73.25471222305488;

export function buildWeatherUrl(lat: number, lon: number): string {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,is_day',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,wind_speed_10m_max',
    timezone: 'America/Lima',
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

const WMO: Record<number, { label: string; icon: string }> = {
  0: { label: 'Despejado', icon: '☀️' },
  1: { label: 'Mayormente despejado', icon: '🌤️' },
  2: { label: 'Parcialmente nublado', icon: '⛅' },
  3: { label: 'Nublado', icon: '☁️' },
  45: { label: 'Niebla', icon: '🌫️' },
  48: { label: 'Niebla con rocío', icon: '🌫️' },
  51: { label: 'Llovizna ligera', icon: '🌦️' },
  53: { label: 'Llovizna moderada', icon: '🌦️' },
  55: { label: 'Llovizna intensa', icon: '🌧️' },
  56: { label: 'Llovizna helada', icon: '🌧️' },
  57: { label: 'Llovizna helada intensa', icon: '🌧️' },
  61: { label: 'Lluvia débil', icon: '🌧️' },
  63: { label: 'Lluvia moderada', icon: '🌧️' },
  65: { label: 'Lluvia intensa', icon: '🌧️' },
  66: { label: 'Lluvia helada', icon: '🌧️' },
  67: { label: 'Lluvia helada intensa', icon: '🌧️' },
  71: { label: 'Nieve débil', icon: '🌨️' },
  73: { label: 'Nieve moderada', icon: '🌨️' },
  75: { label: 'Nieve intensa', icon: '❄️' },
  77: { label: 'Granizo menudo', icon: '🌨️' },
  80: { label: 'Chubascos débiles', icon: '🌦️' },
  81: { label: 'Chubascos moderados', icon: '🌧️' },
  82: { label: 'Chubascos intensos', icon: '⛈️' },
  85: { label: 'Chubascos de nieve', icon: '🌨️' },
  86: { label: 'Chubascos de nieve intensos', icon: '❄️' },
  95: { label: 'Tormenta eléctrica', icon: '⛈️' },
  96: { label: 'Tormenta con granizo', icon: '⛈️' },
  99: { label: 'Tormenta con granizo intenso', icon: '⛈️' },
};

export function wmo(code: number): { label: string; icon: string } {
  return WMO[code] ?? { label: 'Condición variable', icon: '🌡️' };
}

export function kmhToBeaufort(kmh: number): number {
  const t = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  let b = 0;
  for (let i = 0; i < t.length; i++) if (kmh >= t[i]) b = i + 1;
  return b;
}

export function windDirText(deg: number): string {
  const dirs = [
    'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
    'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO',
  ];
  return dirs[Math.round(deg / 22.5) % 16];
}

export function uvLabel(uv: number): string {
  if (uv < 3) return 'Baja';
  if (uv < 6) return 'Moderada';
  if (uv < 8) return 'Alta';
  if (uv < 11) return 'Muy alta';
  return 'Extrema';
}

export interface Advice {
  alert?: string;
  outfit: string[];
  activity: string[];
  items: string[];
}

// Recomendaciones derivadas del propio pronóstico (neutrales, sin nombrar fuentes).
// Lógica "smart": solo se muestran los consejos que aplican a la condición real.
export function buildAdvice(d: WeatherData): Advice {
  const { now, days } = d;
  const today = days[0] ?? {
    code: now.weatherCode,
    tMax: now.temperature,
    tMin: now.temperature,
    precipProb: now.precipitation > 0 ? 60 : 0,
    uvMax: 0,
    windMax: now.windSpeed,
  };

  const code = now.weatherCode;
  const precipProb = Math.max(today.precipProb, now.precipitation > 0 ? 60 : 0);
  const uvMax = Math.max(today.uvMax, 0);
  const windMax = Math.max(now.windSpeed, today.windMax);
  const tMax = today.tMax;
  const tMin = today.tMin;

  const isStorm = code >= 95;
  const isRain = (code >= 51 && code <= 67) || (code >= 80 && code <= 82);
  const isLightRain = (code >= 51 && code <= 57) || code === 80;
  const isHeavyRain = (code >= 61 && code <= 67) || code === 81 || code === 82;
  const isClear = code <= 1;
  const isCloudy = code >= 2 && code <= 3;
  const isFog = code === 45 || code === 48;

  const outfit: string[] = [];
  const activity: string[] = [];
  const items: string[] = [];

  // 👕 Cómo vestir
  outfit.push(
    'Ropa de colores claros, transpirable y de mangas largas: protege del sol, del calor y de los mosquitos de la amazonía.',
  );
  if (isRain) {
    outfit.push('Lleva puesta o en tu mochila ropa que se seca rápido; evita calzado que se empape.');
  }
  if (isHeavyRain || windMax >= 39) {
    outfit.push('Mejor una chaqueta o poncho impermeable que un paraguas: el viento lo vuelca.');
  }
  if (tMax >= 33) {
    outfit.push('Ropa muy ligera; evita varias capas, porque la humedad hace sentir más calor.');
  }
  if (tMax <= 22) {
    outfit.push('Una chaqueta ligera para la noche, cuando baja la temperatura y la humedad.');
  }

  // 🗓️ Qué hacer / cómo aprovechar
  if (isStorm) {
    activity.push(
      'Tormenta eléctrica: no camines bajo árboles ni cerca del río abierto; refúgiate en un espacio cerrado hasta que pase.',
    );
  } else if (isHeavyRain) {
    activity.push(
      'Lluvia intensa: pospone la caminata al aire libre y prefiere museos, mercados o pasillos cubiertos del centro.',
    );
  } else if (isLightRain) {
    activity.push(
      'Llovizna o lluvia leve: prioriza zonas con techo y el Malecón solo de paso; los paseos al aire libre serán incómodos.',
    );
  } else if (isClear) {
    activity.push(
      'Día despejado: ideal para recorrer la plaza y el Malecón a cielo abierto; aprovecha la luz para fotos.',
    );
  } else if (isCloudy) {
    activity.push(
      'Cielo nublado: luz suave y sin sol fuerte, muy cómodo para caminar y fotografiar el centro.',
    );
  } else if (isFog) {
    activity.push(
      'Niebla: la visibilidad baja; no es el mejor momento para fotos lejanas ni para salidas en lancha.',
    );
  }
  if (tMax >= 33) {
    activity.push('Evita el mediodía (12–15 h): sal temprano o al atardecer, cuando hay más sombra y menos calor.');
  }
  if (uvMax >= 8 && !isStorm) {
    activity.push('El sol es fuerte: busca la sombra de las palmeras y no te expongas largo rato a medio día.');
  }
  if (!isRain && !isStorm && precipProb >= 60) {
    activity.push('Hay probabilidad de lluvia más tarde: ten un plan B bajo techo por si acaso.');
  }

  // 🎒 Qué llevar
  if (precipProb >= 50 || isRain) {
    if (isHeavyRain || windMax >= 39) {
      items.push('Poncho o impermeable; evita el paraguas largo porque el viento lo vuelca.');
    } else {
      items.push('Paraguas plegable o impermeable, y una bolsa resellable para guardar el móvil si llueve.');
    }
  }
  if (tMax >= 32) {
    items.push('Agua para hidratarte: el calor y la humedad deshidratan rápido.');
  }
  if (uvMax >= 5) {
    items.push('Protector solar, gafas de sol y gorra de ala ancha.');
  }
  items.push('Repelente de insectos (amazonía); útil también al atardecer cerca del río.');
  items.push('Una muda ligera por si te mojas o sudas.');

  // ⚠️ Aviso (rojo, solo cuando la condición es realmente severa; derivado de los datos)
  let alert: string | undefined;
  if (isStorm) {
    alert =
      'Tormenta eléctrica en la zona. No salgas a cielo abierto, no te refugies bajo árboles ni cerca del río; las salidas en lancha pueden suspenderse. Espera a que pase el fenómeno.';
  } else if (windMax >= 50) {
    alert =
      'Viento fuerte. Mantente lejos de cornisas, cables y zonas ribereñas; las actividades acuáticas pueden cancelarse.';
  } else if (isHeavyRain && precipProb >= 70) {
    alert =
      'Lluvia intensa. Evita zonas bajas y desagües; el piso mojado y resbaladizo aumenta el riesgo de caídas.';
  }

  return { alert, outfit, activity, items };
}

export async function getWeather(): Promise<WeatherData | null> {
  const url = buildWeatherUrl(LAT, LON);
  try {
    const res = await fetch(url, {
      cf: { cacheTtl: 600, cacheEverything: true },
    } as unknown as RequestInit);
    if (!res.ok) return null;
    const j = (await res.json()) as any;
    const c = j.current;
    const now: WeatherNow = {
      temperature: c.temperature_2m,
      apparent: c.apparent_temperature,
      humidity: c.relative_humidity_2m,
      windSpeed: c.wind_speed_10m,
      windDirection: c.wind_direction_10m,
      precipitation: c.precipitation,
      weatherCode: c.weather_code,
      isDay: c.is_day === 1,
    };
    const days: WeatherDay[] = (j.daily.time as string[]).map((date: string, i: number) => ({
      date,
      code: j.daily.weather_code[i],
      tMax: j.daily.temperature_2m_max[i],
      tMin: j.daily.temperature_2m_min[i],
      precipProb: j.daily.precipitation_probability_max?.[i] ?? 0,
      uvMax: j.daily.uv_index_max?.[i] ?? 0,
      windMax: j.daily.wind_speed_10m_max?.[i] ?? 0,
    }));
    return { now, days, fetchedAt: new Date().toISOString() };
  } catch {
    return null;
  }
}

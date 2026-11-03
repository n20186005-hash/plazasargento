// Registro central de páginas temáticas de plazasargento.com.
// Sistema basado en datos: cada entrada genera una URL independiente con
// su propio Title, H1, meta description, canonical, Schema y enlaces internos.
// Única fuente de verdad para las 42 páginas de expansión.

export type TopicGroup = 'historia' | 'visita' | 'alrededores' | 'comer' | 'rutas';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faq: TopicFaq[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  related: string[];
  content: TopicContent;
}

export const GROUP_LABELS: Record<
  TopicGroup,
  { label: string; description: string }
> = {
  historia: {
    label: 'Historia y cultura',
    description:
      'El nombre de la plaza, la figura de Fernando Lores Tenazoa, el Combate de Güeppí y la memoria urbana de Iquitos.',
  },
  visita: {
    label: 'Cómo visitar',
    description:
      'Ubicación, mapa, transporte, horarios, accesibilidad y decisiones prácticas para tu visita.',
  },
  alrededores: {
    label: 'Alrededores y cultura',
    description:
      'Plazas, museos, arquitectura del caucho, iglesias y hospedaje cercanos a la Plaza Sargento Lores.',
  },
  comer: {
    label: 'Dónde comer',
    description:
      'Gastronomía amazónica, cafés, desayunos, almuerzos, cenas y opciones vegetarianas en el centro.',
  },
  rutas: {
    label: 'Rutas y paseos',
    description:
      'Itinerarios de 90 minutos, medio día, día completo, familiares, de lluvia y fotográficos.',
  },
};

const UPDATED = 'noviembre 2026';

export const TOPICS: Topic[] = [
  // ───────────────────────── A. HISTORIA Y CULTURA (6) ─────────────────────────
  {
    slug: 'historia-plaza-sargento-lores',
    group: 'historia',
    related: ['fernando-lores-tenazoa', 'combate-de-gueppi-1933', 'monumento-sargento-lores'],
    content: {
      metaTitle: 'Historia de la Plaza Sargento Lores, Iquitos: origen y nombre',
      metaDescription:
        'Cómo nació la Plaza Sargento Lores de Iquitos, por qué lleva ese nombre y su papel cívico junto a la Municipalidad de Maynas.',
      h1: 'Historia de la Plaza Sargento Lores (Iquitos)',
      lead: 'La plaza honra a Fernando Lores Tenazoa y funciona como nodo cívico del centro de Iquitos, frente a la Municipalidad Provincial de Maynas.',
      updated: UPDATED,
      sections: [
        {
          heading: 'De espacio verde a nodo cívico',
          paragraphs: [
            'La Plaza Sargento Lores es un espacio público del distrito de Iquitos, en la región Loreto. Su ubicación, junto a la sede de la Municipalidad Provincial de Maynas (Echenique 350), la vincula de forma directa con la vida institucional y comunitaria de la ciudad.',
            'Como en muchas plazas peruanas, el nombre rememora a una figura de la memoria de frontera. La plaza no es solo área verde: acoge ferias, campañas de salud, actos cívicos y conmemoraciones a lo largo del año.',
          ],
        },
        {
          heading: 'El nombre y su origen',
          paragraphs: [
            'El nombre recuerda al sargento Fernando Lores Tenazoa, militar peruano asociado al Combate de Güeppí del 26 de marzo de 1933, durante el conflicto colombo-peruano. Mantener su nombre en el paisaje cotidiano es, para la ciudad, una forma de preservar esa memoria.',
          ],
          callout:
            'Contexto documental: fuentes públicas peruanas confirman la presencia de la Municipalidad Provincial de Maynas en Echenique 350 y registran intervenciones de mejora del espacio urbano.',
        },
        {
          heading: 'Mejoramiento urbano',
          paragraphs: [
            'La Contraloría General documentó en 2018 la obra de mejoramiento de la plaza impulsada por la Municipalidad Provincial de Maynas. Estas intervenciones contemporáneas confirman que el espacio sigue siendo objeto de políticas públicas locales.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Por qué la plaza se llama Sargento Lores?',
          a: 'Lleva el nombre de Fernando Lores Tenazoa, recordado por su participación en el Combate de Güeppí (26 de marzo de 1933) durante el conflicto colombo-peruano. La plaza lo homenajea como referencia cívica de Iquitos.',
        },
        {
          q: '¿La plaza es solo un parque?',
          a: 'No. Además de su uso urbano y recreativo, funciona como punto de referencia para orientar rutas en el centro y como escenario de actos cívicos y ferias comunitarias.',
        },
        {
          q: '¿Cuándo se remodeló la plaza?',
          a: 'La Contraloría registró una obra de mejoramiento en 2018 a cargo de la Municipalidad Provincial de Maynas. Las condiciones actuales conviene confirmarlas con la municipalidad antes de una visita concreta.',
        },
      ],
    },
  },
  {
    slug: 'fernando-lores-tenazoa',
    group: 'historia',
    related: ['combate-de-gueppi-1933', 'historia-plaza-sargento-lores', 'monumento-sargento-lores'],
    content: {
      metaTitle: 'Quién fue Fernando Lores Tenazoa: biografía y memoria en Iquitos',
      metaDescription:
        'Fernando Lores Tenazoa, militar peruano recordado por el Combate de Güeppí (1933). Su figura da nombre a la plaza de Iquitos.',
      h1: 'Fernando Lores Tenazoa',
      lead: 'Fernando Lores Tenazoa fue un militar peruano cuya memoria está ligada al Combate de Güeppí y al nombre de una de las plazas cívicas de Iquitos.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Una figura de la memoria de frontera',
          paragraphs: [
            'El sargento Fernando Lores Tenazoa es recordado por su actuación en la defensa de Güeppí. La plaza de Iquitos lleva su nombre como homenaje cívico y forma parte de la memoria de frontera de la amazonía peruana.',
            'El Instituto del Ejército del Perú publica una ficha biográfica sobre el sargento segundo Fernando Lores Tenazoa, que esta guía toma como referencia documental para contextualizar el nombre del lugar.',
          ],
        },
        {
          heading: 'Por qué importa en Iquitos',
          paragraphs: [
            'En la toponimia urbana de Iquitos, las plazas conmemoran a figuras y episodios de la historia nacional. El nombre de la plaza mantiene viva la referencia a Lores Tenazoa en el uso diario de la ciudad.',
          ],
          callout:
            'Esta guía es independiente: presenta el contexto histórico con fuentes públicas y no sustituye la información oficial ni los materiales educativos del Ejército del Perú.',
        },
      ],
      faq: [
        {
          q: '¿Quién fue Fernando Lores Tenazoa?',
          a: 'Fue un militar peruano (sargento segundo) recordado por su participación en el Combate de Güeppí, ocurrido el 26 de marzo de 1933 durante el conflicto colombo-peruano. La plaza de Iquitos lleva su nombre como homenaje.',
        },
        {
          q: '¿Dónde se puede verificar su biografía?',
          a: 'El Instituto del Ejército del Perú publica una ficha sobre Fernando Lores Tenazoa. Esta guía la usa como referencia y recomienda consultar directamente las fuentes oficiales para estudios o trabajos.',
        },
      ],
    },
  },
  {
    slug: 'combate-de-gueppi-1933',
    group: 'historia',
    related: ['fernando-lores-tenazoa', 'historia-plaza-sargento-lores', 'monumento-sargento-lores'],
    content: {
      metaTitle: 'Combate de Güeppí 1933: contexto histórico y fuentes',
      metaDescription:
        'Qué fue el Combate de Güeppí del 26 de marzo de 1933, durante el conflicto colombo-peruano, y por qué Iquitos recuerda a Fernando Lores.',
      h1: 'El Combate de Güeppí (26 de marzo de 1933)',
      lead: 'El Combate de Güeppí fue uno de los episodios finales del conflicto colombo-peruano en la frontera amazónica. La memoria de quienes lo combatieron pervive en el nombre de plazas como la de Iquitos.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Contexto del conflicto colombo-peruano',
          paragraphs: [
            'El Combate de Güeppí ocurrió el 26 de marzo de 1933, en el marco del conflicto colombo-peruano en la frontera amazónica. Fue uno de los episodios finales de esa confrontación y quedó inscrito en la memoria de frontera del Perú.',
            'La Plaza Sargento Lores de Iquitos toma su nombre de Fernando Lores Tenazoa, figura recordada por su actuación en esa defensa, manteniendo vivo el recuerdo en el paisaje urbano cotidiano.',
          ],
        },
        {
          heading: 'Cómo se recuerda en la ciudad',
          paragraphs: [
            'Como en otras plazas de la región, el homenaje a una figura vinculada a la memoria de frontera es una forma de mantener el recuerdo histórico en el uso diario. La plaza acoge, además, actos cívicos y ceremonias.',
          ],
          callout:
            'Las fechas y los hechos se presentan con criterio documental y respetuoso. Para investigación o cátedra, consulta las fuentes oficiales del Ejército del Perú y de la historia diplomática de la época.',
        },
      ],
      faq: [
        {
          q: '¿Qué fue el Combate de Güeppí?',
          a: 'Fue un enfrentamiento ocurrido el 26 de marzo de 1933 durante el conflicto colombo-peruano en la frontera amazónica. Es recordado como uno de los episodios finales de esa confrontación.',
        },
        {
          q: '¿Qué relación tiene con la plaza?',
          a: 'La plaza de Iquitos lleva el nombre de Fernando Lores Tenazoa, militar peruano asociado a ese combate, como homenaje cívico.',
        },
      ],
    },
  },
  {
    slug: 'monumento-sargento-lores',
    group: 'historia',
    related: ['fernando-lores-tenazoa', 'historia-plaza-sargento-lores', 'fotos-plaza-sargento-lores'],
    content: {
      metaTitle: 'Monumento a Sargento Lores en Iquitos: significado y visita',
      metaDescription:
        'Qué representa el monumento de la Plaza Sargento Lores, su simbolismo cívico y cómo se integra a la visita al centro de Iquitos.',
      h1: 'El monumento de la Plaza Sargento Lores',
      lead: 'El monumento de la plaza es el elemento que da sentido al nombre del lugar: un homenaje cívico a Fernando Lores Tenazoa en el centro de Iquitos.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Simbolismo cívico',
          paragraphs: [
            'El monumento de la plaza materializa el homenaje a Fernando Lores Tenazoa. En el recorrido por el centro de Iquitos, es el punto que permite explicar por qué el espacio lleva ese nombre y cómo se entrelaza con la memoria de frontera de la amazonía.',
          ],
        },
        {
          heading: 'Cómo observarlo',
          paragraphs: [
            'Al visitar la plaza, reserva unos minutos para leer las inscripciones y observar el entorno cívico. Como espacio abierto, no requiere entrada ni horario especial para recorrerlo de forma respetuosa durante el día.',
          ],
          callout:
            'La guía incluye una fotografía real de la plaza tomada en 2022, pero no es una verificación detallada ni actualizada del monumento. También contiene ilustraciones conceptuales. En la página de fotos encontrarás sugerencias para fotografiar el lugar.',
        },
      ],
      faq: [
        {
          q: '¿Qué representa el monumento?',
          a: 'Representa el homenaje cívico a Fernando Lores Tenazoa, militar peruano asociado al Combate de Güeppí (1933). Es la pieza central que explica el nombre de la plaza.',
        },
        {
          q: '¿Se puede visitar por dentro?',
          a: 'La plaza es un espacio público al aire libre; el monumento se observa desde el paseo. No hay un recinto de exhibición que esta guía haya verificado.',
        },
      ],
    },
  },
  {
    slug: 'remodelacion-plaza-sargento-lores',
    group: 'historia',
    related: ['historia-plaza-sargento-lores', 'monumento-sargento-lores', 'servicios-cercanos'],
    content: {
      metaTitle: 'Remodelación de la Plaza Sargento Lores: obras y documentos',
      metaDescription:
        'Qué se sabe de las intervenciones de mejora de la plaza según la Contraloría y la Municipalidad de Maynas, y cómo verificar el estado actual.',
      h1: 'Remodelación y mejoramiento de la plaza',
      lead: 'La plaza ha sido objeto de intervenciones públicas. La Contraloría documentó una obra de mejoramiento en 2018; el estado actual conviene confirmarlo antes de visitar.',
      updated: UPDATED,
      sections: [
        {
          heading: 'La obra de 2018',
          paragraphs: [
            'La Contraloría General de la República registró en 2018 la obra de mejoramiento de la Plaza Sargento Lores, impulsada por la Municipalidad Provincial de Maynas. Ese antecedente confirma la atención pública continua al espacio.',
          ],
          callout:
            'Documento de referencia: nota de la Contraloría sobre la obra de mejoramiento de la plaza (2018). Úsala para contexto; para el estado actual, consulta a la municipalidad.',
        },
        {
          heading: 'Cómo verificar el estado actual',
          paragraphs: [
            'Las obras y su mantenimiento cambian con el tiempo. Antes de planear una visita que dependa de instalaciones específicas (juegos, luminarias, pisos), confirma el estado con la Municipalidad Provincial de Maynas o sus canales oficiales.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuándo se remodeló la plaza?',
          a: 'La Contraloría registró una obra de mejoramiento en 2018 a cargo de la Municipalidad Provincial de Maynas. No verificamos intervenciones posteriores específicas en esta guía.',
        },
        {
          q: '¿Está abierta durante las obras?',
          a: 'Depende de cada intervención. Consulta los avisos municipales antes de tu visita; esta guía no certifica disponibilidad ni accesos durante obras.',
        },
      ],
    },
  },
  {
    slug: 'fotos-plaza-sargento-lores',
    group: 'historia',
    related: ['monumento-sargento-lores', 'historia-plaza-sargento-lores', 'ruta-fotografica-centro-iquitos'],
    content: {
      metaTitle: 'Fotos de la Plaza Sargento Lores: dónde y cómo fotografiarla',
      metaDescription:
        'Sugerencias para fotografiar la Plaza Sargento Lores de Iquitos: mejores horarios, ángulos y qué tener en cuenta, con honestidad sobre las imágenes de esta guía.',
      h1: 'Fotografiar la Plaza Sargento Lores',
      lead: 'La guía incluye una fotografía real de la plaza tomada en 2022 y dos ilustraciones conceptuales. Aquí encontrarás cómo capturar tú mismo fotos actuales del lugar.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Una fotografía documental y dos ilustraciones',
          paragraphs: [
            'La fotografía documental de la plaza fue tomada el 2 de marzo de 2022 por LLs y se reproduce sin modificaciones bajo licencia CC BY-SA 4.0 (Wikimedia Commons). No debe interpretarse como evidencia del estado actual del lugar.',
            'Las otras dos imágenes de apoyo son representaciones conceptuales (palmeras, paseos imaginados), no planos del trazado real. Para ver las condiciones actuales, consulta fuentes recientes o toma tus propias fotos durante la visita.',
          ],
        },
        {
          heading: 'Mejor luz y ángulos',
          paragraphs: [
            'La luz dorada del amanecer y del atardecer suele ser la más favorecedora para la vegetación y la arquitectura cívica. El mediodía, con el calor amazónico, produce sombras duras.',
            'Prueba encuadres amplios del paseo, planos medios del monumento y detalles de las palmeras y el movimiento cotidiano. Respeta actos cívicos o ceremonias si están en curso.',
          ],
        },
        {
          heading: 'Qué llevar',
          bullets: [
            'Protector solar, gorra y agua: fotografías cómodas bajo el sol de Iquitos.',
            'Una batería o carga extra: el calor y la humedad desgastan los equipos.',
            'Referencias del entorno: Municipalidad de Maynas y calles aledañas para dar contexto a la foto.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Las fotos del sitio son reales?',
          a: 'La primera imagen de la galería y el fondo de la portada son una fotografía real de 2022 de LLs (CC BY-SA 4.0). Las otras dos imágenes de apoyo son ilustraciones conceptuales.',
        },
        {
          q: '¿Cuál es el mejor horario para fotografiar?',
          a: 'Amaneceres y atardeceres ofrecen luz suave y menos calor. Evita el mediodía si buscas sombras agradables.',
        },
      ],
    },
  },

  // ───────────────────────── B. CÓMO VISITAR (9) ─────────────────────────
  {
    slug: 'ubicacion-mapa-plaza-sargento-lores',
    group: 'visita',
    related: ['horario-entrada-precio', 'estacionamiento-cerca-plaza', 'de-plaza-sargento-lores-a-plaza-de-armas'],
    content: {
      metaTitle: 'Ubicación y mapa de la Plaza Sargento Lores, Iquitos',
      metaDescription:
        'Dirección, coordenadas y mapa de la Plaza Sargento Lores (Ramón Castilla 349, Iquitos). Cómo ubicarla y orientarte en el centro.',
      h1: 'Dónde está la Plaza Sargento Lores',
      lead: 'Dirección de referencia: Ramón Castilla 349, Iquitos 16001, Maynas, Loreto, Perú. Frente a la Municipalidad Provincial de Maynas.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Datos de ubicación',
          paragraphs: [
            'La ficha de Maps indica Ramón Castilla 349, Iquitos 16001, Loreto, Perú. Las coordenadas de referencia son −3.7479238, −73.2521373 y el código Plus es 7P2X+R4 (Iquitos, Perú).',
            'La plaza se ubica en el tejido central de Iquitos, cerca de ejes urbanos como Echenique, Ramón Castilla, Sargento Lores y Morona.',
          ],
          callout:
            'El punto de Maps no certifica accesos ni servicios. Úsalo para orientarte, pero confirma el camino a pie comprobando cruces y pavimento.',
        },
        {
          heading: 'Cómo orientarte',
          paragraphs: [
            'Además de la dirección, menciona puntos conocidos al conductor (Municipalidad de Maynas, Plaza de Armas) para facilitar la llegada. Lleva un mapa descargado: la señal puede variar entre zonas.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuál es la dirección exacta?',
          a: 'La referencia es Ramón Castilla 349, Iquitos 16001, Maynas, Loreto, Perú. La sede municipal tiene otra dirección de referencia (Echenique 350), pero el punto de Maps de la plaza es el indicado arriba.',
        },
        {
          q: '¿El mapa garantiza el acceso?',
          a: 'No. Un punto en el mapa no acredita una ruta peatonal accesible ni servicios. Confirma el camino antes de salir.',
        },
      ],
    },
  },
  {
    slug: 'horario-entrada-precio',
    group: 'visita',
    related: ['ubicacion-mapa-plaza-sargento-lores', 'clima-seguridad-visita', 'accesibilidad-plaza-sargento-lores'],
    content: {
      metaTitle: 'Horario y entrada de la Plaza Sargento Lores: ¿cobra?',
      metaDescription:
        'Es una plaza pública: entrada libre. Horarios de referencia, mejor momento para ir y advertencias sobre actividades o servicios.',
      h1: 'Horario, entrada y precio',
      lead: 'Es una plaza pública, de entrada libre. No hemos confirmado una tarifa ni condiciones de eventos temporales; consulta al organizador antes de participar.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Entrada y costo',
          paragraphs: [
            'Como espacio público, la plaza no tiene una entrada de pago verificada por esta guía. Si coincide con una feria o actividad, pregunta al organizador por condiciones y costos antes de participar.',
          ],
        },
        {
          heading: 'Mejor horario y duración',
          paragraphs: [
            'Por el clima cálido y húmedo, suelen ser más cómodas las primeras horas de la mañana y el final de la tarde. Una visita tranquila puede durar entre 30 y 60 minutos, ampliable si hay actividad cívica o cultural.',
          ],
          callout:
            'La ficha de Google Maps se mostraba abierta 24 horas al consultarla el 1 de noviembre de 2026 (UTC). Es una referencia de terceros: no garantiza accesos sin restricciones ni horarios de comercios.',
        },
      ],
      faq: [
        {
          q: '¿La plaza cobra entrada?',
          a: 'Es un espacio público. Esta guía no ha confirmado una tarifa ni condiciones de actividades temporales; consulta al organizador antes de participar.',
        },
        {
          q: '¿Está abierta todo el día?',
          a: 'El dato de terceros (Google Maps) indicaba apertura 24 horas al 1 de noviembre de 2026, pero es referencial. No garantiza accesos ni horarios de servicios.',
        },
        {
          q: '¿Cuánto tiempo conviene dedicarle?',
          a: 'Entre 30 y 60 minutos para recorrerla, descansar y observar el entorno; más si coincides con un evento cívico o cultural.',
        },
      ],
    },
  },
  {
    slug: 'de-plaza-sargento-lores-a-plaza-de-armas',
    group: 'visita',
    related: ['ubicacion-mapa-plaza-sargento-lores', 'plaza-de-armas-iquitos-cerca', 'ruta-medio-dia-plaza-sargento-lores'],
    content: {
      metaTitle: 'De Plaza Sargento Lores a Plaza de Armas de Iquitos a pie',
      metaDescription:
        'Cómo ir caminando de la Plaza Sargento Lores a la Plaza de Armas: distancia aproximada, tiempo y consejos de ruta en el centro de Iquitos.',
      h1: 'De Plaza Sargento Lores a la Plaza de Armas',
      lead: 'Ambas plazas están en el centro de Iquitos y se pueden enlazar a pie como parte de un recorrido histórico. Confirma el camino en el mapa antes de salir.',
      updated: UPDATED,
      sections: [
        {
          heading: 'La caminata',
          paragraphs: [
            'La Plaza Sargento Lores y la Plaza de Armas están en el tejido central de Iquitos, separadas por un trayecto peatonal de unos minutos según el mapa. La distancia exacta y el tiempo dependen de tu punto de partida y del calor.',
            'Camina por las calles céntricas con sombra cuando puedas, lleva agua y comprueba cruces y pavimento. Un punto en el mapa no acredita una ruta accesible.',
          ],
        },
        {
          heading: 'Consejos',
          bullets: [
            'Sal temprano o al atardecer para evitar el mediodía más caluroso.',
            'Menciona la Municipalidad de Maynas y la Plaza de Armas como referencias si preguntas en el camino.',
            'Combínala con el Malecón Tarapacá si quieres una ruta más larga hacia el río.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Se puede ir caminando?',
          a: 'Sí, ambas plazas están en el centro y se enlazan a pie en unos minutos según el mapa. Confirma el camino y cuida el calor y la lluvia.',
        },
        {
          q: '¿Cuánto se tarda?',
          a: 'El tiempo depende de tu ritmo y del punto exacto de partida. Como referencia, se trata de un trayecto corto dentro del centro; lleva agua y no te expongas al mediodía.',
        },
      ],
    },
  },
  {
    slug: 'aeropuerto-iquitos-a-plaza-sargento-lores',
    group: 'visita',
    related: ['mototaxi-taxi-centro-iquitos', 'ubicacion-mapa-plaza-sargento-lores', 'donde-alojarse-centro-iquitos'],
    content: {
      metaTitle: 'Del aeropuerto de Iquitos a Plaza Sargento Lores: cómo llegar',
      metaDescription:
        'Opciones para ir del aeropuerto de Iquitos a la plaza: traslado, taxi y mototaxi, con consejos de precio y seguridad. Iquitos solo tiene acceso aéreo o fluvial.',
      h1: 'Del aeropuerto a la Plaza Sargento Lores',
      lead: 'Iquitos no tiene salida por carretera: se llega en avión o en barco. Desde el aeropuerto, organiza un traslado identificable hasta Ramón Castilla 349.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Cómo llegar desde el aeropuerto',
          paragraphs: [
            'El aeropuerto internacional de Iquitos (Coronel FAP Francisco Secada Vignetta, IQT) es la puerta aérea de la ciudad. Desde allí, organiza un traslado con un proveedor identificable y comunica el destino completo: Plaza Sargento Lores, Ramón Castilla 349.',
            'Iquitos solo es accesible por aire o por río, lo que hace que el traslado desde el aeropuerto sea casi siempre el primer paso del viaje.',
          ],
        },
        {
          heading: 'Consejos de traslado',
          bullets: [
            'Acuerda precio, ruta y condiciones antes de subir; esta guía no verifica tarifas ni tiempos.',
            'Menciona referencias conocidas (Municipalidad de Maynas, Plaza de Armas) para orientar al conductor.',
            'Confirma el servicio para tu regreso al aeropuerto con antelación.',
          ],
          callout:
            'El precio y la duración del viaje varían. No publishes ni confíes en cifras exactas que no hayas confirmado en el momento; el tráfico y el tipo de vehículo cambian el tiempo.',
        },
      ],
      faq: [
        {
          q: '¿Cómo llego del aeropuerto a la plaza?',
          a: 'Organiza un traslado con un proveedor identificable y da la dirección completa (Ramón Castilla 349). Iquitos solo se alcanza por avión o río.',
        },
        {
          q: '¿Cuánto cuesta el taxi del aeropuerto?',
          a: 'Esta guía no verifica tarifas. Acuerda el precio antes de subir y confirma las condiciones con tu proveedor.',
        },
      ],
    },
  },
  {
    slug: 'mototaxi-taxi-centro-iquitos',
    group: 'visita',
    related: ['aeropuerto-iquitos-a-plaza-sargento-lores', 'estacionamiento-cerca-plaza', 'ruta-con-poca-caminata-iquitos'],
    content: {
      metaTitle: 'Mototaxi y taxi en Iquitos: cómo moverte al centro',
      metaDescription:
        'Opciones de transporte en Iquitos para llegar a la Plaza Sargento Lores: taxi, mototaxi y transporte fluvial, con consejos de seguridad y precio.',
      h1: 'Moverse en Iquitos: taxi y mototaxi',
      lead: 'En Iquitos predominan el taxi, el mototaxi y los vehículos de tres ruedas. Acuerda el precio antes de subir y usa transporte formal o autorizado.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Tipos de transporte',
          paragraphs: [
            'El centro de Iquitos se recorre habitualmente en taxi, mototaxi y motocarro (vehículo de tres ruedas). Para llegar a la plaza, acuerda un punto seguro para bajar y respeta la señalización.',
          ],
        },
        {
          heading: 'Consejos prácticos',
          bullets: [
            'Confirma la tarifa antes de subir a taxi o mototaxi.',
            'Lleva referencias además de la dirección (Municipalidad de Maynas, Plaza de Armas).',
            'Usa transporte formal o autorizado y guarda tus pertenencias.',
            'Ten a mano un mapa descargado; la señal puede variar entre zonas.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué transporte usar en Iquitos?',
          a: 'Taxi, mototaxi y motocarro son comunes en el centro. Acuerda precio y condiciones antes de subir; esta guía no recomienda proveedores concretos.',
        },
        {
          q: '¿Cómo pago o negocio el precio?',
          a: 'Acuerda la tarifa antes de subir y confirma el destino. No verificamos tarifas fijas; consulte las condiciones de su proveedor.',
        },
      ],
    },
  },
  {
    slug: 'estacionamiento-cerca-plaza',
    group: 'visita',
    related: ['ubicacion-mapa-plaza-sargento-lores', 'horario-entrada-precio', 'mototaxi-taxi-centro-iquitos'],
    content: {
      metaTitle: 'Estacionamiento cerca de Plaza Sargento Lores, Iquitos',
      metaDescription:
        'Dónde dejar el vehículo cerca de la plaza: la plaza no es estacionamiento; usa espacios permitidos en vías cercanas y respeta la señalización.',
      h1: 'Estacionamiento cerca de la plaza',
      lead: 'La plaza no debe entenderse como estacionamiento. El aparcamiento depende de la regulación de las vías cercanas y de la señalización vigente.',
      updated: UPDATED,
      sections: [
        {
          heading: 'La plaza no es estacionamiento',
          paragraphs: [
            'No se considera estacionamiento dentro de la plaza. Para vehículos, utiliza únicamente espacios permitidos en las vías cercanas y respeta la señalización, zonas reservadas y accesos peatonales.',
            'Acuerda un punto seguro para bajar y no bloquees accesos peatonales ni áreas cívicas.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Busca espacios permitidos en las calles aledañas y verifica la regulación local.',
            'Evita dejar el vehículo obstruyendo accesos peatonales o la sede municipal.',
            'Si llegas en servicio de transporte, define el punto de bajada antes de salir.',
          ],
          callout:
            'No hemos verificado zonas de estacionamiento concretas ni tarifas. La disponibilidad y la regulación cambian; confírmalas en el lugar.',
        },
      ],
      faq: [
        {
          q: '¿Hay estacionamiento dentro de la plaza?',
          a: 'No. La plaza es un espacio cívico y no debe usarse como estacionamiento. Usa espacios permitidos en las vías cercanas.',
        },
        {
          q: '¿Dónde puedo dejar el auto?',
          a: 'Depende de la regulación local vigente. Esta guía no certifica zonas ni tarifas; busca espacios permitidos y respeta la señalización.',
        },
      ],
    },
  },
  {
    slug: 'accesibilidad-plaza-sargento-lores',
    group: 'visita',
    related: ['visitar-plaza-con-ninos', 'estacionamiento-cerca-plaza', 'ruta-con-poca-caminata-iquitos'],
    content: {
      metaTitle: 'Accesibilidad de la Plaza Sargento Lores: rampas y descansos',
      metaDescription:
        'Accesibilidad en la plaza: bordillos, cruces, sombra y descanso. Qué comprobar antes de ir con silla de ruedas o movilidad reducida.',
      h1: 'Accesibilidad de la plaza',
      lead: 'Comprueba pavimentos, bordillos y obstáculos antes de avanzar. Esta guía no certifica una ruta accesible ni la disponibilidad continua de bancos o sombra.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Qué comprobar',
          paragraphs: [
            'Como espacio urbano al aire libre, la accesibilidad depende del estado del pavimento, los bordillos y los cruces. Antes de avanzar, verifica estos puntos y localiza dónde descansar.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Evita las horas de mayor calor (mediodía) si necesitas descansos frecuentes.',
            'Combina con espacios cubiertos cercanos si hace sol intenso o llueve.',
            'Lleva agua y no asumas bancos o sombra continua.',
          ],
          callout:
            'No hemos verificado una ruta sin escalones ni la disponibilidad de baños accesibles. Confirma estas condiciones in situ antes de tu visita.',
        },
      ],
      faq: [
        {
          q: '¿Es accesible para silla de ruedas?',
          a: 'Depende del pavimento y los cruces del momento. Esta guía no certifica una ruta accesible; comprueba bordillos y obstáculos antes de avanzar.',
        },
        {
          q: '¿Hay baños accesibles?',
          a: 'La presencia permanente de baños públicos dentro de la plaza puede no estar garantizada. Busca equipamientos públicos o establecimientos autorizados cercanos.',
        },
      ],
    },
  },
  {
    slug: 'visitar-plaza-con-ninos',
    group: 'visita',
    related: ['accesibilidad-plaza-sargento-lores', 'ruta-familiar-plaza-sargento-lores', 'clima-seguridad-visita'],
    content: {
      metaTitle: 'Visitar la Plaza Sargento Lores con niños: guía familiar',
      metaDescription:
        'Consejos para ir a la plaza con niños: sombra, descanso, hidratación, seguridad y cómo enlazar con otros paseos del centro.',
      h1: 'Visitar la plaza con niños',
      lead: 'Prioriza sombra, descanso e hidratación. Un recorrido tranquilo de 30 a 45 minutos puede cerrarse con un paseo corto hacia la Plaza de Armas o el Malecón.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Plan familiar',
          paragraphs: [
            'Recorre los paseos y áreas verdes con calma, planifica agua y una pausa, y confirma los baños por separado. Cierra con un paseo corto hacia la Plaza de Armas o el Malecón Tarapacá.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Lleva agua y protector solar; el calor amazónico exige precaución.',
            'Busca sombra y no expongas a los niños al mediodía.',
            'Define un punto de encuentro por si se separan en el paseo.',
            'Confirma baños y descansos antes de depender de ellos.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Es apta para niños?',
          a: 'Sí, como paseo urbano tranquilo. Prioriza sombra, descanso e hidratación y confirma los baños por separado.',
        },
        {
          q: '¿Cuánto tiempo con niños?',
          a: 'Una propuesta de 30 a 45 minutos, con pausa, es razonable antes de continuar hacia la Plaza de Armas o el Malecón.',
        },
      ],
    },
  },
  {
    slug: 'clima-seguridad-visita',
    group: 'visita',
    related: ['horario-entrada-precio', 'ruta-lluvia-museos-iquitos', 'visitar-plaza-con-ninos'],
    content: {
      metaTitle: 'Clima y seguridad al visitar la Plaza Sargento Lores',
      metaDescription:
        'Calor, humedad y lluvia en Iquitos: cómo prepararte, qué llevar y consejos de seguridad para visitar la plaza y el centro.',
      h1: 'Clima y seguridad de la visita',
      lead: 'Iquitos es cálido, húmedo y lluvioso. Hidrátate, protégete del sol y de la lluvia, y usa transporte formal o autorizado.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Adaptarse al clima',
          paragraphs: [
            'Lleva agua, protector solar, sombrero y una capa ligera para lluvia. Las primeras horas y el final de la tarde suelen ser más cómodos; acorta el tramo expuesto con sol fuerte.',
          ],
        },
        {
          heading: 'Seguridad',
          bullets: [
            'Usa transporte formal o autorizado y guarda tus pertenencias.',
            'Evita exhibir objetos de valor en la vía pública.',
            'Identifica centros de salud, farmacias y comisarías cercanas antes de desplazarte.',
            'Ten a mano los números de emergencia locales y una copia de tu documentación.',
          ],
          callout:
            'Las condiciones meteorológicas cambian: consulta el pronóstico y los avisos locales antes de salir y prioriza tu seguridad. El modelo de clima de esta guía no es un aviso oficial.',
        },
      ],
      faq: [
        {
          q: '¿Cuándo es mejor visitar?',
          a: 'Mañana temprano o al atardecer, por el calor y la humedad. Lleva agua, protección solar y una capa para lluvia.',
        },
        {
          q: '¿Es seguro el centro?',
          a: 'Como en cualquier ciudad, usa transporte autorizado, cuida tus pertenencias y evita exhibir objetos de valor. Identifica puntos de atención cercanos antes de salir.',
        },
      ],
    },
  },

  // ───────────────────────── C. ALREDEDORES Y CULTURA (12) ─────────────────────────
  {
    slug: 'plaza-de-armas-iquitos-cerca',
    group: 'alrededores',
    related: ['casa-de-fierro-cerca', 'catedral-de-iquitos-cerca', 'de-plaza-sargento-lores-a-plaza-de-armas'],
    content: {
      metaTitle: 'Plaza de Armas de Iquitos cerca de Plaza Sargento Lores',
      metaDescription:
        'Qué ver en la Plaza de Armas de Iquitos y cómo enlazarla con la Plaza Sargento Lores en un paseo por el centro histórico.',
      h1: 'Plaza de Armas de Iquitos',
      lead: 'La Plaza de Armas es el núcleo cívico y turístico de Iquitos, a pocos minutos de la Plaza Sargento Lores. Ideal para combinar en una caminata del centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'El corazón cívico',
          paragraphs: [
            'La Plaza de Armas de Iquitos concentra edificios históricos y la vida pública de la ciudad. Es el punto de partida natural de muchas rutas por el centro histórico y se enlaza a pie con la Plaza Sargento Lores.',
          ],
        },
        {
          heading: 'Cómo visitarla',
          bullets: [
            'Camina desde la Plaza Sargento Lores por el centro, preferiblemente temprano o al atardecer.',
            'Combínala con la Casa de Fierro y la Catedral, que están en el entorno céntrico.',
            'Verifica horarios de edificios o museos antes de desplazarte.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cómo ir de una plaza a otra?',
          a: 'Están en el centro y se enlazan a pie en unos minutos según el mapa. Confirma el camino y cuida el calor.',
        },
        {
          q: '¿Qué ver cerca?',
          a: 'La Casa de Fierro, la Catedral de Iquitos y el Malecón Tarapacá están en el entorno céntrico.',
        },
      ],
    },
  },
  {
    slug: 'casa-de-fierro-cerca',
    group: 'alrededores',
    related: ['arquitectura-epoca-caucho-iquitos', 'plaza-de-armas-iquitos-cerca', 'malecon-tarapaca-desde-plaza'],
    content: {
      metaTitle: 'Casa de Fierro de Iquitos: historia y visita',
      metaDescription:
        'La Casa de Fierro, símbolo de la época del caucho en Iquitos. Historia, arquitectura y cómo visitarla desde el centro.',
      h1: 'Casa de Fierro',
      lead: 'Icono de la arquitectura del boom del caucho, la Casa de Fierro es uno de los edificios más fotografiados de Iquitos y se visita fácilmente desde el centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Un símbolo del caucho',
          paragraphs: [
            'La Casa de Fierro es una de las imágenes más conocidas de Iquitos y se asocia a la época de auge del caucho, cuando la ciudad se transformó con materiales y estilos traídos de Europa. Su historia se entrelaza con la arquitectura del centro histórico.',
            'Se ubica en el entorno de la Plaza de Armas, lo que la hace cómoda de incluir en una ruta a pie que parte de la Plaza Sargento Lores.',
          ],
        },
        {
          heading: 'Cómo visitarla',
          bullets: [
            'Enlázala con la Plaza de Armas en un paseo céntrico.',
            'Verifica el horario de acceso o exhibición antes de ir.',
            'Es un punto habitual para fotografía de arquitectura.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué es la Casa de Fierro?',
          a: 'Es un edificio icónico de Iquitos, símbolo de la época del caucho y una de las imágenes más representativas del centro histórico.',
        },
        {
          q: '¿Se puede entrar?',
          a: 'Su uso ha variado con el tiempo. Verifica el horario y las condiciones de acceso en el momento de tu visita.',
        },
      ],
    },
  },
  {
    slug: 'catedral-de-iquitos-cerca',
    group: 'alrededores',
    related: ['plaza-de-armas-iquitos-cerca', 'arquitectura-epoca-caucho-iquitos', 'ruta-fotografica-centro-iquitos'],
    content: {
      metaTitle: 'Catedral de Iquitos: historia y visita',
      metaDescription:
        'La Catedral de Iquitos, arquitectura religiosa del centro. Historia, visita respetuosa y cómo llegar desde la Plaza Sargento Lores.',
      h1: 'Catedral de Iquitos',
      lead: 'La Catedral es un hito religioso y arquitectónico del centro de Iquitos, cercana a la Plaza de Armas y cómoda de visitar junto a otros edificios históricos.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Arquitectura y fe',
          paragraphs: [
            'La Catedral de Iquitos forma parte del conjunto de edificios históricos del centro y refleja la importancia religiosa y urbana de la ciudad durante y después del auge del caucho.',
          ],
        },
        {
          heading: 'Visita respetuosa',
          bullets: [
            'Respetala como lugar de culto: moderación en voz y vestimenta adecuada.',
            'Combínala con la Plaza de Armas y la Casa de Fierro.',
            'Confirma horarios de misas o visitas antes de desplazarte.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde está la Catedral?',
          a: 'En el entorno céntrico de Iquitos, cerca de la Plaza de Armas, accesible a pie desde la Plaza Sargento Lores.',
        },
        {
          q: '¿Se puede visitar?',
          a: 'Es un lugar de culto. Visítala con respeto y verifica horarios antes de ir; puede haber misas o actos en curso.',
        },
      ],
    },
  },
  {
    slug: 'malecon-tarapaca-desde-plaza',
    group: 'alrededores',
    related: ['ruta-tarde-malecon-tarapaca', 'casa-de-fierro-cerca', 'museo-amazonico-desde-plaza'],
    content: {
      metaTitle: 'Malecón Tarapacá de Iquitos: ruta desde Plaza Sargento Lores',
      metaDescription:
        'El Malecón Tarapacá, paseo ribereño de Iquitos. Historia, miradores y cómo llegar desde la plaza para una tarde de caminata.',
      h1: 'Malecón Tarapacá',
      lead: 'El Malecón Tarapacá es el paseo junto al río que mejor combina historia, arquitectura y vista urbana. Ideal para la tarde, tras visitar la plaza.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Paseo ribereño',
          paragraphs: [
            'El Malecón Tarapacá bordea el río y reúne edificios históricos, miradores y opciones de alimentación. Es uno de los paseos más agradables de Iquitos, especialmente al atardecer.',
            'Desde la Plaza Sargento Lores puedes encadenarlo con el centro cívico en una ruta de tarde que termina frente al agua.',
          ],
        },
        {
          heading: 'Qué ver',
          bullets: [
            'Edificios del periodo del caucho a lo largo del paseo.',
            'Miradores del río y del paisaje urbano.',
            'Opciones de café o cena en el entorno (ver página de dónde comer).',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cómo llegar al Malecón?',
          a: 'Desde la plaza, cruza el centro hacia el río; el Malecón Tarapacá es un paseo lineal frente al agua. Confirma el camino en el mapa.',
        },
        {
          q: '¿Cuál es el mejor momento?',
          a: 'La tarde y el atardecer suelen ser los más agradables para caminar junto al río y evitar el calor del mediodía.',
        },
      ],
    },
  },
  {
    slug: 'museo-amazonico-desde-plaza',
    group: 'alrededores',
    related: ['museo-culturas-indigenas-desde-plaza', 'ruta-lluvia-museos-iquitos', 'malecon-tarapaca-desde-plaza'],
    content: {
      metaTitle: 'Museo Amazónico de Iquitos: visita y ruta',
      metaDescription:
        'El Museo Amazónico (Malecón Tarapacá) y su colección cultural. Horarios, ubicación y cómo llegar desde la Plaza Sargento Lores.',
      h1: 'Museo Amazónico',
      lead: 'El Museo Amazónico reúne objetos y relatos de la cultura de la amazonía. Está en el Malecón Tarapacá, un paseo que puedes enlazar con la plaza.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Cultura amazónica',
          paragraphs: [
            'El Museo Amazónico, en el Malecón Tarapacá, reúne piezas y contexto sobre la historia y las culturas de la región. El Ministerio de Cultura del Perú mantiene información de los museos a su cargo.',
          ],
        },
        {
          heading: 'Cómo llegar',
          bullets: [
            'Camina desde la plaza hacia el río hasta el Malecón Tarapacá.',
            'Verifica el horario de visita antes de desplazarte.',
            'Combínalo con el Museo de Culturas Indígenas Amazónicas, que también está en el Malecón.',
          ],
          callout:
            'No hemos verificado el horario ni la entrada en esta guía. Confirma ambos con el museo o el Ministerio de Cultura antes de tu visita.',
        },
      ],
      faq: [
        {
          q: '¿Dónde está el Museo Amazónico?',
          a: 'En el Malecón Tarapacá de Iquitos. Se llega caminando desde el centro; verifica el horario antes de ir.',
        },
        {
          q: '¿Cuánto cuesta la entrada?',
          a: 'Esta guía no verifica tarifas. Consulta con el museo o el Ministerio de Cultura del Perú.',
        },
      ],
    },
  },
  {
    slug: 'museo-culturas-indigenas-desde-plaza',
    group: 'alrededores',
    related: ['museo-amazonico-desde-plaza', 'ruta-lluvia-museos-iquitos', 'malecon-tarapaca-desde-plaza'],
    content: {
      metaTitle: 'Museo de Culturas Indígenas Amazónicas, Iquitos',
      metaDescription:
        'El Museo de Culturas Indígenas Amazónicas en el Malecón Tarapacá. Qué exhibe, cómo llegar y por qué incluirlo en tu ruta.',
      h1: 'Museo de Culturas Indígenas Amazónicas',
      lead: 'Este museo, en el Malecón Tarapacá 332, se centra en las culturas indígenas de la amazonía. Buena opción para la lluvia y para profundizar en la región.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Diversidad indígena',
          paragraphs: [
            'El Museo de Culturas Indígenas Amazónicas exhibe la riqueza de los pueblos indígenas de la amazonía peruana. Su sede en el Malecón Tarapacá 332 lo hace cómodo de combinar con el Museo Amazónico y el paseo ribereño.',
          ],
        },
        {
          heading: 'Por qué visitarlo',
          bullets: [
            'Ideal como plan de lluvia: espacio cubierto y cultural.',
            'Complementa la historia del centro con la dimensión indígena de la región.',
            'Verifica horarios y condiciones de visita antes de ir.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde queda?',
          a: 'En el Malecón Tarapacá 332, Iquitos. Caminando desde el centro y junto al Museo Amazónico.',
        },
        {
          q: '¿Es bueno para días de lluvia?',
          a: 'Sí: es un espacio cubierto con contenido cultural, ideal para reemplazar un paseo al aire libre cuando llueve.',
        },
      ],
    },
  },
  {
    slug: 'mercado-central-iquitos-desde-plaza',
    group: 'alrededores',
    related: ['donde-comer-cerca-plaza-sargento-lores', 'almuerzo-comida-amazonica-centro', 'plaza-de-armas-iquitos-cerca'],
    content: {
      metaTitle: 'Mercado Central de Iquitos: guía desde la plaza',
      metaDescription:
        'El Mercado Central de Iquitos: comida local, productos amazónicos y vida urbana. Cómo llegar y qué tener en cuenta.',
      h1: 'Mercado Central de Iquitos',
      lead: 'El mercado es el pulso diario de la ciudad: comida, frutas amazónicas y comercio local. Se puede visitar desde la plaza como parte del centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Vida cotidiana',
          paragraphs: [
            'El Mercado Central de Iquitos reúne alimentación, frutas de la región y el comercio diario. Es un buen lugar para observar la vida urbana y probar productos amazónicos.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Prueba frutas amazónicas y comida local en puestos formales con buenas prácticas de higiene.',
            'Cuida tus pertenencias en el mercado, que suele ser concurrido.',
            'Lleva agua y no dependas de compras de último momento cerca de la plaza.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cómo llegar al mercado?',
          a: 'Está en el centro de Iquitos; se llega a pie desde la plaza o en taxi/mototaxi. Confirma el camino en el mapa.',
        },
        {
          q: '¿Qué comprar?',
          a: 'Frutas amazónicas, productos locales y comida típica en puestos formales. Esta guía no promociona comercios concretos.',
        },
      ],
    },
  },
  {
    slug: 'plaza-28-de-julio-desde-plaza',
    group: 'alrededores',
    related: ['plazas-de-iquitos-comparacion', 'plaza-de-armas-iquitos-cerca', 'de-plaza-sargento-lores-a-plaza-de-armas'],
    content: {
      metaTitle: 'Plaza 28 de Julio, Iquitos: visita y comparación',
      metaDescription:
        'La Plaza 28 de Julio y cómo se diferencia de otras plazas de Iquitos. Dónde está y cómo incluirla en una ruta más larga.',
      h1: 'Plaza 28 de Julio',
      lead: 'Otra de las plazas del centro de Iquitos, útil para una ruta de plazas más extensa que incluya también Sargento Lores y la Plaza de Armas.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Una ruta de plazas',
          paragraphs: [
            'Iquitos tiene varias plazas cívicas. La Plaza 28 de Julio permite armar un recorrido más amplio que enlace, además de la Sargento Lores y la Plaza de Armas, varios puntos del centro histórico.',
          ],
        },
        {
          heading: 'Cómo aprovecharla',
          bullets: [
            'Inclúyela en una caminata de varias plazas con descansos y sombra.',
            'Compárala con otras plazas usando la guía de plazas de Iquitos.',
            'Verifica distancias en el mapa antes de encadenar el recorrido completo.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Vale la pena visitarla?',
          a: 'Si te interesa una ruta de plazas del centro, sí. Permite comparar espacios cívicos distintos sin salir del casco urbano.',
        },
        {
          q: '¿Está lejos de la Plaza Sargento Lores?',
          a: 'Está en el centro; la distancia exacta depende de tu ruta. Confírmala en el mapa y cuida el calor al caminar.',
        },
      ],
    },
  },
  {
    slug: 'arquitectura-epoca-caucho-iquitos',
    group: 'alrededores',
    related: ['casa-de-fierro-cerca', 'catedral-de-iquitos-cerca', 'malecon-tarapaca-desde-plaza'],
    content: {
      metaTitle: 'Arquitectura de la época del caucho en Iquitos',
      metaDescription:
        'El boom del caucho y su legado arquitectónico en Iquitos: edificios, fachadas y rutas para recorrer el centro histórico.',
      h1: 'Arquitectura de la época del caucho',
      lead: 'El auge del caucho a finales del siglo XIX transformó Iquitos y dejó edificios y fachadas que hoy recorres a pie por el centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'El legado del caucho',
          paragraphs: [
            'Durante el auge del caucho, Iquitos se enriqueció y recibió materiales y estilos europeos que definen su centro histórico. La Casa de Fierro y varias fachadas del Malecón Tarapacá son ejemplos visibles de esa época.',
          ],
        },
        {
          heading: 'Cómo recorrerla',
          bullets: [
            'Camina del centro a la Plaza de Armas y al Malecón observando fachadas.',
            'Incluye la Casa de Fierro y la Catedral como hitos.',
            'Haz la ruta fotográfica por la mañana o al atardecer.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué dejó el caucho en Iquitos?',
          a: 'Edificios, fachadas y una identidad urbana ligada a ese auge. Varios se ven en el centro y el Malecón Tarapacá.',
        },
        {
          q: '¿Hay una ruta de arquitectura?',
          a: 'Sí: centro, Plaza de Armas, Casa de Fierro, Catedral y Malecón se recorren a pie en una ruta temática.',
        },
      ],
    },
  },
  {
    slug: 'plazas-de-iquitos-comparacion',
    group: 'alrededores',
    related: ['plaza-de-armas-iquitos-cerca', 'plaza-28-de-julio-desde-plaza', 'historia-plaza-sargento-lores'],
    content: {
      metaTitle: 'Plazas de Iquitos: comparación y cuál visitar',
      metaDescription:
        'Compara las plazas de Iquitos (Sargento Lores, Plaza de Armas, 28 de Julio): ubicación, ambiente y a quién conviene cada una.',
      h1: 'Comparar las plazas de Iquitos',
      lead: 'Iquitos tiene varias plazas cívicas con distinto carácter. Esta guía las compara para ayudarte a decidir cuál visitar y cómo encadenarlas.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Tres plazas, distinto papel',
          paragraphs: [
            'La Plaza Sargento Lores destaca por su memoria cívica y su nombre ligado a la historia de frontera. La Plaza de Armas es el núcleo turístico y cívico. La Plaza 28 de Julio amplía la ruta de plazas del centro.',
          ],
        },
        {
          heading: 'Cómo elegir',
          bullets: [
            'Si buscas historia y memoria: Plaza Sargento Lores.',
            'Si quieres el centro turístico y edificios históricos: Plaza de Armas.',
            'Si quieres una ruta más larga de plazas: añade la Plaza 28 de Julio.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuál es la plaza principal?',
          a: 'La Plaza de Armas suele ser el núcleo cívico y turístico; la Sargento Lores destaca por su memoria histórica.',
        },
        {
          q: '¿Se pueden visitar varias en un día?',
          a: 'Sí, están en el centro y se enlazan a pie. Planea descansos y cuida el calor.',
        },
      ],
    },
  },
  {
    slug: 'hoteles-cerca-plaza-sargento-lores',
    group: 'alrededores',
    related: ['donde-alojarse-centro-iquitos', 'aeropuerto-iquitos-a-plaza-sargento-lores', 'estacionamiento-cerca-plaza'],
    content: {
      metaTitle: 'Hoteles cerca de Plaza Sargento Lores, Iquitos',
      metaDescription:
        'Dónde alojarse cerca de la plaza: direcciones aproximadas, caminata y qué verificar antes de reservar en el centro de Iquitos.',
      h1: 'Hoteles cerca de la plaza',
      lead: 'El centro de Iquitos ofrece alojamiento a distintas distancias de la plaza. Verifica dirección, reserva y servicios de cada opción antes de reservar.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Alojarse en el centro',
          paragraphs: [
            'Quedarte en el centro te permite recorrer la Plaza Sargento Lores, la Plaza de Armas y el Malecón a pie. La oferta varía en precio y servicios.',
          ],
        },
        {
          heading: 'Qué verificar',
          bullets: [
            'Dirección real y distancia a la plaza (confirma en el mapa).',
            'Condiciones de reserva, cancelación y check-in.',
            'Servicios incluidos (desayuno, aire acondicionado, traslado).',
          ],
          callout:
            'Esta guía no verifica nombres, disponibilidad ni precios de hoteles concretos. Confirma todo con el establecimiento antes de reservar.',
        },
      ],
      faq: [
        {
          q: '¿Conviene alojarse en el centro?',
          a: 'Sí si quieres caminar a la plaza, la Plaza de Armas y el Malecón. Verifica dirección y servicios antes de reservar.',
        },
        {
          q: '¿La plaza tiene hotel adentro?',
          a: 'No. La plaza es un espacio público; el alojamiento está en las calles aledañas. Confirma distancias en el mapa.',
        },
      ],
    },
  },
  {
    slug: 'donde-alojarse-centro-iquitos',
    group: 'alrededores',
    related: ['hoteles-cerca-plaza-sargento-lores', 'aeropuerto-iquitos-a-plaza-sargento-lores', 'ruta-un-dia-centro-iquitos'],
    content: {
      metaTitle: 'Dónde alojarse en el centro de Iquitos: guía',
      metaDescription:
        'Cómo elegir alojamiento en el centro de Iquitos según ubicación, presupuesto y cercanía a la plaza y al Malecón.',
      h1: 'Dónde alojarse en Iquitos',
      lead: 'Elige según cercanía a la Plaza Sargento Lores, a la Plaza de Armas o al Malecón, y verifica siempre las condiciones antes de reservar.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Criterios de elección',
          paragraphs: [
            'El centro es cómodo para moverte a pie. Si priorizas la vida ribereña, busca cerca del Malecón Tarapacá; si quieres lo cívico, cerca de las plazas.',
          ],
        },
        {
          heading: 'Qué comprobar',
          bullets: [
            'Ubicación real y tiempo de caminata a tus puntos de interés.',
            'Presupuesto, temporada y disponibilidad.',
            'Servicios e higiene; no te guíes solo por fotos.',
          ],
          callout:
            'No promocionamos ni verificamos hoteles concretos. Confirma nombre, dirección, precio y reserva con cada establecimiento.',
        },
      ],
      faq: [
        {
          q: '¿Centro o Malecón?',
          a: 'Depende de tu plan: el centro es cívico y de servicios; el Malecón, ribereño y de paseo. Verifica ubicación y caminata.',
        },
        {
          q: '¿Cómo reservo con seguridad?',
          a: 'Confirma directamente con el establecimiento o una plataforma reconocida: nombre, dirección, precio y condiciones de cancelación.',
        },
      ],
    },
  },

  // ───────────────────────── D. DÓNDE COMER (7) ─────────────────────────
  {
    slug: 'donde-comer-cerca-plaza-sargento-lores',
    group: 'comer',
    related: ['almuerzo-comida-amazonica-centro', 'desayunar-cerca-plaza', 'cafeterias-cerca-plaza'],
    content: {
      metaTitle: 'Dónde comer cerca de Plaza Sargento Lores, Iquitos',
      metaDescription:
        'Guía neutral de opciones de comida en el centro de Iquitos: cocina amazónica, café y dónde buscar establecimientos formales.',
      h1: 'Dónde comer cerca de la plaza',
      lead: 'En el centro de Iquitos hay restaurantes de cocina amazónica y peruana, cafeterías y puestos autorizados. Busca establecimientos formales con buenas prácticas de higiene.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Qué buscar',
          paragraphs: [
            'Esta guía no clasifica ni promociona negocios. Sugiere tipos de servicio y zonas para que explores con criterio: restaurantes de cocina regional, cafeterías y mercados con comida local.',
          ],
        },
        {
          heading: 'Consejos',
          bullets: [
            'Prefiere establecimientos formales con buenas prácticas de higiene.',
            'Pregunta por platos del día y especialidades amazónicas.',
            'Lleva agua y no dependas de una compra de último momento cerca de la plaza.',
          ],
          callout:
            'Encontramos direcciones de referencia como Chef Paz Restaurant (Jirón Putumayo 468), CAFÉ EXPRESS PERÚ (Jirón Nauta 656) y Dawn on the Amazon Café (Mal. Maldonado 185), pero no verificamos su estado actual; confírmalo antes de ir.',
        },
      ],
      faq: [
        {
          q: '¿Qué comida hay cerca de la plaza?',
          a: 'Cocina amazónica y peruana, cafeterías y puestos autorizados en el centro. Esta guía no promociona comercios concretos; busca establecimientos formales.',
        },
        {
          q: '¿Hay opciones callejeras?',
          a: 'Sí, en el entorno y el mercado, pero prioriza puestos autorizados e higiene. No verificamos la disponibilidad de ninguno en particular.',
        },
      ],
    },
  },
  {
    slug: 'desayunar-cerca-plaza',
    group: 'comer',
    related: ['donde-comer-cerca-plaza-sargento-lores', 'cafeterias-cerca-plaza', 'ruta-medio-dia-plaza-sargento-lores'],
    content: {
      metaTitle: 'Desayunar cerca de Plaza Sargento Lores, Iquitos',
      metaDescription:
        'Opciones de desayuno en el centro de Iquitos antes de visitar la plaza: café, panadería y cómo empezar el día.',
      h1: 'Desayunar cerca de la plaza',
      lead: 'Un desayuno temprano te deja visitar la plaza en las horas más frescas. Busca cafeterías y panaderías formales en el centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Empezar temprano',
          paragraphs: [
            'Desayunar antes de las horas de más calor te permite recorrer la plaza con comodidad. El centro tiene cafeterías y panaderías donde desayunar.',
          ],
        },
        {
          heading: 'Qué tener en cuenta',
          bullets: [
            'Busca establecimientos formales y horarios de apertura temprana.',
            'Una referencia de zona es Jirón Nauta, donde aparece CAFÉ EXPRESS PERÚ (Nauta 656); confirma su estado antes de ir.',
            'Lleva agua para hidratarte durante la caminata.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde desayunar?',
          a: 'En cafeterías y panaderías del centro. Esta guía no promociona ninguna; busca opciones formales y verifica horarios.',
        },
        {
          q: '¿A qué hora conviene?',
          a: 'Temprano, para aprovechar las horas frescas antes del calor del mediodía.',
        },
      ],
    },
  },
  {
    slug: 'cafeterias-cerca-plaza',
    group: 'comer',
    related: ['desayunar-cerca-plaza', 'cenar-despues-de-visitar-plaza', 'donde-comer-cerca-plaza-sargento-lores'],
    content: {
      metaTitle: 'Cafeterías cerca de Plaza Sargento Lores, Iquitos',
      metaDescription:
        'Dónde tomar café y descansar en el centro de Iquitos: ambientes, horarios y cómo encadenarlas con tu visita.',
      h1: 'Cafeterías en el centro',
      lead: 'Las cafeterías son ideales para una pausa con aire acondicionado o sombra entre paseos. Busca establecimientos formales cerca de la plaza.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Una pausa',
          paragraphs: [
            'Una cafetería puede ser el respiro del calor amazónico entre la plaza y el Malecón. El centro tiene varias opciones; busca las que mantengan buenas prácticas.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Combínala con tu ruta: antes, entre o después de visitar la plaza.',
            'Verifica horarios; algunas abren temprano y otras cierran entre horas.',
            'Una referencia de zona es Jirón Nauta (CAFÉ EXPRESS PERÚ, Nauta 656); confirma estado actual.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay cafés cerca de la plaza?',
          a: 'Sí, en el centro. Esta guía no promociona ninguno; busca establecimientos formales y verifica horarios.',
        },
        {
          q: '¿Sirve para trabajar o descansar?',
          a: 'Suelen ser buenas para una pausa con sombra o aire acondicionado entre paseos, pero confirma con cada local.',
        },
      ],
    },
  },
  {
    slug: 'almuerzo-comida-amazonica-centro',
    group: 'comer',
    related: ['donde-comer-cerca-plaza-sargento-lores', 'mercado-central-iquitos-desde-plaza', 'opciones-vegetarianas-centro'],
    content: {
      metaTitle: 'Almuerzo y comida amazónica en el centro de Iquitos',
      metaDescription:
        'Platos amazónicos para almorzar en Iquitos: juane, tacacho, paiche, inchicapi. Dónde probarlos y qué verificar.',
      h1: 'Comida amazónica para almorzar',
      lead: 'El almuerzo es el momento de probar platos de la región: juane, tacacho con cecina, paiche, inchicapi y más. Busca restaurantes formales.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Platos para probar',
          bullets: [
            'Juane: arroz, gallina y especias envueltos en hoja de bijao.',
            'Tacacho con cecina: plátano asado con carne de monte o cerdo.',
            'Paiche: pez de la amazonía, a la plancha o en caldo.',
            'Inchicapi: crema de maní con gallina y especias.',
          ],
        },
        {
          heading: 'Dónde almorzar',
          paragraphs: [
            'El centro y el Mercado Central concentran opciones. Chef Paz Restaurant (Jirón Putumayo 468) es una dirección de referencia; confirma su estado y carta antes de ir. Prioriza establecimientos formales con higiene.',
          ],
          callout:
            'Las especialidades y los precios cambian. Pregunta por el plato del día y no asumas disponibilidad de un plato concreto fuera de temporada.',
        },
      ],
      faq: [
        {
          q: '¿Qué plato amazónico probar?',
          a: 'Juane, tacacho con cecina, paiche e inchicapi son clásicos. Pregunta por el plato del día en restaurantes formales.',
        },
        {
          q: '¿Dónde almorzar en el centro?',
          a: 'En restaurantes formales del centro y el mercado. Esta guía no promociona ninguno; verifica carta y precios in situ.',
        },
      ],
    },
  },
  {
    slug: 'cenar-despues-de-visitar-plaza',
    group: 'comer',
    related: ['malecon-tarapaca-desde-plaza', 'cafeterias-cerca-plaza', 'donde-comer-cerca-plaza-sargento-lores'],
    content: {
      metaTitle: 'Cenar después de visitar la Plaza Sargento Lores',
      metaDescription:
        'Opciones para cenar tras la visita: paseo al Malecón al atardecer, restaurantes del centro y cómo cerrar el día.',
      h1: 'Cenar tras la visita',
      lead: 'Una buena forma de cerrar el día es caminar hacia el Malecón Tarapacá al atardecer y cenar en su entorno o en el centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Plan de tarde a noche',
          paragraphs: [
            'Visita la plaza en la tarde fresca, sigue hacia el Malecón para el atardecer y cena en el entorno ribereño o en el centro. Así aprovechas la luz y evitas el mediodía.',
          ],
        },
        {
          heading: 'Consejos',
          bullets: [
            'Verifica horarios de cena; algunos locales cierran entre horas.',
            'Combina la cena con el paseo del Malecón al atardecer.',
            'Usa transporte formal para regresar a tu alojamiento de noche.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde cenar después de la plaza?',
          a: 'En el entorno del Malecón Tarapacá o del centro. Esta guía no promociona locales; busca opciones formales y verifica horarios.',
        },
        {
          q: '¿Qué hacer de noche?',
          a: 'El paseo del Malecón al atardecer es agradable. Usa transporte autorizado para el regreso.',
        },
      ],
    },
  },
  {
    slug: 'opciones-vegetarianas-centro',
    group: 'comer',
    related: ['almuerzo-comida-amazonica-centro', 'jugos-frutas-amazonicas-cerca', 'donde-comer-cerca-plaza-sargento-lores'],
    content: {
      metaTitle: 'Opciones vegetarianas en el centro de Iquitos',
      metaDescription:
        'Comer vegetariano en Iquitos: frutas amazónicas, platos de guarnición y cómo pedir sin carne en el centro.',
      h1: 'Opciones vegetarianas',
      lead: 'Aunque la cocina amazónica usa mucha carne o pescado, es posible armar opciones vegetarianas con plátanos, yucas, palmitos y frutas de la región.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Cómo pedir',
          paragraphs: [
            'Pide guarniciones a base de plátano, yuca, palmito y arroz, y verifica que no lleven caldos o carnes. El mercado es buen lugar para fruta fresca.',
          ],
        },
        {
          heading: 'Qué buscar',
          bullets: [
            'Plátano, yuca y palmito como base de platos.',
            'Frutas amazónicas frescas en el mercado.',
            'Confirma ingredientes al pedir; la cocina regional suele usar caldos con carne.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay comida vegetariana?',
          a: 'Sí, a base de plátano, yuca y palmito, pero confirma ingredientes: la cocina amazónica suele usar caldos o carnes.',
        },
        {
          q: '¿Dónde comprar fruta?',
          a: 'En el Mercado Central y puestos formales del centro. Esta guía no promociona ninguno.',
        },
      ],
    },
  },
  {
    slug: 'jugos-frutas-amazonicas-cerca',
    group: 'comer',
    related: ['opciones-vegetarianas-centro', 'desayunar-cerca-plaza', 'mercado-central-iquitos-desde-plaza'],
    content: {
      metaTitle: 'Jugos y frutas amazónicas en Iquitos',
      metaDescription:
        'Frutas de la amazonía para probar en Iquitos: aguaje, camu camu, cocona. Dónde comprar jugos y qué cuidar.',
      h1: 'Jugos y frutas amazónicas',
      lead: 'La amazonía peruana es rica en frutas únicas. Probar aguaje, camu camu o cocona en jugo es una experiencia local fácil de tener en el centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Frutas para probar',
          bullets: [
            'Aguaje: fruto del aguajal, cremoso y nutritivo.',
            'Camu camu: pequeño y muy rico en vitamina C.',
            'Cocona: ácida, usada en jugos y salsas.',
          ],
        },
        {
          heading: 'Dónde probarlos',
          paragraphs: [
            'En el Mercado Central y en puestos o cafeterías formales del centro encontrarás jugos de frutas de la región. Verifica higiene y preparación al momento.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué fruta amazónica probar?',
          a: 'Aguaje, camu camu y cocona son clásicas en jugo. Pruébalas en el mercado o en locales formales.',
        },
        {
          q: '¿Dónde comprar jugos?',
          a: 'En el Mercado Central y cafeterías del centro. Esta guía no promociona ninguno; busca preparación al momento e higiene.',
        },
      ],
    },
  },

  // ───────────────────────── E. RUTAS Y PASEOS (8) ─────────────────────────
  {
    slug: 'paseo-90-minutos-centro-iquitos',
    group: 'rutas',
    related: ['ruta-medio-dia-plaza-sargento-lores', 'de-plaza-sargento-lores-a-plaza-de-armas', 'horario-entrada-precio'],
    content: {
      metaTitle: 'Paseo de 90 minutos por el centro de Iquitos',
      metaDescription:
        'Ruta rápida de 90 minutos: Plaza Sargento Lores, Plaza de Armas y vuelta. Ideal si tienes poco tiempo en el centro.',
      h1: 'Paseo de 90 minutos',
      lead: 'Un recorrido breve y centrado: la Plaza Sargento Lores, la Plaza de Armas y el regreso, con pausas de descanso.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Itinerario corto',
          paragraphs: [
            'Empieza en la Plaza Sargento Lores (20–30 min), camina al centro hacia la Plaza de Armas (20 min), recorre sus alrededores y regresa (20–30 min). Deja margen para el calor y una pausa.',
          ],
          callout:
            'Los tiempos son una referencia: el calor y el ritmo personal los modifican. No asumas distancias exactas; confírmalas en el mapa.',
        },
        {
          heading: 'Consejos',
          bullets: [
            'Sal temprano o al atardecer.',
            'Lleva agua y busca sombra en las pausas.',
            'Si hace mucho calor, acorta el tramo expuesto.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Se puede en 90 minutos?',
          a: 'Sí, como recorrido breve de dos plazas céntricas con pausas. Ajusta al calor y a tu ritmo.',
        },
        {
          q: '¿Qué ver en tan poco tiempo?',
          a: 'La Plaza Sargento Lores, la Plaza de Armas y el entorno cívico inmediato.',
        },
      ],
    },
  },
  {
    slug: 'ruta-medio-dia-plaza-sargento-lores',
    group: 'rutas',
    related: ['ruta-un-dia-centro-iquitos', 'malecon-tarapaca-desde-plaza', 'plaza-de-armas-iquitos-cerca'],
    content: {
      metaTitle: 'Ruta de medio día por Plaza Sargento Lores e Iquitos',
      metaDescription:
        'Itinerario de 2–3 horas: plaza, Municipalidad de Maynas, Plaza de Armas y Malecón Tarapacá, con paradas de descanso.',
      h1: 'Ruta de medio día',
      lead: 'Un recorrido de unas 2–3 horas que une la plaza, el centro cívico, la Plaza de Armas y el Malecón, con paradas de descanso.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Itinerario',
          paragraphs: [
            'Plaza Sargento Lores → Municipalidad de Maynas → Plaza de Armas → Malecón Tarapacá. Son unas 2–3 horas con paradas de descanso; ideales si tienes poco tiempo en el centro.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Hidrátate y busca sombra en cada parada.',
            'Verifica horarios de edificios o museos si quieres entrar.',
            'Usa transporte o taxi/mototaxi si el calor es fuerte entre tramos.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuánto dura?',
          a: 'Unas 2–3 horas con paradas de descanso, según tu ritmo y el calor.',
        },
        {
          q: '¿Cubre el Malecón?',
          a: 'Sí, el Malecón Tarapacá cierra el recorrido junto al río.',
        },
      ],
    },
  },
  {
    slug: 'ruta-un-dia-centro-iquitos',
    group: 'rutas',
    related: ['ruta-medio-dia-plaza-sargento-lores', 'museo-amazonico-desde-plaza', 'almuerzo-comida-amazonica-centro'],
    content: {
      metaTitle: 'Ruta de un día por el centro de Iquitos',
      metaDescription:
        'Itinerario de 5–6 horas: plaza, centro cívico, almuerzo, Malecón y cultura, combinando aire libre y espacios cubiertos.',
      h1: 'Ruta de día completo',
      lead: 'Mañana en la plaza y el centro cívico; mediodía de alimentación y resguardo del calor; tarde en el Malecón y equipamientos culturales.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Itinerario de día',
          paragraphs: [
            'Mañana: Plaza Sargento Lores y centro cívico. Mediodía: almuerzo de comida amazónica y descanso del calor. Tarde: Malecón Tarapacá y museos (Amazónico o de Culturas Indígenas). Unas 5–6 horas combinando aire libre y espacios cubiertos.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Divide el día para evitar el mediodía más caluroso.',
            'Incluye un museo como plan de sombra o lluvia.',
            'Verifica horarios de museos antes de desplazarte.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Vale la pena un día entero?',
          a: 'Sí, si quieres combinar historia, comida y cultura sin prisa. Planea descansos y cuida el calor.',
        },
        {
          q: '¿Incluye museos?',
          a: 'Se sugiere el Museo Amazónico o el de Culturas Indígenas en la tarde, según horarios.',
        },
      ],
    },
  },
  {
    slug: 'ruta-familiar-plaza-sargento-lores',
    group: 'rutas',
    related: ['visitar-plaza-con-ninos', 'clima-seguridad-visita', 'ruta-medio-dia-plaza-sargento-lores'],
    content: {
      metaTitle: 'Ruta familiar por Plaza Sargento Lores e Iquitos',
      metaDescription:
        'Itinerario con niños: sombra, descanso, hidratación y un paseo corto hacia la Plaza de Armas o el Malecón.',
      h1: 'Ruta en familia',
      lead: 'Prioriza sombra, descanso y seguridad. Un recorrido tranquilo de 30–45 minutos puede cerrarse con un paseo corto hacia la Plaza de Armas o el Malecón.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Plan con niños',
          paragraphs: [
            'Recorre los paseos y áreas verdes con calma, planifica agua y una pausa, y confirma los baños por separado. Cierra con un paseo corto hacia la Plaza de Armas o el Malecón Tarapacá.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Lleva agua y protector solar.',
            'Define un punto de encuentro en el paseo.',
            'Evita el mediodía y busca sombra continua.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Es buena con niños?',
          a: 'Sí, como paseo urbano tranquilo. Prioriza sombra, descanso e hidratación y confirma los baños.',
        },
        {
          q: '¿Cuánto tiempo?',
          a: 'Una propuesta de 30 a 45 minutos, con pausa, antes de continuar hacia la Plaza de Armas o el Malecón.',
        },
      ],
    },
  },
  {
    slug: 'ruta-lluvia-museos-iquitos',
    group: 'rutas',
    related: ['museo-amazonico-desde-plaza', 'museo-culturas-indigenas-desde-plaza', 'clima-seguridad-visita'],
    content: {
      metaTitle: 'Ruta de lluvia en Iquitos: museos y espacios cubiertos',
      metaDescription:
        'Qué hacer si llueve en Iquitos: museos del Malecón, mercado y espacios cubiertos, con la plaza como punto de partida.',
      h1: 'Ruta de lluvia',
      lead: 'Si llueve o hay tormenta, prioriza espacios cubiertos: museos del Malecón, mercado y pasillos cubiertos del centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Plan bajo techo',
          paragraphs: [
            'Ante lluvia o tormenta, pospone la caminata al aire libre y prefiere el Museo Amazónico o el de Culturas Indígenas Amazónicas (ambos en el Malecón Tarapacá), el Mercado Central y pasillos cubiertos.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Verifica horarios de museos antes de desplazarte.',
            'Lleva impermeable; evita superficies resbaladizas.',
            'No camines bajo árboles ni cerca del río abierto si hay tormenta.',
          ],
          callout:
            'El pronóstico de esta guía es orientativo y no es un aviso oficial. Confirma condiciones y avisos locales antes de salir.',
        },
      ],
      faq: [
        {
          q: '¿Qué hacer si llueve?',
          a: 'Prioriza museos del Malecón, el mercado y pasillos cubiertos. Consulta horarios antes de ir.',
        },
        {
          q: '¿La plaza se inunda?',
          a: 'No verificamos inundaciones; con lluvia intensa las superficies resbalan. Ten precaución y evita el aire libre con tormenta.',
        },
      ],
    },
  },
  {
    slug: 'ruta-fotografica-centro-iquitos',
    group: 'rutas',
    related: ['fotos-plaza-sargento-lores', 'arquitectura-epoca-caucho-iquitos', 'malecon-tarapaca-desde-plaza'],
    content: {
      metaTitle: 'Ruta fotográfica por el centro de Iquitos',
      metaDescription:
        'Dónde y cuándo fotografiar Iquitos: plaza, arquitectura del caucho, Malecón y luz dorada para tus mejores tomas.',
      h1: 'Ruta fotográfica',
      lead: 'Aprovecha la luz y el entorno urbano-amazónico: palmeras, fachadas de la época del caucho y el Malecón al atardecer.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Mejores tomas',
          paragraphs: [
            'La luz dorada del amanecer o del atardecer favorece la vegetación y la arquitectura cívica. El Malecón Tarapacá ofrece paisaje urbano y del río.',
          ],
        },
        {
          heading: 'Ruta sugerida',
          bullets: [
            'Plaza Sargento Lores: monumento y paseos.',
            'Centro: fachadas de la época del caucho y Casa de Fierro.',
            'Malecón Tarapacá: atardecer y río.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuándo fotografiar?',
          a: 'Amaneceres y atardeceres dan luz suave. Evita el mediodía por las sombras duras y el calor.',
        },
        {
          q: '¿Qué llevar?',
          a: 'Protector solar, gorra, agua y batería extra; el calor y la humedad desgastan los equipos.',
        },
      ],
    },
  },
  {
    slug: 'ruta-con-poca-caminata-iquitos',
    group: 'rutas',
    related: ['accesibilidad-plaza-sargento-lores', 'mototaxi-taxi-centro-iquitos', 'estacionamiento-cerca-plaza'],
    content: {
      metaTitle: 'Ruta con poca caminata en Iquitos',
      metaDescription:
        'Cómo visitar la plaza y el centro con poco esfuerzo físico: transporte entre puntos y descansos, sin prometer accesibilidad total.',
      h1: 'Ruta de poco esfuerzo',
      lead: 'Elige puntos cercanos y usa taxi o mototaxi entre ellos; descansa en cada parada. No prometemos una ruta sin escalones: confirma pavimento y bordillos.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Menos caminata',
          paragraphs: [
            'Usa taxi o mototaxi para moverte entre la plaza, la Plaza de Armas y el Malecón, y limita el tramo a pie a zonas con sombra y descanso. Comprueba pavimento y bordillos antes de avanzar.',
          ],
        },
        {
          heading: 'Recomendaciones',
          bullets: [
            'Acuerda precio y ruta antes de subir al transporte.',
            'Define puntos de bajada seguros cerca de cada parada.',
            'No asumas una ruta accesible; confírmala in situ.',
          ],
          callout:
            'Esta guía no certifica una ruta sin escalones ni la disponibilidad continua de bancos o sombra. Verifica condiciones antes de tu visita.',
        },
      ],
      faq: [
        {
          q: '¿Puedo visitar casi sin caminar?',
          a: 'Sí, usando transporte entre puntos y limitando el tramo a pie. No garantizamos accesibilidad total; confírmala in situ.',
        },
        {
          q: '¿Cómo me muevo?',
          a: 'Taxi o mototaxi entre la plaza, la Plaza de Armas y el Malecón. Acuerda precio antes de subir.',
        },
      ],
    },
  },
  {
    slug: 'ruta-tarde-malecon-tarapaca',
    group: 'rutas',
    related: ['malecon-tarapaca-desde-plaza', 'cenar-despues-de-visitar-plaza', 'ruta-medio-dia-plaza-sargento-lores'],
    content: {
      metaTitle: 'Ruta de tarde y atardecer en el Malecón Tarapacá',
      metaDescription:
        'Plan de tarde: plaza en horas frescas, paseo al Malecón y atardecer junto al río, con opción de cena.',
      h1: 'Ruta de tarde al Malecón',
      lead: 'Visita la plaza en la tarde fresca, sigue hacia el Malecón Tarapacá para el atardecer y cena en su entorno o en el centro.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Itinerario de tarde',
          paragraphs: [
            'Empieza en la Plaza Sargento Lores en las horas frescas de la tarde, camina o toma transporte hacia el Malecón Tarapacá y disfruta el atardecer junto al río. Cena en el entorno ribereño o en el centro.',
          ],
        },
        {
          heading: 'Consejos',
          bullets: [
            'Lleva agua y protector solar aunque sea tarde.',
            'Verifica horarios de cena antes de sentarte.',
            'Usa transporte autorizado para el regreso de noche.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuándo ir al Malecón?',
          a: 'La tarde y el atardecer suelen ser los más agradables para caminar junto al río y evitar el calor.',
        },
        {
          q: '¿Se puede cenar ahí?',
          a: 'En el entorno del Malecón y del centro hay opciones; verifica horarios y usa transporte autorizado de regreso.',
        },
      ],
    },
  },
];

// ──────────────────────────────────────────────────────────── helpers
export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);

export function topicExists(slug: string): boolean {
  return TOPICS.some((t) => t.slug === slug);
}

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}

// Devuelve los temas relacionados que existen realmente (filtra slugs inválidos).
export function relatedTopics(slug: string): Topic[] {
  const t = getTopic(slug);
  if (!t) return [];
  return t.related.filter(topicExists).map(getTopic) as Topic[];
}

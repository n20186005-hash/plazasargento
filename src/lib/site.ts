// Hechos centrales del sitio y constantes compartidas entre la página de inicio
// y las páginas temáticas. Única fuente de verdad para datos del atractivo.

export const SITE = {
  name: 'Plaza Sargento Lores Iquitos — Guía de visita',
  brand: 'Plaza Sargento',
  url: 'https://plazasargento.com',
};

// Valoración de Google Maps. Solo se muestra en la página; no entra en el JSON-LD
// como aggregateRating (esta guía es independiente, no el lugar oficial).
export const RATING = {
  value: 4.1,
  count: 4272,
  asOf: 'noviembre 2026',
  asOfFull: '1 de noviembre de 2026 (UTC)',
};

export const ATTRACTION = {
  name: 'Plaza Sargento Lores',
  shortName: 'Plaza Sargento',
  address: 'Ramón Castilla 349',
  locality: 'Iquitos',
  region: 'Loreto',
  postal: '16001',
  country: 'PE',
  geo: { lat: -3.7479238, lon: -73.2521373 },
  plusCode: '7P2X+R4 Iquitos, Perú',
  mapsShareUrl: 'https://maps.app.goo.gl/LymMKqvXLTPbYh4s8',
  mapsEmbed: 'https://www.google.com/maps?q=-3.7479238,-73.2521373&hl=es&output=embed',
};

// Fuentes públicas peruanas. Se mantienen como referencia documental.
export const SOURCES: { name: string; url: string }[] = [
  {
    name: 'Instituto del Ejército · Fernando Lores Tenazoa',
    url: 'https://ete.edu.pe/sgto-2do-fernando-lores-tenazoa/',
  },
  {
    name: 'Municipalidad Provincial de Maynas',
    url: 'https://www.gob.pe/institucion/munimaynas',
  },
  {
    name: 'Gobierno Regional de Loreto',
    url: 'https://www.gob.pe/institucion/regionloreto',
  },
  { name: 'MINCETUR', url: 'https://www.gob.pe/mincetur' },
  { name: 'PROMPERÚ · Perú Travel', url: 'https://www.peru.travel/' },
  {
    name: 'Contraloría: obra de mejoramiento de la plaza (2018)',
    url: 'https://www.gob.pe/institucion/contraloria/noticias/496352-318-2018-cg-contraloria-advierte-deficiencias-en-la-obra-de-mejoramiento-de-la-plaza-sargento-lores-de-iquitos',
  },
];

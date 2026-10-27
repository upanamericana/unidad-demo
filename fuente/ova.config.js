/* =========================================================
   CURSO · Gobierno, calidad y protección de datos (unidad demo de Posgrados Panamericana)
   ---------------------------------------------------------
   Cliente:   Posgrados Panamericana · Universidad Panamericana
   Insumo:    ../insumos/ (DI, figuras, medios, preguntas; ver insumos/LEEME.md)
   Preset visual: upanamericana  (ver instituciones/upanamericana/INSTITUCION.md)
   Versión template: hibrida

   UP-001: el contenido de andina/unidad-demo (el mismo Word de ejemplo, literal y en «usted»)
   con la piel de UP. Se presenta como «Unidad 3» en toda la capa editorial (D8); las menciones
   del Word a las unidades 1 y 2 quedan literales. El pódcast y el video son los de Andina (D3).
   ========================================================= */

module.exports = {

  brand: {
    // Logo negativo (blanco): el que va sobre el sidebar verde hondo. En el tema «clara»
    // la skin lo cambia por la versión verde. El móvil/colapsado lleva el bloque apilado.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/up-logo-blanco.svg',
    logoMobile: 'assets/img/logos/up-marca-blanco.svg',
  },

  course: {
    code:             '',
    name:             'Gobierno, calidad y protección de datos',
    subtitle:         'Datos y Persistencia Avanzada: Diseño, Performance y Gobierno',   // sin el rótulo «Asignatura -»
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'upanamericana',
    pdf:              '',
    portadaFullBleed: true,
  },

  /* MENÚ · la estructura RED (la misma de Scala Learning), con los rótulos de UP:
       - `tipo: 'especial'`  → secciones estructurales que tiene toda unidad
                               (inicio, contenido, introducción, conclusión,
                               evaluación, glosario, referencias). Icono, no número.
       - `tipo: 'tema'`      → contenido temático, numerado 1, 2, 3…
     Las `secciones` con `ancla` aparecen en el menú como sub-ítems y bajan a la
     `.up-seccion` con ese `id` (único en todo el curso). */
  menu: [
    { id: 'portada',      titulo: 'Inicio',                  tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',      titulo: 'Contenido',               tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion', titulo: 'Introducción',            tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: '¿Qué va a lograr en esta unidad?', ancla: 'que-va-a-lograr' } ] },

    { id: 'tema1',        titulo: 'Gobierno de datos',       tipo: 'tema', numero: 1,
      secciones: [ { titulo: 'Gobierno, gestión y administración de datos',                ancla: 'tema1-1' },
                   { titulo: 'Roles, políticas, responsabilidades y ciclo de vida del dato', ancla: 'tema1-2' } ] },

    /* Conclusión: el Word la trae (con el pódcast), por eso va en el menú, como en andina/unidad-demo.
       Glosario: oculto (el Word no lo trae); para mostrarlo, quita el // de su línea. */
    { id: 'conclusion',   titulo: 'Conclusión',              tipo: 'especial', icon: 'mdi:flag-outline' },
    { id: 'evaluacion',   titulo: 'Evaluación',              tipo: 'especial', icon: 'mdi:clipboard-check-outline' },
    // { id: 'glosario',     titulo: 'Glosario',                tipo: 'especial', icon: 'mdi:book-open-variant-outline' },
    { id: 'referencias',  titulo: 'Referencias',             tipo: 'especial', icon: 'mdi:bookmark-outline' },
    { id: 'creditos',     titulo: 'Créditos',                tipo: 'especial', icon: 'mdi:account-group-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias. Estilo de la línea: autor y año sin
     negrilla, título de la obra en cursiva, URL en texto sin hipervínculo. */
  referencias: [],

  creditos: {
    institucion: 'Posgrados Panamericana · Universidad Panamericana',
  },
};

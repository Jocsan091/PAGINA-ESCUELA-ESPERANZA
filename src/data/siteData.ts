import { rutas } from "../lib/rutas";

export const menu = [
  { label: "INICIO", href: rutas.inicio },
  { label: "QUIENES SOMOS", href: rutas.quienesSomos },
  { label: "TALLERES", href: rutas.talleres },
  { label: "DIRECTIVAS", href: rutas.directivas },
  { label: "NOTICIAS", href: rutas.noticias }
];

export const slides = [
  {
    image: "/images/slide1.png",
    title: "Bienvenido a tu\nEscuela Esperanza",
    subtitle: "Escuela Esperanza",
    extra: "",
    button: "",
    href: rutas.inicio
  },
  {
    image: "/images/slide2.png",
    title: "Visita Nuestra escuela\nY encontraras esperanza",
    subtitle: "Escuela Esperanza",
    extra: "",
    button: "Leer mas",
    href: rutas.quienesSomos
  },
  {
    image: "/images/slide3.png",
    title: "Talleres\nExtraescolares 2026",
    subtitle: "Educacion basica - Escuela Esperanza",
    extra: "",
    button: "Leer mas",
    href: rutas.talleres
  }
];

export const textoTemporal =
  "Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza Escuela Esperanza.";

export const quienesSomosResumen = {
  titulo: "Quienes somos?",
  subtitulo: "Escuela Esperanza",
  texto: textoTemporal,
  boton: "Leer mas",
  href: rutas.quienesSomos,
  imagen: "/images/slide2.png"
};

export const quienesSomosDetalle = {
  titulo: "Escuela Esperanza",
  texto: [textoTemporal, textoTemporal, textoTemporal],
  imagen: "/images/slide2.png"
};

export const talleres = [
  "Taller Programacion y robotica",
  "Taller de musica",
  "Taller de danza",
  "Taller de Voleibol",
  "Taller de Futsal"
];

export const directivas = [
  "Equipo directivo",
  "Centro general de padres y apoderados",
  "Centro general de alumnos"
];

export const seccionesInstitucionales = [
  { titulo: "Nuestra historia", id: "nuestra-historia" },
  { titulo: "Sellos educativos", id: "sellos-educativos" },
  { titulo: "Nuestras actividades escolares", id: "actividades-escolares" },
  { titulo: "PEI (Proyecto educativo institucional)", id: "pei" },
  { titulo: "Reglamento de evaluacion", id: "reglamento-evaluacion" },
  { titulo: "Reglamento interno", id: "reglamento-interno" },
  { titulo: "RICE (Reglamento interno de convivencia escolar)", id: "rice" }
];

export const accesosCircularesInicio = [
  {
    titulo: "Mision de la escuela",
    texto: textoTemporal,
    href: `${rutas.institucional}#mision`,
    icono: "fa-compass"
  },
  {
    titulo: "Vision de la escuela",
    texto: textoTemporal,
    href: `${rutas.institucional}#vision`,
    icono: "fa-eye"
  }
];

export const seccionesInstitucionalesPagina = [
  { titulo: "Mision de la escuela", id: "mision" },
  { titulo: "Vision de la escuela", id: "vision" },
  ...seccionesInstitucionales
];

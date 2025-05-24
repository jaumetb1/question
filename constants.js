// import { Question } from './types'; // Eliminat
// export const QUIZ_QUESTIONS: Question[] = [ // Anotació de tipus eliminada
export const QUIZ_QUESTIONS = [
  // Lògica i Raonament
  {
    id: 1,
    category: "Lògica i Raonament",
    questionText: "Quin número segueix en la seqüència: 2, 4, 8, 16, ...?",
    options: [
      { text: "24", isCorrect: false },
      { text: "32", isCorrect: true },
      { text: "30", isCorrect: false },
      { text: "20", isCorrect: false },
    ],
  },
  {
    id: 2,
    category: "Lògica i Raonament",
    questionText: "Si tots els Zips són Zaps i alguns Zaps són Zops, es pot concloure que tots els Zips són Zops?",
    options: [
      { text: "Sí", isCorrect: false },
      { text: "No", isCorrect: true },
      { text: "Potser", isCorrect: false },
      { text: "Impossible de determinar", isCorrect: false },
    ],
  },
  {
    id: 3,
    category: "Lògica i Raonament",
    questionText: "Un cargol és al fons d'un pou de 10 metres. Cada dia puja 3 metres i cada nit rellisca 2 metres. Quants dies trigarà a sortir del pou?",
    options: [
      { text: "10 dies", isCorrect: false },
      { text: "7 dies", isCorrect: false },
      { text: "8 dies", isCorrect: true },
      { text: "9 dies", isCorrect: false },
    ],
  },
  {
    id: 4,
    category: "Lògica i Raonament",
    questionText: "Quina de les següents paraules no pertany al grup: Poma, Plàtan, Taronja, Patata?",
    options: [
      { text: "Poma", isCorrect: false },
      { text: "Plàtan", isCorrect: false },
      { text: "Taronja", isCorrect: false },
      { text: "Patata", isCorrect: true },
    ],
  },
  {
    id: 5,
    category: "Lògica i Raonament",
    questionText: "Si A és més gran que B, i C és més gran que A, qui és el més petit?",
    options: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "No es pot saber", isCorrect: false },
    ],
  },
  // Comprensió Verbal
  {
    id: 6,
    category: "Comprensió Verbal",
    questionText: "Tria el sinònim d'EFÍMER':",
    options: [
      { text: "Etern", isCorrect: false },
      { text: "Passatger", isCorrect: true },
      { text: "Important", isCorrect: false },
      { text: "Constant", isCorrect: false },
    ],
  },
  {
    id: 7,
    category: "Comprensió Verbal",
    questionText: "Què significa l'expressió 'Matar dos pardals d'un tret'?",
    options: [
      { text: "Ser cruel amb els animals", isCorrect: false },
      { text: "Aconseguir dos objectius amb una sola acció", isCorrect: true },
      { text: "Fracassar en dos intents", isCorrect: false },
      { text: "Tenir bona punteria", isCorrect: false },
    ],
  },
  {
    id: 8,
    category: "Comprensió Verbal",
    questionText: "Completa l'analogia: 'Llibre és a llegir com forquilla és a ...'",
    options: [
      { text: "Escriure", isCorrect: false },
      { text: "Menjar", isCorrect: true },
      { text: "Cuinar", isCorrect: false },
      { text: "Tallar", isCorrect: false },
    ],
  },
  {
    id: 9,
    category: "Comprensió Verbal",
    questionText: "Identifica l'antònim de 'LLOABLE':",
    options: [
      { text: "Admirable", isCorrect: false },
      { text: "Encomiable", isCorrect: false },
      { text: "Censurable", isCorrect: true },
      { text: "Meritori", isCorrect: false },
    ],
  },
  {
    id: 10,
    category: "Comprensió Verbal",
    questionText: "La paraula 'perspicaç' es refereix a algú que és...",
    options: [
      { text: "Entossudit", isCorrect: false },
      { text: "Sagaç i astut", isCorrect: true },
      { text: "Distret", isCorrect: false },
      { text: "Lent per entendre", isCorrect: false },
    ],
  },
  // Habilitat Numèrica
  {
    id: 11,
    category: "Habilitat Numèrica",
    questionText: "Si un article costa 120€ i té un descompte del 25%, quin és el preu final?",
    options: [
      { text: "80€", isCorrect: false },
      { text: "90€", isCorrect: true },
      { text: "95€", isCorrect: false },
      { text: "100€", isCorrect: false },
    ],
  },
  {
    id: 12,
    category: "Habilitat Numèrica",
    questionText: "Quin és el resultat de 15 + (5 * 3) - 10 / 2?",
    options: [
      { text: "20", isCorrect: false },
      { text: "25", isCorrect: true },
      { text: "15", isCorrect: false },
      { text: "30", isCorrect: false },
    ],
  },
  {
    id: 13,
    category: "Habilitat Numèrica",
    questionText: "Un tren viatja a 60 km/h. Quants quilòmetres recorrerà en 2 hores i 30 minuts?",
    options: [
      { text: "120 km", isCorrect: false },
      { text: "150 km", isCorrect: true },
      { text: "180 km", isCorrect: false },
      { text: "140 km", isCorrect: false },
    ],
  },
  {
    id: 14,
    category: "Habilitat Numèrica",
    questionText: "Si 3 pomes costen 1.50€, quant costaran 7 pomes?",
    options: [
      { text: "3.00€", isCorrect: false },
      { text: "3.50€", isCorrect: true },
      { text: "4.00€", isCorrect: false },
      { text: "4.50€", isCorrect: false },
    ],
  },
  {
    id: 15,
    category: "Habilitat Numèrica",
    questionText: "En una classe hi ha 25 alumnes. Si el 60% són nenes, quants nens hi ha?",
    options: [
      { text: "15", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "8", isCorrect: false },
    ],
  },
  // Visió Espacial
  {
    id: 16,
    category: "Visió Espacial",
    questionText: "Quina figura es forma en plegar el següent patró?",
    imageUrl: "https://picsum.photos/seed/spatial_q_16/300/200", // Net of a cube/pyramid
    options: [
      { text: "Un cub", isCorrect: true },
      { text: "Una piràmide", isCorrect: false },
      { text: "Un cilindre", isCorrect: false },
      { text: "Una esfera", isCorrect: false },
    ],
  },
  {
    id: 17,
    category: "Visió Espacial",
    questionText: "Si rotes aquesta figura 90 graus en sentit horari, com es veurà?",
    imageUrl: "https://picsum.photos/seed/spatial_q_17/250/250", // Asymmetric shape for question
    options: [
      { text: "A", isCorrect: true, imageUrl: "https://picsum.photos/seed/spatial_q17_optA/150/150" },
      { text: "B", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q17_optB/150/150" },
      { text: "C", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q17_optC/150/150" },
      { text: "D", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q17_optD/150/150" },
    ],
  },
  {
    id: 18,
    category: "Visió Espacial",
    questionText: "Quants cubs petits componen la figura gran?",
    imageUrl: "https://picsum.photos/seed/spatial_q_18/300/250", // 3D structure of cubes
    options: [
      { text: "27", isCorrect: false },
      { text: "18", isCorrect: true }, // Assuming a specific image for which 18 is correct
      { text: "24", isCorrect: false },
      { text: "12", isCorrect: false },
    ],
  },
  {
    id: 19,
    category: "Visió Espacial",
    questionText: "Quina de les figures de la dreta completa la sèrie de l'esquerra?",
    imageUrl: "https://picsum.photos/seed/spatial_q_19/400/150", // Pattern sequence for question
    options: [
      { text: "A", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q19_optA/150/150" },
      { text: "B", isCorrect: true, imageUrl: "https://picsum.photos/seed/spatial_q19_optB/150/150" },
      { text: "C", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q19_optC/150/150" },
      { text: "D", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q19_optD/150/150" },
    ],
  },
  {
    id: 20,
    category: "Visió Espacial",
    questionText: "Identifica la vista superior de l'objecte tridimensional mostrat.",
    imageUrl: "https://picsum.photos/seed/spatial_q_20/300/300", // Complex 3D object for question
    options: [
      { text: "A", isCorrect: true, imageUrl: "https://picsum.photos/seed/spatial_q20_optA/150/150" },
      { text: "B", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q20_optB/150/150" },
      { text: "C", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q20_optC/150/150" },
      { text: "D", isCorrect: false, imageUrl: "https://picsum.photos/seed/spatial_q20_optD/150/150" },
    ],
  },
];

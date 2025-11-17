export interface EducationModule {
  id: number;
  title: string;
  category: string;
  lessons: number;
  completed: number;
  points: number;
  satoshis: number;
  badge: string;
  status: 'locked' | 'in-progress' | 'completed';
  color: string;
}

export const educationModules: EducationModule[] = [
  {
    id: 1,
    title: "Contaminación Hídrica y Saneamiento",
    category: "Ambiental",
    lessons: 5,
    completed: 5,
    points: 50,
    satoshis: 1000,
    badge: "💧",
    status: "completed",
    color: "blue"
  },
  {
    id: 2,
    title: "Bitcoin y Ahorro Comunitario",
    category: "Financiero",
    lessons: 6,
    completed: 3,
    points: 60,
    satoshis: 2000,
    badge: "₿",
    status: "in-progress",
    color: "orange"
  },
  {
    id: 3,
    title: "Movilidad Sostenible",
    category: "Movilidad",
    lessons: 4,
    completed: 0,
    points: 40,
    satoshis: 1500,
    badge: "🚲",
    status: "locked",
    color: "green"
  },
  {
    id: 4,
    title: "Economía Circular",
    category: "Ambiental",
    lessons: 5,
    completed: 0,
    points: 50,
    satoshis: 1800,
    badge: "♻️",
    status: "locked",
    color: "emerald"
  }
];

export interface Activity {
  id: number;
  title: string;
  organization: string;
  type: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  points: number;
  satoshis: number;
  hours: number;
  distance: string;
  description: string;
  impact: string;
  status: string;
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    title: "Limpieza Quebrada La Perla",
    organization: "Centro Comunitario Apopa",
    type: "cleaning",
    date: "2025-11-15",
    time: "08:00 AM",
    location: "Apopa, San Salvador",
    participants: 45,
    maxParticipants: 60,
    points: 50,
    satoshis: 2000,
    hours: 4,
    distance: "3.2 km",
    description: "Jornada de limpieza y recolección de residuos sólidos con registro en blockchain",
    impact: "500 kg residuos estimados",
    status: "available"
  },
  {
    id: 2,
    title: "Instalación de Captación de Agua Lluvia",
    organization: "EcoChain - Centro San Martín",
    type: "water",
    date: "2025-11-18",
    time: "02:00 PM",
    location: "San Martín",
    participants: 18,
    maxParticipants: 25,
    points: 80,
    satoshis: 5000,
    hours: 6,
    distance: "8.5 km",
    description: "Construcción de sistema de captación de agua lluvia financiado con ahorro comunitario",
    impact: "15 familias beneficiadas",
    status: "available"
  },
  {
    id: 3,
    title: "Taller: Bitcoin y Economía Circular",
    organization: "Universidad Don Bosco",
    type: "education",
    date: "2025-11-20",
    time: "09:00 AM",
    location: "Campus UDB",
    participants: 32,
    maxParticipants: 40,
    points: 40,
    satoshis: 1500,
    hours: 3,
    distance: "2.1 km",
    description: "Aprende sobre ahorro comunitario y financiamiento de proyectos ambientales con Bitcoin",
    impact: "Certificación digital",
    status: "available"
  },
  {
    id: 4,
    title: "Monitoreo IoT Río Acelhuate",
    organization: "MARN + EcoChain",
    type: "monitoring",
    date: "2025-11-22",
    time: "07:00 AM",
    location: "Zona Norte, SS",
    participants: 12,
    maxParticipants: 20,
    points: 70,
    satoshis: 4000,
    hours: 5,
    distance: "5.3 km",
    description: "Instalación de sensores de calidad de agua con datos en blockchain",
    impact: "3 puntos de medición",
    status: "available"
  }
];

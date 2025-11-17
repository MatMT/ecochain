export interface CommunityCenter {
  id: number;
  name: string;
  status: string;
  features: string[];
  volunteers: number;
  projects: number;
  savings: number;
  color: string;
}

export interface ImpactData {
  totalVolunteers: number;
  wasteCollected: number;
  areasRestored: number;
  waterQualityImprovement: number;
  communitySavings: number;
  waterSystemsInstalled: number;
  co2Avoided: number;
}

export const communityCenters: CommunityCenter[] = [
  {
    id: 1,
    name: "Centro Comunitario Apopa",
    status: "Operativo",
    features: ["Captación agua lluvia", "Paneles solares", "Biodigestor"],
    volunteers: 145,
    projects: 8,
    savings: 45000,
    color: "green"
  },
  {
    id: 2,
    name: "Hub San Martín",
    status: "En construcción",
    features: ["Captación agua lluvia", "Paneles solares"],
    volunteers: 67,
    projects: 3,
    savings: 18000,
    color: "yellow"
  },
  {
    id: 3,
    name: "EcoHub Soyapango",
    status: "Planificación",
    features: ["En diseño"],
    volunteers: 23,
    projects: 1,
    savings: 5000,
    color: "blue"
  }
];

export const impactData: ImpactData = {
  totalVolunteers: 1247,
  wasteCollected: 8450,
  areasRestored: 12,
  waterQualityImprovement: 35,
  communitySavings: 68000,
  waterSystemsInstalled: 7,
  co2Avoided: 2340
};

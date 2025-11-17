export interface UserBadge {
  name: string;
  icon: string;
  earned: boolean;
  category: string;
}

export interface UserStats {
  points: number;
  satoshis: number;
  completedHours: number;
}

export const userBadges: UserBadge[] = [
  { name: "Guardián del Agua", icon: "💧", earned: true, category: "Ambiental" },
  { name: "Bitcoin Pioneer", icon: "₿", earned: true, category: "Financiero" },
  { name: "Eco Movilidad", icon: "🚲", earned: false, category: "Movilidad" },
  { name: "Líder Comunitario", icon: "👥", earned: false, category: "Social" },
  { name: "Blockchain Master", icon: "⛓️", earned: true, category: "Tecnológico" },
  { name: "Experto en Saneamiento", icon: "🏆", earned: false, category: "Ambiental" }
];

export const initialUserStats: UserStats = {
  points: 320,
  satoshis: 15000,
  completedHours: 24
};

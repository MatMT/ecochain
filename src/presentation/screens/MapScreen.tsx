'use client';

import React from 'react';
import { Map } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import { activitiesData } from '../../core/data/activitiesData';

interface Activity {
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

interface MapScreenProps {
  onEnrollActivity: (activity: Activity) => void;
}

const MapScreen: React.FC<MapScreenProps> = ({ onEnrollActivity }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Map className="text-green-600" size={28} />
          Proyectos y Voluntariado
        </h2>
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium whitespace-nowrap">
            Todos
          </button>
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
            💧 Agua
          </button>
          <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium whitespace-nowrap">
            ₿ Finanzas
          </button>
          <button className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium whitespace-nowrap">
            🚲 Movilidad
          </button>
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium whitespace-nowrap">
            🔬 Monitoreo
          </button>
        </div>
      </div>

      {activitiesData.map(activity => (
        <ActivityCard 
          key={activity.id} 
          activity={activity}
          onEnroll={onEnrollActivity}
        />
      ))}
    </div>
  );
};

export default MapScreen;

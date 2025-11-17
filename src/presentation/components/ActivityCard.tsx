'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Award, Building2 } from 'lucide-react';

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

interface ActivityCardProps {
  activity: Activity;
  onEnroll: (activity: Activity) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onEnroll }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{activity.title}</h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <Building2 size={14} />
            {activity.organization}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
            +{activity.points} pts
          </div>
          <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
            +{activity.satoshis} sats
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} className="text-green-600" />
          {new Date(activity.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={16} className="text-green-600" />
          {activity.time}
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} className="text-green-600" />
          {activity.distance}
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Award size={16} className="text-green-600" />
          {activity.hours}h sociales
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-3">{activity.description}</p>

      <div className="bg-gray-50 rounded-lg p-3 mb-3">
        <div className="text-xs text-gray-600 mb-1">Impacto esperado:</div>
        <div className="text-sm font-medium text-gray-800">{activity.impact}</div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500">
          {activity.participants}/{activity.maxParticipants} voluntarios
        </div>
        <button 
          onClick={() => onEnroll(activity)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Inscribirme
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;

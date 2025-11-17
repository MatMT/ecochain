'use client';

import React from 'react';
import { Building2 } from 'lucide-react';

interface CommunityCenter {
  id: number;
  name: string;
  status: string;
  features: string[];
  volunteers: number;
  projects: number;
  savings: number;
  color: string;
}

interface CenterCardProps {
  center: CommunityCenter;
}

const CenterCard: React.FC<CenterCardProps> = ({ center }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{center.name}</h3>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            center.status === 'Operativo' ? 'bg-green-100 text-green-700' :
            center.status === 'En construcción' ? 'bg-yellow-100 text-yellow-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {center.status}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-orange-600">₿ {center.savings.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Sats en fondo</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-green-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-600">{center.volunteers}</div>
          <div className="text-xs text-gray-600">Voluntarios</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-600">{center.projects}</div>
          <div className="text-xs text-gray-600">Proyectos Activos</div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="text-sm font-medium text-gray-700 mb-2">Infraestructura:</div>
        <div className="flex flex-wrap gap-2">
          {center.features.map((feature, idx) => (
            <div key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterCard;

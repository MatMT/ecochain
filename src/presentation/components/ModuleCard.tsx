'use client';

import React from 'react';
import { Lock, CheckCircle } from 'lucide-react';

interface EducationModule {
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

interface ModuleCardProps {
  module: EducationModule;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <div className="flex items-start gap-4">
        <div className="text-5xl">{module.badge}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
              <div className="text-xs text-gray-500">{module.category}</div>
            </div>
            {module.status === 'locked' && <Lock className="text-gray-400" size={20} />}
            {module.status === 'completed' && <CheckCircle className="text-green-600" size={20} />}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span>{module.lessons} lecciones</span>
            <span>•</span>
            <span className="text-green-600 font-medium">{module.points} pts</span>
            <span>•</span>
            <span className="text-orange-600 font-medium">₿ {module.satoshis} sats</span>
          </div>

          <div className="mb-3">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Progreso</span>
              <span>{module.completed}/{module.lessons}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`bg-${module.color}-600 h-2 rounded-full transition-all`}
                style={{ width: `${(module.completed / module.lessons) * 100}%` }}
              />
            </div>
          </div>

          <button 
            disabled={module.status === 'locked'}
            className={`w-full py-2 rounded-lg font-medium transition-colors ${
              module.status === 'locked' 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : module.status === 'completed'
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {module.status === 'locked' ? 'Bloqueado' : module.status === 'completed' ? 'Revisar' : 'Continuar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;

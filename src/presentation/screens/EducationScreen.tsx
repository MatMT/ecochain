'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';
import ModuleCard from '../components/ModuleCard';
import { educationModules } from '../../core/data/educationData';

const EducationScreen = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <BookOpen className="text-green-600" size={28} />
          EcoAcademy
        </h2>
        <p className="text-gray-600 mb-4">Educación ambiental, financiera y tecnológica</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm whitespace-nowrap">Todos</div>
          <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm whitespace-nowrap">Ambiental</div>
          <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm whitespace-nowrap">Financiero</div>
          <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm whitespace-nowrap">Tecnológico</div>
        </div>
      </div>

      {educationModules.map(module => (
        <ModuleCard key={module.id} module={module} />
      ))}

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-2">🎓 Aprende mientras ganas</h3>
        <p className="text-sm opacity-90 mb-4">
          Completa módulos sobre saneamiento, Bitcoin y movilidad sostenible. Gana satoshis y certificados digitales.
        </p>
        <div className="flex gap-2 flex-wrap">
          <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">Gamificado</div>
          <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">Blockchain</div>
          <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">Certificable</div>
        </div>
      </div>
    </div>
  );
};

export default EducationScreen;

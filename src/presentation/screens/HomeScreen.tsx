'use client';

import React from 'react';
import { Leaf, TrendingUp, Droplet, Bitcoin, Recycle, Zap } from 'lucide-react';
import { impactData } from '../../core/data/communityData';

interface HomeScreenProps {
  userPoints: number;
  satoshis: number;
  completedHours: number;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ userPoints, satoshis, completedHours }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Leaf size={40} />
          <div>
            <h1 className="text-4xl font-bold mb-1">EcoChain</h1>
            <p className="text-lg opacity-90">Innovación Comunitaria Sostenible</p>
          </div>
        </div>
        <p className="text-sm opacity-95 mb-6">
          Plataforma que integra movilidad ecológica, ahorro en Bitcoin y acción ambiental comunitaria
        </p>
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{userPoints}</div>
            <div className="text-xs opacity-90">Puntos Eco</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{satoshis.toLocaleString()}</div>
            <div className="text-xs opacity-90">Satoshis</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{completedHours}</div>
            <div className="text-xs opacity-90">Horas Sociales</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs opacity-90">Proyectos</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 shadow-md">
          <Droplet size={32} className="mb-2" />
          <div className="text-2xl font-bold mb-1">7</div>
          <div className="text-sm opacity-90">Sistemas de Agua</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-4 shadow-md">
          <Bitcoin size={32} className="mb-2" />
          <div className="text-2xl font-bold mb-1">{impactData.communitySavings.toLocaleString()}</div>
          <div className="text-sm opacity-90">Sats Ahorrados</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4 shadow-md">
          <Recycle size={32} className="mb-2" />
          <div className="text-2xl font-bold mb-1">{impactData.wasteCollected.toLocaleString()}</div>
          <div className="text-sm opacity-90">kg Reciclados</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="text-green-600" size={28} />
          Impacto Global de la Red
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-green-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-600">{impactData.totalVolunteers.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Voluntarios Activos</div>
          </div>
          <div className="border-2 border-blue-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-600">{impactData.areasRestored}</div>
            <div className="text-sm text-gray-600">Áreas Restauradas</div>
          </div>
          <div className="border-2 border-emerald-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-emerald-600">+{impactData.waterQualityImprovement}%</div>
            <div className="text-sm text-gray-600">Calidad del Agua</div>
          </div>
          <div className="border-2 border-cyan-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-cyan-600">{impactData.co2Avoided.toLocaleString()} kg</div>
            <div className="text-sm text-gray-600">CO₂ Evitado</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Zap size={24} />
          Los 3 Pilares de EcoChain
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span><strong>Movilidad Ecológica:</strong> Rutas inteligentes y transporte sostenible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span><strong>Centros Comunitarios:</strong> Espacios autosuficientes con tecnología verde</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span><strong>Economía Circular:</strong> Ahorro comunitario en Bitcoin para proyectos locales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

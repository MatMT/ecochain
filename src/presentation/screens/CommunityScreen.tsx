'use client';

import React from 'react';
import { Building2, Zap, Droplet, Recycle, Bitcoin } from 'lucide-react';
import CenterCard from '../components/CenterCard';
import { communityCenters } from '../../core/data/communityData';

const CommunityScreen = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Building2 className="text-green-600" size={28} />
          Centros Comunitarios
        </h2>
        <p className="text-gray-600 mb-4">Red de espacios sostenibles autosuficientes</p>
      </div>

      {communityCenters.map(center => (
        <CenterCard key={center.id} center={center} />
      ))}

      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Zap size={24} />
          Modelo de Centro Sostenible
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-3">
            <Droplet size={18} className="mt-1 flex-shrink-0" />
            <span><strong>Captación de agua lluvia:</strong> Sistemas de recolección y filtración</span>
          </div>
          <div className="flex items-start gap-3">
            <Zap size={18} className="mt-1 flex-shrink-0" />
            <span><strong>Paneles solares:</strong> Energía renovable para operación</span>
          </div>
          <div className="flex items-start gap-3">
            <Recycle size={18} className="mt-1 flex-shrink-0" />
            <span><strong>Biodigestores:</strong> Tratamiento de residuos orgánicos</span>
          </div>
          <div className="flex items-start gap-3">
            <Bitcoin size={18} className="mt-1 flex-shrink-0" />
            <span><strong>Wallet comunitario:</strong> Fondos descentralizados para proyectos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityScreen;

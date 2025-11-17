'use client';

import React from 'react';
import { Home, Map, Building2, School, Star } from 'lucide-react';
import { VIEWS } from '../../config/constants';

interface BottomNavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentView, setCurrentView }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-around items-center p-3">
        <button 
          onClick={() => setCurrentView(VIEWS.HOME)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === VIEWS.HOME ? 'text-green-600' : 'text-gray-400'}`}
        >
          <Home size={24} />
          <span className="text-xs font-medium">Inicio</span>
        </button>
        <button 
          onClick={() => setCurrentView(VIEWS.MAP)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === VIEWS.MAP ? 'text-green-600' : 'text-gray-400'}`}
        >
          <Map size={24} />
          <span className="text-xs font-medium">Proyectos</span>
        </button>
        <button 
          onClick={() => setCurrentView(VIEWS.COMMUNITY)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === VIEWS.COMMUNITY ? 'text-green-600' : 'text-gray-400'}`}
        >
          <Building2 size={24} />
          <span className="text-xs font-medium">Centros</span>
        </button>
        <button 
          onClick={() => setCurrentView(VIEWS.EDUCATION)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === VIEWS.EDUCATION ? 'text-green-600' : 'text-gray-400'}`}
        >
          <School size={24} />
          <span className="text-xs font-medium">Aprender</span>
        </button>
        <button 
          onClick={() => setCurrentView(VIEWS.PROFILE)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === VIEWS.PROFILE ? 'text-green-600' : 'text-gray-400'}`}
        >
          <Star size={24} />
          <span className="text-xs font-medium">Perfil</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;

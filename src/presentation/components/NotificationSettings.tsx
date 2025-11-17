'use client';

import React from 'react';
import { Bell, BellOff } from 'lucide-react';
import { useNotifications } from '../hooks/useNotifications';

const NotificationSettings = () => {
  const { isSupported, permission, requestPermission } = useNotifications();

  if (!isSupported) {
    return (
      <div className="bg-gray-100 border-2 border-gray-200 rounded-xl p-5">
        <div className="flex items-center gap-2 text-gray-600">
          <BellOff size={20} />
          <span className="text-sm">
            Las notificaciones no están disponibles en este navegador
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`border-2 rounded-xl p-5 ${
      permission === 'granted' 
        ? 'bg-green-50 border-green-200' 
        : 'bg-orange-50 border-orange-200'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {permission === 'granted' ? (
            <Bell size={20} className="text-green-600" />
          ) : (
            <BellOff size={20} className="text-orange-600" />
          )}
          <h3 className="font-bold text-gray-800">Notificaciones Push</h3>
        </div>
        
        <span className={`text-xs px-2 py-1 rounded-full ${
          permission === 'granted'
            ? 'bg-green-200 text-green-800'
            : permission === 'denied'
            ? 'bg-red-200 text-red-800'
            : 'bg-orange-200 text-orange-800'
        }`}>
          {permission === 'granted' ? 'Activadas' : permission === 'denied' ? 'Bloqueadas' : 'Pendiente'}
        </span>
      </div>

      {permission === 'granted' && (
        <div className="text-sm text-green-700">
          ✅ Recibirás notificaciones de:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Inscripciones a actividades</li>
            <li>Nuevos proyectos disponibles</li>
            <li>Insignias desbloqueadas</li>
          </ul>
        </div>
      )}

      {permission === 'default' && (
        <div>
          <p className="text-sm text-orange-700 mb-3">
            Activa las notificaciones para recibir alertas de nuevas actividades y actualizaciones.
          </p>
          <button
            onClick={requestPermission}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
          >
            Activar Notificaciones
          </button>
        </div>
      )}

      {permission === 'denied' && (
        <div className="text-sm text-red-700">
          ⚠️ Has bloqueado las notificaciones. Para activarlas:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>iOS:</strong> Ajustes → Safari → Notificaciones</li>
            <li><strong>Android:</strong> Configuración → Apps → EcoNet → Notificaciones</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationSettings;

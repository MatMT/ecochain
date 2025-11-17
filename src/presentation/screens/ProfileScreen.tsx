'use client';

import React, { useState } from 'react';
import { Award, Recycle, Droplet, Heart, Bitcoin, Wallet, Bell } from 'lucide-react';
import { userBadges } from '../../core/data/userData';
import NotificationSettings from '../components/NotificationSettings';
import { useNotifications } from '../hooks/useNotifications';

interface ProfileScreenProps {
  userPoints: number;
  satoshis: number;
  completedHours: number;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ userPoints, satoshis, completedHours }) => {
  const { notify, permission } = useNotifications();
  const [isWaitingNotification, setIsWaitingNotification] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleDownloadCertificate = () => {
    // Si las notificaciones no están permitidas, mostrar alerta
    if (permission !== 'granted') {
      alert('Por favor, activa las notificaciones primero para recibir la alerta de prueba.');
      return;
    }

    // Iniciar countdown
    setIsWaitingNotification(true);
    setCountdown(15);

    // Actualizar countdown cada segundo
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 1) {
          clearInterval(countdownInterval);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    // Enviar notificación después de 15 segundos
    setTimeout(() => {
      notify({
        title: '🌱 Nuevo Proyecto Cerca de Ti',
        body: 'Limpieza de Río Acelhuate - A solo 2km de tu ubicación. ¡Inscríbete ahora y gana +100 puntos!',
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png',
        tag: 'nearby-project',
        data: {
          url: '/projects',
          projectId: 'new-project-test'
        }
      });
      
      setIsWaitingNotification(false);
      setCountdown(null);

      // Mostrar también una alerta de confirmación
      alert('✅ Notificación enviada! Revisa tu teléfono.');
    }, 15000);
  };
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h2 className="text-2xl font-bold">Estudiante Voluntario</h2>
            <p className="text-sm opacity-90">Universidad Don Bosco</p>
            <div className="text-xs opacity-80 mt-1">Miembro desde Nov 2025</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{userPoints}</div>
            <div className="text-xs opacity-90">Puntos</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{satoshis.toLocaleString()}</div>
            <div className="text-xs opacity-90">Satoshis</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">{completedHours}</div>
            <div className="text-xs opacity-90">Horas</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold">12</div>
            <div className="text-xs opacity-90">Proyectos</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award size={24} className="text-yellow-500" />
          Mis Insignias
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {userBadges.map((badge, index) => (
            <div 
              key={index}
              className={`border-2 rounded-lg p-4 text-center ${
                badge.earned 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="text-sm font-medium text-gray-700">{badge.name}</div>
              <div className="text-xs text-gray-500 mt-1">{badge.category}</div>
              {badge.earned && (
                <div className="text-xs text-green-600 mt-1">✓ Desbloqueado</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <NotificationSettings />

      <div className="bg-white rounded-xl shadow-md p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Mi Impacto Personal</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 flex items-center gap-2">
              <Recycle size={18} className="text-green-600" />
              Residuos recolectados
            </span>
            <span className="font-bold text-green-600">127 kg</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 flex items-center gap-2">
              <Droplet size={18} className="text-blue-600" />
              Sistemas de agua apoyados
            </span>
            <span className="font-bold text-blue-600">3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 flex items-center gap-2">
              <Heart size={18} className="text-red-600" />
              Personas impactadas
            </span>
            <span className="font-bold text-red-600">230</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 flex items-center gap-2">
              <Bitcoin size={18} className="text-orange-600" />
              Contribución comunitaria
            </span>
            <span className="font-bold text-orange-600">₿ 8,500</span>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
        <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center gap-2">
          <Wallet size={22} />
          Wallet Bitcoin
        </h3>
        <div className="text-3xl font-bold text-orange-600 mb-2">₿ {satoshis.toLocaleString()} sats</div>
        <p className="text-sm text-orange-700 mb-4">
          Usa tus satoshis para apoyar proyectos comunitarios o cámbialos por recompensas
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
            Donar al Fondo
          </button>
          <button className="bg-white border-2 border-orange-600 text-orange-600 py-2 rounded-lg text-sm font-medium hover:bg-orange-50">
            Ver Historial
          </button>
        </div>
      </div>

      <button 
        onClick={handleDownloadCertificate}
        disabled={isWaitingNotification}
        className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
          isWaitingNotification 
            ? 'bg-orange-500 text-white cursor-wait' 
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {isWaitingNotification ? (
          <>
            <Bell size={20} className="animate-bounce" />
            Enviando notificación en {countdown}s...
          </>
        ) : (
          <>
            <Award size={20} />
            Descargar Certificado de Horas Sociales
          </>
        )}
      </button>
    </div>
  );
};

export default ProfileScreen;

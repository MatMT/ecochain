'use client';

import React, { useEffect } from 'react';
import Header from '@/presentation/components/Header';
import BottomNavigation from '@/presentation/navigation/BottomNavigation';
import PWAInstallPrompt from '@/presentation/components/PWAInstallPrompt';
import HomeScreen from '@/presentation/screens/HomeScreen';
import MapScreen from '@/presentation/screens/MapScreen';
import EducationScreen from '@/presentation/screens/EducationScreen';
import CommunityScreen from '@/presentation/screens/CommunityScreen';
import ProfileScreen from '@/presentation/screens/ProfileScreen';
import { useNavigation } from '@/presentation/hooks/useNavigation';
import { useUserStats } from '@/presentation/hooks/useUserStats';
import { useNotifications } from '@/presentation/hooks/useNotifications';
import { VIEWS } from '@/config/constants';
import { Activity } from '@/core/data/activitiesData';

const EcoNet = () => {
  const { currentView, setCurrentView } = useNavigation();
  const { userPoints, satoshis, completedHours, addActivityRewards } = useUserStats();
  const { isSupported, permission, requestPermission, notifyEnrollment } = useNotifications();

  // Solicitar permisos de notificación al montar
  useEffect(() => {
    if (isSupported && permission === 'default') {
      // Esperar un poco antes de solicitar permisos para no ser intrusivo
      const timer = setTimeout(() => {
        requestPermission();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isSupported, permission, requestPermission]);

  const handleEnrollActivity = async (activity: Activity) => {
    // Actualizar estadísticas
    addActivityRewards(activity);
    
    // Mostrar notificación
    if (permission === 'granted') {
      await notifyEnrollment(
        activity.title,
        activity.points,
        activity.satoshis,
        activity.hours
      );
    } else {
      // Fallback a alert si no hay permisos
      alert(
        `¡Te has inscrito a: ${activity.title}!\n\n✅ +${activity.points} puntos Eco\n₿ +${activity.satoshis} satoshis\n⏱️ +${activity.hours} horas sociales`
      );
    }
  };

  const renderScreen = () => {
    switch (currentView) {
      case VIEWS.HOME:
        return (
          <HomeScreen
            userPoints={userPoints}
            satoshis={satoshis}
            completedHours={completedHours}
          />
        );
      case VIEWS.MAP:
        return <MapScreen onEnrollActivity={handleEnrollActivity} />;
      case VIEWS.EDUCATION:
        return <EducationScreen />;
      case VIEWS.COMMUNITY:
        return <CommunityScreen />;
      case VIEWS.PROFILE:
        return (
          <ProfileScreen
            userPoints={userPoints}
            satoshis={satoshis}
            completedHours={completedHours}
          />
        );
      default:
        return (
          <HomeScreen
            userPoints={userPoints}
            satoshis={satoshis}
            completedHours={completedHours}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto p-4 pb-24">
        <Header />
        <div className="mb-6">{renderScreen()}</div>
      </div>
      <BottomNavigation currentView={currentView} setCurrentView={setCurrentView} />
      <PWAInstallPrompt />
    </div>
  );
};

export default EcoNet;

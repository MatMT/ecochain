'use client';

import { useEffect, useState } from 'react';
import { NotificationService, registerServiceWorker } from '@/infrastructure/services/notificationService';

export const useNotifications = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    // Verificar soporte
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setIsSupported(true);
      setPermission(Notification.permission);
      
      // Registrar Service Worker
      registerServiceWorker();
    }
  }, []);

  const requestPermission = async () => {
    const granted = await NotificationService.requestPermission();
    if (granted) {
      setPermission('granted');
    }
    return granted;
  };

  const notifyEnrollment = (activityTitle: string, points: number, satoshis: number, hours: number) => {
    return NotificationService.notifyActivityEnrollment(activityTitle, points, satoshis, hours);
  };

  const notifyNewActivity = (activityTitle: string, date: string) => {
    return NotificationService.notifyNewActivity(activityTitle, date);
  };

  const notifyBadgeUnlocked = (badgeName: string) => {
    return NotificationService.notifyBadgeUnlocked(badgeName);
  };

  const notify = (options: NotificationOptions & { title: string }) => {
    if (!isSupported || permission !== 'granted') {
      console.warn('Notifications not available');
      return Promise.resolve();
    }

    const { title, ...notificationOptions } = options;
    return new Promise<void>((resolve) => {
      const notification = new Notification(title, notificationOptions);
      notification.onclick = () => {
        window.focus();
        if (notificationOptions.data?.url) {
          window.location.href = notificationOptions.data.url;
        }
        notification.close();
      };
      resolve();
    });
  };

  return {
    isSupported,
    permission,
    requestPermission,
    notifyEnrollment,
    notifyNewActivity,
    notifyBadgeUnlocked,
    notify,
  };
};

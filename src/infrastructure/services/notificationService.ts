// Servicio para manejar notificaciones push
export class NotificationService {
  static async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.log('Este navegador no soporta notificaciones');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }

    return false;
  }

  static async sendNotification(title: string, options?: NotificationOptions) {
    const hasPermission = await this.requestPermission();
    
    if (!hasPermission) {
      console.log('Permiso de notificaciones denegado');
      return;
    }

    // Si hay service worker registrado, usar su API
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      const registration = await navigator.serviceWorker.ready;
      
      return registration.showNotification(title, {
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png',
        tag: 'econet-notification',
        requireInteraction: false,
        ...options,
      });
    }

    // Fallback a notificación normal
    return new Notification(title, {
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      ...options,
    });
  }

  static async notifyActivityEnrollment(activityTitle: string, points: number, satoshis: number, hours: number) {
    return this.sendNotification('¡Inscripción Exitosa! 🎉', {
      body: `Te has inscrito a: ${activityTitle}\n✅ +${points} puntos\n₿ +${satoshis} satoshis\n⏱️ +${hours} horas sociales`,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      tag: 'activity-enrollment',
      data: {
        url: '/?view=profile',
      },
    });
  }

  static async notifyNewActivity(activityTitle: string, date: string) {
    return this.sendNotification('Nueva Actividad Disponible 🌱', {
      body: `${activityTitle}\nFecha: ${date}`,
      icon: '/icon-192x192.png',
      tag: 'new-activity',
      data: {
        url: '/?view=map',
      },
    });
  }

  static async notifyBadgeUnlocked(badgeName: string) {
    return this.sendNotification('¡Nueva Insignia Desbloqueada! 🏆', {
      body: `Has desbloqueado: ${badgeName}`,
      icon: '/icon-192x192.png',
      tag: 'badge-unlocked',
      data: {
        url: '/?view=profile',
      },
    });
  }
}

// Registrar Service Worker
export async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      
      console.log('Service Worker registrado:', registration);
      
      return registration;
    } catch (error) {
      console.error('Error al registrar Service Worker:', error);
    }
  }
}

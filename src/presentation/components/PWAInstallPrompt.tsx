'use client';

import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verificar si ya está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Mostrar el prompt después de un delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 5000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Detectar cuando se instala
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowPrompt(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setShowPrompt(false);
    }

    setDeferredPrompt(null);
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-2xl p-4 max-w-md mx-auto">
        <button
          onClick={() => setShowPrompt(false)}
          className="absolute top-2 right-2 text-white/80 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="bg-white/20 rounded-lg p-2">
            <Download size={24} />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">
              Instala EcoChain
            </h3>
            <p className="text-sm text-white/90 mb-3">
              Agrega esta app a tu pantalla de inicio para acceso rápido y notificaciones.
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={handleInstall}
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-green-50 transition-colors"
              >
                Instalar
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="bg-white/20 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-white/30 transition-colors"
              >
                Más tarde
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;

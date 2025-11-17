# 🔔 Guía de Prueba de Notificaciones

## ✅ Cambio Implementado

El botón **"Descargar Certificado de Horas Sociales"** en el perfil ahora envía una notificación de prueba después de 15 segundos.

---

## 📱 Cómo Probar en Local (Navegador de Escritorio)

### Paso 1: Abrir la Aplicación
```
http://localhost:3000
```

### Paso 2: Activar Permisos de Notificaciones
1. Espera 3 segundos después de cargar la página
2. Te aparecerá una solicitud del navegador
3. Haz clic en **"Permitir"** o **"Allow"**

### Paso 3: Ir al Perfil
1. Haz clic en el icono de perfil en la barra inferior
2. Desplázate hasta el final de la página

### Paso 4: Presionar el Botón
1. Haz clic en **"Descargar Certificado de Horas Sociales"**
2. El botón cambiará a color naranja y mostrará:
   ```
   🔔 Enviando notificación en 15s...
   ```
3. Verás un contador regresivo: 14s... 13s... 12s...

### Paso 5: Esperar la Notificación
- **Después de 15 segundos**, recibirás una notificación que dice:
  ```
  🌱 Nuevo Proyecto Cerca de Ti
  
  Limpieza de Río Acelhuate - A solo 2km de tu ubicación. 
  ¡Inscríbete ahora y gana +100 puntos!
  ```

### Paso 6: Interactuar con la Notificación
- **En Windows/macOS**: Aparecerá en la esquina de tu pantalla
- **Haz clic** en la notificación para abrir la app

---

## 📱 Cómo Probar en Teléfono (Producción)

### ⚠️ Importante:
Las notificaciones web funcionan diferente según el sistema operativo:

#### 🤖 **Android (Chrome/Firefox)**
✅ **Funciona perfectamente**
1. Deploy la app a Vercel
2. Abre la URL en Chrome
3. Acepta permisos de notificaciones
4. Ve al perfil y presiona el botón
5. **¡La notificación aparecerá como WhatsApp!**
6. Incluso si cierras el navegador, la notificación seguirá llegando

#### 🍎 **iOS (Safari)**
⚠️ **Limitado** (a partir de iOS 16.4+)
- Requiere que la app esté instalada como PWA
- Pasos:
  1. Abre la app en Safari
  2. Presiona el botón "Compartir"
  3. Selecciona "Agregar a Inicio"
  4. Abre la app desde el ícono en tu pantalla de inicio
  5. Acepta permisos de notificaciones
  6. Presiona el botón en el perfil
  7. La notificación aparecerá (pero solo si la app está en primer plano)

---

## 🎯 ¿Qué Hace el Código?

### 1. **Al presionar el botón:**
```typescript
handleDownloadCertificate()
```
- Verifica que las notificaciones estén permitidas
- Inicia un countdown de 15 segundos
- Actualiza el UI cada segundo
- Envía la notificación después de 15s

### 2. **La notificación contiene:**
```typescript
{
  title: '🌱 Nuevo Proyecto Cerca de Ti',
  body: 'Limpieza de Río Acelhuate - A solo 2km de tu ubicación...',
  icon: '/icon-192x192.png',
  badge: '/icon-192x192.png',
  tag: 'nearby-project',
  data: {
    url: '/projects',
    projectId: 'new-project-test'
  }
}
```

### 3. **Al hacer clic en la notificación:**
- La app se abre
- Te redirige a la sección de "Proyectos"

---

## 🚀 Deploy para Probar en Teléfono

### Opción 1: Deploy con Vercel CLI
```bash
# Si no tienes Vercel CLI instalado
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Opción 2: Deploy desde GitHub
1. Sube tus cambios:
   ```bash
   git add .
   git commit -m "feat: Add test notification on certificate download"
   git push
   ```
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Espera a que termine el deploy
5. Abre la URL en tu teléfono

---

## 🔧 Personalización

Si quieres cambiar el mensaje de la notificación, edita:

**Archivo:** `src/presentation/screens/ProfileScreen.tsx`

**Líneas 35-42:**
```typescript
notify({
  title: '🌱 Nuevo Proyecto Cerca de Ti',  // ← Cambia esto
  body: 'Limpieza de Río Acelhuate - A solo 2km...',  // ← Y esto
  icon: '/icon-192x192.png',
  badge: '/icon-192x192.png',
  tag: 'nearby-project',
  data: {
    url: '/projects',  // ← A dónde redirigir
    projectId: 'new-project-test'
  }
});
```

---

## ❓ Troubleshooting

### "No me aparece el permiso de notificaciones"
- Refresca la página (F5)
- O actívalo manualmente en Configuración del Perfil

### "El botón no hace nada"
- Verifica que hayas dado permiso de notificaciones
- Revisa la consola del navegador (F12)

### "No veo la notificación en mi teléfono"
- **Android**: Funciona en navegador y PWA
- **iOS**: Solo funciona como PWA instalada
- Verifica que las notificaciones de Safari estén activadas en Ajustes del sistema

### "El countdown no se muestra"
- Asegúrate de estar en la pestaña del Perfil
- El botón está al final de la página (scroll down)

---

## 📊 Estados del Botón

| Estado | Color | Texto | Acción |
|--------|-------|-------|--------|
| Normal | Verde | Descargar Certificado... | Hacer clic |
| Esperando | Naranja | Enviando notificación en Xs... | Esperar |
| Después | Verde | Descargar Certificado... | Listo para otro test |

---

## 🎉 ¡Listo!

Ahora puedes probar las notificaciones localmente y luego deployar a Vercel para probarlas en tu teléfono como una app nativa.

**Servidor corriendo en:** http://localhost:3000

**Siguiente paso:** Deploy a Vercel para probar en móvil 📱

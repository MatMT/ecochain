# 📱 Guía de Instalación PWA - EcoNet

## 🎯 ¿Qué es una PWA?

EcoNet es una Progressive Web App (PWA), lo que significa que puedes instalarla en tu teléfono como si fuera una app nativa, sin necesidad de descargarla desde una tienda de aplicaciones.

## ✨ Características de la PWA

✅ **Funciona sin conexión** - Accede a funciones básicas sin internet  
✅ **Notificaciones Push** - Recibe alertas de nuevas actividades  
✅ **Instalable** - Agrégala a tu pantalla de inicio  
✅ **Rápida y ligera** - Carga instantánea  
✅ **Actualización automática** - Siempre tendrás la última versión  

---

## 📲 Cómo Instalar en tu Teléfono

### iPhone / iPad (Safari)

1. **Abre Safari** y navega a la URL de EcoNet
2. Toca el botón **Compartir** (ícono de cuadrado con flecha hacia arriba)
3. Desplázate y selecciona **"Agregar a la pantalla de inicio"**
4. Personaliza el nombre si lo deseas
5. Toca **"Agregar"**
6. ¡Listo! La app aparecerá en tu pantalla de inicio

**Permisos de Notificaciones:**
- Al abrir la app por primera vez, verás un mensaje solicitando permisos
- Toca **"Permitir"** para recibir notificaciones de actividades

### Android (Chrome)

1. **Abre Chrome** y navega a la URL de EcoNet
2. Verás un banner automático que dice **"Agregar EcoNet a la pantalla de inicio"**
3. Toca **"Agregar"** o **"Instalar"**
4. Confirma tocando **"Agregar"** en el diálogo

**O manualmente:**
1. Toca el menú (⋮) en la esquina superior derecha
2. Selecciona **"Agregar a la pantalla de inicio"** o **"Instalar app"**
3. Confirma la instalación

**Permisos de Notificaciones:**
- La app solicitará permisos automáticamente
- También puedes activarlas desde Configuración > Notificaciones

---

## 🔔 Notificaciones Push

### ¿Qué notificaciones recibirás?

1. **Inscripción Exitosa** 🎉
   - Cuando te inscribes a una actividad
   - Muestra tus recompensas (puntos, satoshis, horas)

2. **Nuevas Actividades** 🌱
   - Cuando se publican nuevos proyectos cerca de ti

3. **Insignias Desbloqueadas** 🏆
   - Cuando alcanzas logros especiales

### Cómo Activar Notificaciones

**iOS:**
1. Ve a Ajustes > Safari > Notificaciones
2. Activa "Permitir notificaciones"
3. Abre EcoNet y acepta el permiso

**Android:**
1. Configuración > Aplicaciones > EcoNet
2. Permisos > Notificaciones
3. Activa todas las categorías

---

## 🧪 Prueba las Notificaciones

Para probar que las notificaciones funcionan:

1. Abre la app EcoNet desde tu pantalla de inicio
2. Ve a la sección **"Proyectos"**
3. Toca el botón **"Inscribirme"** en cualquier actividad
4. ¡Deberías recibir una notificación instantánea! 🎉

---

## 🚀 Despliegue en Vercel

### Paso 1: Preparar el Proyecto

```bash
# Generar iconos
npm run generate-icons

# Build de producción
npm run build
```

### Paso 2: Deploy en Vercel

1. **Desde la Terminal:**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

2. **Desde GitHub:**
   - Push tu código a GitHub
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - Vercel detectará Next.js automáticamente
   - Haz clic en "Deploy"

### Paso 3: Configurar el Dominio

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings > Domains
3. Agrega tu dominio personalizado (opcional)

### Paso 4: Variables de Entorno (si las necesitas)

```env
NEXT_PUBLIC_API_URL=https://tu-api.com
NEXT_PUBLIC_VAPID_PUBLIC_KEY=tu-clave-vapid
```

---

## 🔧 Solución de Problemas

### Las notificaciones no funcionan

**iOS:**
- Asegúrate de usar Safari (no Chrome)
- iOS 16.4+ es requerido para notificaciones web
- Verifica permisos en Ajustes

**Android:**
- Verifica que Chrome esté actualizado
- Revisa permisos en Configuración del sistema
- Asegúrate de que el ahorro de batería no bloquee la app

### La app no se actualiza

1. Cierra completamente la app
2. Elimínala de la pantalla de inicio
3. Reinstálala desde el navegador

### No aparece el banner de instalación

- Espera unos 5 segundos después de cargar la página
- En iOS, usa Safari y el menú Compartir
- En Android, usa Chrome y busca "Instalar app" en el menú

---

## 📊 Métricas PWA

Una vez desplegada, puedes verificar que la PWA funciona correctamente:

1. **Lighthouse Audit** (en Chrome DevTools):
   - PWA Score debe ser 90+
   - Performance 90+
   - Accessibility 90+

2. **Application Tab** (DevTools):
   - Manifest.json cargado ✅
   - Service Worker registrado ✅
   - Icons disponibles ✅

---

## 🌐 URLs Importantes

- **Producción**: `https://tu-dominio.vercel.app`
- **Manifest**: `https://tu-dominio.vercel.app/manifest.json`
- **Service Worker**: `https://tu-dominio.vercel.app/sw.js`

---

## 💚 ¡Disfruta de EcoNet!

Ahora tienes una app nativa de voluntariado ambiental en tu teléfono. Recibe notificaciones de nuevas actividades y mantente conectado con tu comunidad sostenible.

**¿Problemas o preguntas?**  
Reporta issues en GitHub o contacta al equipo de desarrollo.

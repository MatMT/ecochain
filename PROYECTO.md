# EcoChain - Plataforma de Innovación Comunitaria Sostenible

Plataforma que integra movilidad ecológica, ahorro en Bitcoin y acción ambiental comunitaria, construida con Next.js 16 y React 19.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
EcoChain/
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Layout principal
│   ├── page.tsx                    # Página principal (importa EcoChain)
│   └── globals.css                 # Estilos globales con Tailwind
├── src/                            # Código fuente de la aplicación
│   ├── components/
│   │   └── EcoChain.tsx              # Componente principal de la app
│   ├── config/
│   │   └── constants.ts            # Constantes (VIEWS, ACTIVITY_TYPES, etc.)
│   ├── core/                       # Lógica de negocio y datos
│   │   ├── data/
│   │   │   ├── activitiesData.ts  # Actividades y proyectos
│   │   │   ├── educationData.ts   # Módulos educativos
│   │   │   ├── communityData.ts   # Centros comunitarios e impacto
│   │   │   └── userData.ts        # Datos de usuario e insignias
│   │   └── index.ts               # Exports centralizados
│   ├── infrastructure/             # Servicios externos (preparado para APIs)
│   └── presentation/               # Capa de UI
│       ├── components/             # Componentes reutilizables
│       │   ├── Header.tsx
│       │   ├── ActivityCard.tsx
│       │   ├── ModuleCard.tsx
│       │   └── CenterCard.tsx
│       ├── hooks/                  # Custom hooks
│       │   ├── useNavigation.ts
│       │   └── useUserStats.ts
│       ├── navigation/
│       │   └── BottomNavigation.tsx
│       ├── screens/                # Pantallas principales
│       │   ├── HomeScreen.tsx
│       │   ├── MapScreen.tsx
│       │   ├── EducationScreen.tsx
│       │   ├── CommunityScreen.tsx
│       │   └── ProfileScreen.tsx
│       └── index.ts               # Exports centralizados
├── public/                         # Assets estáticos
├── next.config.ts                  # Configuración de Next.js
├── tailwind.config.ts              # Configuración de Tailwind CSS
└── tsconfig.json                   # Configuración de TypeScript
```

## 🎯 Características

### 🏠 **Home (Dashboard)**
- Vista general del impacto de la red
- Estadísticas personales (puntos, satoshis, horas sociales)
- Métricas globales de la comunidad

### 🗺️ **Proyectos y Voluntariado**
- Lista de actividades disponibles
- Filtros por categoría (Agua, Finanzas, Movilidad, Monitoreo)
- Sistema de inscripción con recompensas

### 🎓 **EcoAcademy**
- Módulos educativos gamificados
- Progreso y certificaciones
- Recompensas en satoshis

### 🏢 **Centros Comunitarios**
- Red de espacios sostenibles
- Infraestructura verde (captación de agua, paneles solares)
- Fondos comunitarios en Bitcoin

### 👤 **Perfil**
- Estadísticas personales
- Sistema de insignias
- Wallet Bitcoin
- Historial de contribuciones

## 🛠️ Tecnologías

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 + TypeScript
- **Estilos**: Tailwind CSS 4
- **Iconos**: Lucide React
- **Estado**: React Hooks (preparado para Context API/Redux)

## 🏗️ Arquitectura

### **App Router de Next.js**
- Server Components por defecto
- Client Components marcados con `'use client'`
- Optimización automática de código

### **Separación de Capas**
1. **Config**: Constantes y configuración
2. **Core**: Lógica de negocio y tipos
3. **Infrastructure**: Servicios externos (preparado para APIs)
4. **Presentation**: Componentes UI, hooks y screens

### **TypeScript**
- Tipos estrictos en toda la aplicación
- Interfaces exportadas desde core
- Path aliases (`@/`) configurados

## 🔜 Próximos Pasos

1. **Backend Integration**: Conectar con APIs reales
2. **Blockchain**: Integrar wallet Bitcoin real
3. **Autenticación**: Sistema de login/registro
4. **Geolocalización**: Mapa interactivo real
5. **Base de datos**: Persistencia de datos
6. **Tests**: Pruebas unitarias y E2E
7. **PWA**: Convertir en Progressive Web App

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en Tailwind:
- Verde: `green-600`, `emerald-600`, `teal-600`
- Naranja: `orange-600` (Bitcoin)
- Azul: `blue-600` (Agua)

### Constantes
Modifica `src/config/constants.ts` para cambiar:
- Nombres de vistas
- Tipos de actividades
- Estados de módulos

## 📄 Licencia

Este proyecto es parte de EcoChain - Innovación Comunitaria Sostenible

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

Desarrollado con 💚 para comunidades sostenibles

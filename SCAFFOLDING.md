# Estructura del Proyecto - Frontend Notes

## 📁 Organización del Repositorio (Scaffolding)

Este documento describe la estructura completa del proyecto frontend de la aplicación de notas.

```
frontend_notes/
│
├── 📁 app/                          # Next.js App Router (estructura principal)
│   ├── favicon.ico                  # Favicon de la aplicación
│   ├── globals.css                  # Estilos globales y variables CSS
│   ├── layout.tsx                   # Layout raíz con tema y providers
│   └── page.jsx                     # Página principal de la aplicación
│
├── 📁 components/                   # Componentes React reutilizables
│   ├── note-creator.jsx             # Formulario para crear nuevas notas
│   ├── note-editor.jsx              # Editor para modificar notas existentes
│   ├── notes-app.jsx                # Componente principal (gestor de estado)
│   ├── notes-list.jsx               # Lista de notas con grid responsive
│   ├── theme-provider.tsx           # Provider para tema claro/oscuro
│   │
│   └── 📁 ui/                       # Componentes UI base (Radix UI + Tailwind)
│       ├── accordion.tsx            # Acordeón colapsable
│       ├── alert-dialog.tsx         # Diálogos de alerta/confirmación
│       ├── alert.tsx                # Alertas informativas
│       ├── aspect-ratio.tsx         # Control de ratio de aspecto
│       ├── avatar.tsx               # Avatares de usuario
│       ├── badge.tsx                # Etiquetas/badges
│       ├── breadcrumb.tsx           # Navegación breadcrumb
│       ├── button.tsx               # Botones con variantes
│       ├── button-group.tsx         # Grupos de botones
│       ├── calendar.tsx             # Selector de calendario
│       ├── card.tsx                 # Tarjetas de contenido
│       ├── carousel.tsx             # Carrusel de elementos
│       ├── chart.tsx                # Componentes de gráficos
│       ├── checkbox.tsx             # Casillas de verificación
│       ├── collapsible.tsx          # Contenido colapsable
│       ├── command.tsx              # Paleta de comandos
│       ├── context-menu.tsx         # Menú contextual (clic derecho)
│       ├── dialog.tsx               # Diálogos modales
│       ├── drawer.tsx               # Cajón deslizable
│       ├── dropdown-menu.tsx        # Menús desplegables
│       ├── empty.tsx                # Estado vacío
│       ├── field.tsx                # Campo de formulario
│       ├── form.tsx                 # Componentes de formulario
│       ├── hover-card.tsx           # Tarjeta al pasar el mouse
│       ├── input.tsx                # Inputs de texto
│       ├── input-group.tsx          # Grupos de inputs
│       ├── input-otp.tsx            # Input para códigos OTP
│       ├── item.tsx                 # Item genérico
│       ├── kbd.tsx                  # Teclas de teclado
│       ├── label.tsx                # Etiquetas de formulario
│       ├── menubar.tsx              # Barra de menú
│       ├── navigation-menu.tsx      # Menú de navegación
│       ├── pagination.tsx           # Paginación
│       ├── popover.tsx              # Popovers/tooltips
│       ├── progress.tsx             # Barras de progreso
│       ├── radio-group.tsx          # Grupos de radio buttons
│       ├── resizable.tsx            # Paneles redimensionables
│       ├── scroll-area.tsx          # Áreas con scroll customizado
│       ├── select.tsx               # Selectores dropdown
│       ├── separator.tsx            # Separadores visuales
│       ├── sheet.tsx                # Hojas laterales
│       ├── sidebar.tsx              # Sidebar de navegación
│       ├── skeleton.tsx             # Placeholders de carga
│       ├── slider.tsx               # Sliders de valor
│       ├── sonner.tsx               # Notificaciones toast
│       ├── spinner.tsx              # Indicadores de carga
│       ├── switch.tsx               # Switches/toggles
│       ├── table.tsx                # Tablas de datos
│       ├── tabs.tsx                 # Pestañas/tabs
│       ├── textarea.tsx             # Áreas de texto
│       ├── toast.tsx                # Sistema de toast
│       ├── toaster.tsx              # Contenedor de toasts
│       ├── toggle.tsx               # Botones de toggle
│       ├── toggle-group.tsx         # Grupos de toggles
│       ├── tooltip.tsx              # Tooltips
│       ├── use-mobile.tsx           # Hook para detección mobile
│       └── use-toast.ts             # Hook para toast notifications
│
├── 📁 hooks/                        # Custom React Hooks
│   ├── use-mobile.ts                # Detecta si es dispositivo móvil
│   └── use-toast.ts                 # Hook para sistema de notificaciones
│
├── 📁 lib/                          # Utilidades y helpers
│   └── utils.ts                     # Funciones utilitarias (cn, etc.)
│
├── 📁 public/                       # Archivos estáticos (servidos directamente)
│   └── (imágenes, fuentes, etc.)
│
├── 📁 services/                     # Servicios de comunicación con APIs
│   └── notasService.ts              # Cliente HTTP para API de notas
│
├── 📄 .env.example                  # Ejemplo de variables de entorno
├── 📄 .env.local                    # Variables de entorno locales (no commitear)
├── 📄 .gitignore                    # Archivos ignorados por Git
├── 📄 components.json               # Configuración de componentes UI
├── 📄 eslint.config.mjs             # Configuración de ESLint
├── 📄 next-env.d.ts                 # Tipos TypeScript de Next.js
├── 📄 next.config.mjs               # Configuración de Next.js
├── 📄 package.json                  # Dependencias y scripts del proyecto
├── 📄 package-lock.json             # Lock file de npm
├── 📄 postcss.config.mjs            # Configuración de PostCSS
├── 📄 README.md                     # Documentación principal
├── 📄 ARQUITECTURA.md               # Documentación de arquitectura
├── 📄 API.md                        # Documentación de API
├── 📄 SCAFFOLDING.md                # Este archivo
├── 📄 tsconfig.json                 # Configuración de TypeScript
└── 📄 vercel.json                   # Configuración de despliegue en Vercel
```

---

## 📦 Descripción Detallada de Carpetas

### `/app` - App Router de Next.js 16

Directorio principal que define la estructura de rutas y páginas de la aplicación.

**Archivos principales**:
- `layout.tsx`: Layout raíz que envuelve toda la aplicación. Incluye providers de tema, fuentes y metadatos.
- `page.jsx`: Página de inicio que renderiza `<NotesApp />`.
- `globals.css`: Estilos globales, variables CSS, temas y configuración de Tailwind.

**Convenciones de Next.js**:
- Cada carpeta representa una ruta
- `page.jsx/tsx` define el componente de la página
- `layout.jsx/tsx` define el layout compartido
- `loading.jsx/tsx` define el estado de carga (opcional)
- `error.jsx/tsx` define el manejo de errores (opcional)

---

### `/components` - Componentes React

Componentes reutilizables organizados por funcionalidad.

#### Componentes Principales de la Aplicación

**`notes-app.jsx`** - Componente Raíz
- Gestiona el estado global de las notas
- Maneja la lógica de CRUD (Create, Read, Update, Delete)
- Coordina la comunicación entre componentes hijos
- Realiza llamadas al servicio de API
- Implementa manejo de errores con toasts

**`notes-list.jsx`** - Lista de Notas
- Renderiza las notas en un grid responsive
- Asigna colores aleatorios a cada nota
- Maneja la selección de notas
- Implementa animaciones de hover
- Muestra estado vacío cuando no hay notas

**`note-editor.jsx`** - Editor de Notas
- Formulario para editar notas existentes
- Validación de campos
- Actualización en tiempo real
- Botones de guardar/cancelar
- Manejo de estado local del formulario

**`note-creator.jsx`** - Creador de Notas
- Formulario para crear nuevas notas
- Validación de campos requeridos
- Generación automática de fecha
- Reset del formulario después de crear
- Feedback visual de éxito/error

**`theme-provider.tsx`** - Provider de Tema
- Gestiona tema claro/oscuro
- Persistencia de preferencia del usuario
- Basado en `next-themes`
- Detección de preferencia del sistema

#### `/components/ui` - Componentes UI Base

Biblioteca de componentes accesibles y reutilizables basados en:
- **Radix UI**: Primitivos sin estilos, accesibles por defecto
- **TailwindCSS**: Utilidades CSS para estilos
- **Class Variance Authority (CVA)**: Gestión de variantes de componentes

Todos estos componentes siguen el patrón:
```tsx
import { cn } from "@/lib/utils"
import { VariantProps } from "class-variance-authority"
```

Están diseñados para ser:
- ✅ Totalmente accesibles (ARIA)
- ✅ Responsive
- ✅ Compatibles con temas
- ✅ Tipados con TypeScript
- ✅ Composables

---

### `/hooks` - Custom React Hooks

Hooks personalizados para lógica reutilizable.

**`use-mobile.ts`**
- Detecta si el usuario está en un dispositivo móvil
- Usa `window.matchMedia`
- Retorna un boolean
- Se actualiza al cambiar el tamaño de la ventana

**`use-toast.ts`**
- Hook para mostrar notificaciones toast
- Gestiona cola de toasts
- Permite configurar duración, tipo, título y descripción
- Integrado con Sonner

---

### `/lib` - Librerías y Utilidades

Funciones utilitarias compartidas.

**`utils.ts`**
```typescript
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Combina clases de Tailwind sin conflictos
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

---

### `/services` - Servicios de API

Capa de abstracción para comunicación con el backend.

**`notasService.ts`** - Cliente API de Notas

Funciones exportadas:
- `listarNotas()`: GET /notas/
- `crearNota(nota)`: POST /notas/
- `obtenerNota(id)`: GET /notas/{id}
- `actualizarNota(id, cambios)`: PUT /notas/{id}
- `eliminarNota(id)`: DELETE /notas/{id}
- `filtrarNotasPorEstado(estado)`: GET /notas/estado/{estado}

Interfaces TypeScript:
- `Nota`: Modelo completo de nota
- `NotaCreate`: Datos para crear nota
- `NotaUpdate`: Datos para actualizar nota

Características:
- Manejo de errores HTTP
- Tipado estático con TypeScript
- Validación de respuestas
- Centralización de URL base

---

### `/public` - Archivos Estáticos

Archivos servidos directamente por Next.js sin procesamiento.

Típicamente incluye:
- Imágenes (logos, iconos)
- Fuentes personalizadas
- Archivos robots.txt
- Manifest.json para PWA

**Ruta de acceso**: `/archivo.png` → `public/archivo.png`

---

## 📄 Archivos de Configuración

### `package.json`

Define el proyecto, dependencias y scripts.

**Scripts principales**:
```json
{
  "dev": "next dev",          // Desarrollo en localhost:3000
  "build": "next build",      // Build para producción
  "start": "next start",      // Servidor de producción
  "lint": "eslint ."          // Linting de código
}
```

**Dependencias principales**:
- `next@^16.0.8`: Framework React
- `react@19`: Librería UI
- `tailwindcss@4`: Framework CSS
- `@radix-ui/*`: Componentes accesibles
- `lucide-react`: Iconos

---

### `next.config.mjs`

Configuración de Next.js.

Posibles configuraciones:
- Rewrites y redirects
- Headers personalizados
- Optimización de imágenes
- Variables de entorno
- Webpack customizado

---

### `tsconfig.json`

Configuración de TypeScript.

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]  // Alias para imports
    }
  }
}
```

Permite imports como:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

---

### `tailwind.config.js`

Configuración de TailwindCSS.

Define:
- Paleta de colores personalizada
- Breakpoints responsive
- Plugins (como Radix UI)
- Tema claro/oscuro
- Animaciones custom

---

### `components.json`

Configuración para shadcn/ui components.

Define:
- Ruta de componentes UI
- Ruta de utilidades
- Estilo de componentes
- Aliases de importación

---

### `.env.example` y `.env.local`

Variables de entorno.

**`.env.example`**: Template con variables documentadas (commitear)
**`.env.local`**: Valores reales (NO commitear, en .gitignore)

---

### `vercel.json`

Configuración específica para despliegue en Vercel.

Puede incluir:
- Rewrites
- Headers
- Redirects
- Regiones de deploy
- Variables de entorno

---

## 🔄 Flujo de Datos en la Aplicación

```
┌─────────────────────────────────────────────────┐
│              app/page.jsx                       │
│              ↓                                  │
│         <NotesApp />                            │
└─────────────────────────────────────────────────┘
                    │
                    │ Estado global (useState)
                    │ - notes[]
                    │ - selectedNote
                    │ - isCreating
                    │
    ┌───────────────┼───────────────┐
    ▼               ▼               ▼
┌─────────┐   ┌───────────┐   ┌──────────────┐
│NotesList│   │NoteEditor │   │NoteCreator   │
└────┬────┘   └─────┬─────┘   └──────┬───────┘
     │              │                 │
     │              │                 │
     └──────────────┴─────────────────┘
                    │
                    ▼
          ┌──────────────────┐
          │ notasService.ts  │
          │  ↓               │
          │ fetch API        │
          └──────────────────┘
                    │
                    ▼
          ┌──────────────────┐
          │   Backend API    │
          └──────────────────┘
```

---

## 🎨 Convenciones de Código

### Nombres de Archivos

- **Componentes**: `kebab-case.jsx` (note-creator.jsx)
- **Hooks**: `use-nombre.ts` (use-mobile.ts)
- **Servicios**: `nombreService.ts` (notasService.ts)
- **Utilidades**: `utils.ts`, `helpers.ts`

### Nombres de Componentes

```jsx
// Componentes: PascalCase
export function NotesApp() {}

// Hooks: camelCase con prefijo 'use'
export function useMobile() {}

// Servicios: camelCase
export async function crearNota() {}
```

### Imports

Orden recomendado:
```jsx
// 1. React y librerías externas
import { useState, useEffect } from "react"
import { Plus, Trash } from "lucide-react"

// 2. Componentes locales
import { Button } from "@/components/ui/button"
import { NotesList } from "./notes-list"

// 3. Servicios y utilidades
import * as notasService from "@/services/notasService"
import { cn } from "@/lib/utils"

// 4. Tipos
import type { Nota } from "@/services/notasService"
```

---

## 🚀 Comandos Útiles

### Desarrollo

```bash
npm run dev              # Inicia servidor de desarrollo
npm run build            # Construye para producción
npm run start            # Inicia servidor de producción
npm run lint             # Verifica código con ESLint
```

### Gestión de Dependencias

```bash
npm install              # Instala todas las dependencias
npm install <paquete>    # Instala nueva dependencia
npm update               # Actualiza dependencias
npm audit                # Verifica vulnerabilidades
npm audit fix            # Corrige vulnerabilidades
```

### Componentes UI (si usas shadcn/ui CLI)

```bash
npx shadcn-ui@latest add button      # Agrega componente Button
npx shadcn-ui@latest add dialog      # Agrega componente Dialog
npx shadcn-ui@latest add form        # Agrega componente Form
```

---

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~2000 (estimado)
- **Componentes React**: 60+ (incluyendo UI)
- **Hooks personalizados**: 2
- **Servicios API**: 1
- **Rutas**: 1 página principal
- **Dependencias**: ~50 paquetes

---

## 🔮 Extensiones Futuras

### Estructura Propuesta para Crecimiento

```
frontend_notes/
├── app/
│   ├── (auth)/              # Grupo de rutas de autenticación
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/         # Grupo de rutas del dashboard
│   │   ├── notes/
│   │   ├── categories/
│   │   └── profile/
│   └── api/                 # API Routes de Next.js
│       └── [...]/
├── components/
│   ├── auth/                # Componentes de autenticación
│   ├── dashboard/           # Componentes del dashboard
│   ├── notes/               # Componentes de notas
│   └── ui/                  # Componentes UI base
├── context/                 # React Context providers
│   ├── AuthContext.tsx
│   └── NotesContext.tsx
├── types/                   # Tipos TypeScript compartidos
│   ├── index.ts
│   └── api.ts
└── utils/                   # Utilidades adicionales
    ├── validation.ts
    └── formatting.ts
```

---

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 👥 Contribuir al Proyecto

### Agregar un Nuevo Componente

1. Crear archivo en `/components` o `/components/ui`
2. Implementar componente con TypeScript
3. Exportar con nombre
4. Importar en componente padre
5. Actualizar esta documentación

### Agregar un Nuevo Servicio

1. Crear archivo en `/services`
2. Definir interfaces TypeScript
3. Implementar funciones de API
4. Exportar funciones e interfaces
5. Importar donde sea necesario

---

## 📞 Contacto

Para preguntas sobre la estructura del proyecto, contactar al equipo de desarrollo.

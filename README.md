# Frontend Notes Aineles

Aplicación web moderna de gestión de notas construida con Next.js 16, React 19 y TailwindCSS 4, conectada a una API REST backend para persistencia de datos.

## 📋 Descripción del Proyecto

Sistema fullstack de notas que permite a los usuarios crear, editar, eliminar y organizar notas de manera eficiente. La aplicación está dividida en dos partes:

- **Frontend**: Aplicación Next.js desplegada en Vercel
- **Backend**: API REST en FastAPI/Django desplegada en Render
- **Base de Datos**: PostgreSQL/MySQL en Railway

## 🚀 Stack Tecnológico

### Frontend
- **Next.js 16.0.8** - Framework React con App Router
- **React 19** - Librería UI con Server Components
- **TailwindCSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Librería de iconos
- **TypeScript** - Tipado estático
- **Next Themes** - Gestión de temas claro/oscuro
- **React Hook Form** - Manejo de formularios
- **Sonner** - Notificaciones toast

### Backend (Repositorio separado)
- **FastAPI/Django** - Framework backend
- **PostgreSQL/MySQL** - Base de datos relacional
- **SQLAlchemy/Django ORM** - ORM para gestión de datos

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.17.0 (recomendado v20 LTS)
- **npm** >= 9.0.0 o **pnpm** >= 8.0.0
- **Git** para control de versiones

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/ainelesdiaz/frontend_notes.git
cd frontend_notes
```

### 2. Instalar dependencias

```bash
npm install
# o
pnpm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` y configura las variables necesarias (ver sección Variables de Entorno).

### 4. Ejecutar en desarrollo

```bash
npm run dev
# o
pnpm dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🔐 Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```env
# URL del backend API
NEXT_PUBLIC_API_URL=https://apinotasdb-production.up.railway.app

# Para producción (opcional)
NEXT_PUBLIC_VERCEL_URL=https://frontend-notes-aineles.vercel.app
```

Ver archivo `.env.example` para más detalles.

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta ESLint para verificar código
```

## 🌐 Enlaces de Producción

- **Frontend (Vercel)**: [https://frontend-notes-aineles.vercel.app](https://frontend-notes-aineles.vercel.app)
- **Backend (Render)**: [https://apinotas-iosi.onrender.com/docs](https://apinotas-iosi.onrender.com/docs)
- **Base de Datos (Railway)**: Dashboard interno de Railway

## 📚 Documentación Adicional

- [ARQUITECTURA.md](./ARQUITECTURA.md) - Diagrama y descripción de la arquitectura del sistema
- [API.md](./API.md) - Documentación completa de los endpoints del API
- [SCAFFOLDING.md](./SCAFFOLDING.md) - Estructura detallada del proyecto

## 🏗️ Estructura del Proyecto

```
frontend_notes/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.jsx             # Página de inicio
│   └── globals.css          # Estilos globales
├── components/              # Componentes React
│   ├── notes-app.jsx        # Componente principal
│   ├── note-creator.jsx     # Formulario de creación
│   ├── note-editor.jsx      # Editor de notas
│   ├── notes-list.jsx       # Lista de notas
│   └── ui/                  # Componentes UI reutilizables
├── services/                # Servicios de API
│   └── notasService.ts      # Cliente API de notas
├── hooks/                   # Custom hooks
├── lib/                     # Utilidades
└── public/                  # Archivos estáticos
```

## 🎨 Características

- ✨ Interfaz moderna y responsive
- 🎨 Tema claro/oscuro con persistencia
- 📝 CRUD completo de notas (Crear, Leer, Actualizar, Eliminar)
- 🔄 Sincronización en tiempo real con API
- 🎯 Colores automáticos para organización visual
- ⚡ Rendimiento optimizado con Next.js 16
- ♿ Accesibilidad con Radix UI
- 📱 Diseño Mobile-First
- 🔔 Notificaciones toast para feedback del usuario

## 🧪 Testing (Futuro)

```bash
npm run test        # Ejecutar tests
npm run test:watch  # Ejecutar tests en modo watch
npm run test:coverage # Generar reporte de cobertura
```

## 📄 Licencia

Este proyecto es privado y pertenece a Aineles Díaz.

## 👤 Autor

**Aineles Díaz** - [GitHub](https://github.com/ainelesdiaz)

## 🤝 Contribuciones

Este es un proyecto personal. Si deseas contribuir, por favor abre un issue primero para discutir los cambios propuestos.

## 📞 Soporte

Para preguntas o problemas, abre un issue en el repositorio de GitHub.
- `GET /notas/estado/{estado}` - Filtrar por estado

## Estructura del Proyecto

```
frotend_notes_aineles/
├── app/                    # Páginas de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.jsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI base
│   ├── notes-app.jsx     # Componente principal
│   ├── notes-list.jsx    # Lista de notas
│   ├── note-creator.jsx  # Formulario de creación
│   ├── note-editor.jsx   # Formulario de edición
│   └── theme-provider.tsx # Provider de tema
├── services/             # Servicios API
│   └── notasService.ts   # Servicio de notas
├── lib/                  # Utilidades
│   └── utils.ts          # Funciones helper
└── public/               # Archivos estáticos
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Desarrollo

El proyecto usa:
- **Next.js App Router** para enrutamiento
- **Server Components** por defecto
- **Client Components** para interactividad
- **TailwindCSS** con variables CSS personalizadas
- **Radix UI** para componentes accesibles

## Licencia

MIT

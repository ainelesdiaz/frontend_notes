# Frontend Notes Aineles

Aplicación web de notas construida con Next.js 16, React 19 y TailwindCSS 4, conectada a una API REST para gestión de notas.

## Características

- ✨ Interfaz moderna y responsive
- 🎨 Tema claro/oscuro
- 📝 Crear, editar y eliminar notas
- 🔄 Sincronización en tiempo real con API
- 🎯 Colores automáticos para las notas
- ⚡ Rendimiento optimizado con Next.js 16

## Tecnologías

- **Next.js 16** - Framework React
- **React 19** - Librería UI
- **TailwindCSS 4** - Estilos
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos
- **TypeScript** - Tipado estático

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## API

La aplicación se conecta a la API de notas en:
```
https://apinotasdb-production.up.railway.app/
```

### Endpoints utilizados:

- `GET /notas/` - Listar todas las notas
- `POST /notas/` - Crear una nota
- `GET /notas/{id}` - Obtener una nota específica
- `PUT /notas/{id}` - Actualizar una nota
- `DELETE /notas/{id}` - Eliminar una nota
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

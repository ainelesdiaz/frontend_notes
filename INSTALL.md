# Frontend Notes Aineles - Instalación y Uso

## 🚀 Inicio Rápido

### Paso 1: Instalar Dependencias
```bash
cd frotend_notes_aineles
npm install
```

### Paso 2: Ejecutar en Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Paso 3: Construir para Producción
```bash
npm run build
npm start
```

## 📝 Características Implementadas

### ✅ Conexión con API
- Servicio completo de API en `services/notasService.ts`
- URL de la API: `https://apinotasdb-production.up.railway.app`
- Endpoints implementados:
  - Listar notas
  - Crear nota
  - Editar nota
  - Eliminar nota
  - Filtrar por estado

### ✅ Componentes UI
- **NotesApp**: Componente principal con gestión de estado
- **NotesList**: Lista de notas con colores automáticos
- **NoteCreator**: Formulario para crear nuevas notas
- **NoteEditor**: Formulario para editar notas existentes
- Más de 60 componentes UI de Radix en `components/ui/`

### ✅ Funcionalidades
- Crear, editar y eliminar notas
- Sincronización automática con la API
- Notificaciones toast para feedback del usuario
- Colores aleatorios para cada nota
- Formato de fechas relativas (Hace 2 min, Ayer, etc.)
- Tema claro/oscuro
- Diseño responsive

## 🎨 Estructura de Datos

### Nota (según API)
```typescript
{
  id: number
  titulo: string
  contenido: string
  fecha: string (ISO 8601)
  estado: boolean
}
```

## 🔧 Configuración

### Variables de Entorno (Opcional)
Puedes crear un archivo `.env.local` basado en `.env.example`:
```bash
NEXT_PUBLIC_API_URL=https://apinotasdb-production.up.railway.app
```

## 📦 Dependencias Principales

- **Next.js 16.0.3** - Framework
- **React 19.2.0** - Librería UI
- **TailwindCSS 4.1.9** - CSS
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos
- **TypeScript 5** - Tipado

## 🎯 Próximos Pasos

Posibles mejoras:
- [ ] Paginación de notas
- [ ] Búsqueda y filtros avanzados
- [ ] Categorías o etiquetas
- [ ] Editor de texto enriquecido
- [ ] Modo offline con sincronización
- [ ] Exportar notas (PDF, Markdown)

## 🐛 Solución de Problemas

### Error de conexión con API
Verifica que la API esté activa en: https://apinotasdb-production.up.railway.app/docs

### Error de instalación
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
npm run dev -- -p 3001
```

## 📄 Licencia

MIT

# Arquitectura del Sistema - Frontend Notes

## 📐 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                         USUARIOS                                 │
│                    (Navegador Web)                              │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTPS
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND - VERCEL                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Next.js 16 App (React 19)                   │  │
│  │                                                           │  │
│  │  ┌─────────────────┐  ┌──────────────────┐              │  │
│  │  │   UI Components │  │  Services Layer  │              │  │
│  │  │   (React)       │  │  (API Clients)   │              │  │
│  │  │  - NotesApp     │  │  - notasService  │              │  │
│  │  │  - NotesList    │  └────────┬─────────┘              │  │
│  │  │  - NoteEditor   │           │                         │  │
│  │  │  - NoteCreator  │           │                         │  │
│  │  └─────────────────┘           │                         │  │
│  │                                 │                         │  │
│  │  ┌─────────────────┐           │                         │  │
│  │  │   Radix UI      │           │                         │  │
│  │  │   TailwindCSS   │           │                         │  │
│  │  └─────────────────┘           │                         │  │
│  └────────────────────────────────┼─────────────────────────┘  │
│                                    │                            │
│  URL: https://frontend-notes-aineles.vercel.app                │
└────────────────────────────────────┼────────────────────────────┘
                                     │
                                     │ REST API (JSON)
                                     │ HTTPS
                                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND API - RENDER                         │
│                    https://apinotas-iosi.onrender.com           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              FastAPI/Django Application                  │  │
│  │                                                           │  │
│  │  ┌─────────────────┐  ┌──────────────────┐              │  │
│  │  │   API Routes    │  │   Services       │              │  │
│  │  │   /notas/       │  │   Business Logic │              │  │
│  │  │   /notas/{id}   │  └────────┬─────────┘              │  │
│  │  └────────┬────────┘           │                         │  │
│  │           │                     │                         │  │
│  │           └──────────┬──────────┘                         │  │
│  │                      │                                    │  │
│  │           ┌──────────▼─────────┐                          │  │
│  │           │   ORM Layer        │                          │  │
│  │           │  SQLAlchemy/Django │                          │  │
│  │           └──────────┬─────────┘                          │  │
│  └──────────────────────┼────────────────────────────────────┘  │
│                         │                                       │
│  URL: https://apinotas-iosi.onrender.com                       │
└─────────────────────────┼───────────────────────────────────────┘
                          │
                          │ SQL Queries
                          │ TCP/IP
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                 BASE DE DATOS - RAILWAY                         │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              PostgreSQL/MySQL Database                   │  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────┐             │  │
│  │  │  Tabla: notas                           │             │  │
│  │  │  ┌────────────────────────────────────┐ │             │  │
│  │  │  │ - id (PK, INT, AUTO_INCREMENT)     │ │             │  │
│  │  │  │ - titulo (VARCHAR)                 │ │             │  │
│  │  │  │ - contenido (TEXT)                 │ │             │  │
│  │  │  │ - fecha (DATETIME)                 │ │             │  │
│  │  │  │ - estado (BOOLEAN)                 │ │             │  │
│  │  │  └────────────────────────────────────┘ │             │  │
│  │  └─────────────────────────────────────────┘             │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Host: Railway Internal Database                               │
└─────────────────────────────────────────────────────────────────┘
```

## 🏛️ Modelo C4 - Nivel 1 (Contexto del Sistema)

```
                    ┌─────────────────┐
                    │                 │
                    │    USUARIO      │
                    │                 │
                    └────────┬────────┘
                             │
                             │ Usa el navegador
                             │ para gestionar notas
                             ▼
    ┌────────────────────────────────────────────────┐
    │                                                │
    │        SISTEMA DE GESTIÓN DE NOTAS             │
    │                                                │
    │  - Crear notas                                 │
    │  - Editar notas                                │
    │  - Eliminar notas                              │
    │  - Listar notas                                │
    │  - Cambiar tema claro/oscuro                   │
    │                                                │
    └────────────────────────────────────────────────┘
```

## 🏛️ Modelo C4 - Nivel 2 (Contenedores)

```
┌─────────────┐
│   USUARIO   │
└──────┬──────┘
       │
       │ HTTPS
       ▼
┌──────────────────────┐      REST API        ┌──────────────────────┐
│  APLICACIÓN WEB      │◄──────────────────────│   API BACKEND        │
│  (Next.js/React)     │      (JSON/HTTPS)     │   (FastAPI/Django)   │
│                      │──────────────────────►│                      │
│  - Vercel            │                       │   - Render           │
│  - SSR/CSR           │                       │   - Endpoints REST   │
│  - UI Components     │                       │   - Business Logic   │
└──────────────────────┘                       └──────────┬───────────┘
                                                         │
                                                         │ SQL
                                                         ▼
                                               ┌──────────────────────┐
                                               │   BASE DE DATOS      │
                                               │   (PostgreSQL/MySQL) │
                                               │                      │
                                               │   - Railway          │
                                               │   - Tabla: notas     │
                                               └──────────────────────┘
```

## 📦 Descripción de Componentes

### 1. Frontend (Next.js en Vercel)

**Responsabilidad**: Interfaz de usuario y experiencia del usuario

**Tecnologías**:
- Next.js 16 con App Router
- React 19 con Server Components
- TailwindCSS 4 para estilos
- Radix UI para componentes accesibles

**Principales Funcionalidades**:
- **Pantalla Principal (`NotesApp`)**: Contenedor principal que gestiona el estado de las notas
- **Lista de Notas (`NotesList`)**: Muestra todas las notas en tarjetas con colores
- **Editor de Notas (`NoteEditor`)**: Permite editar notas existentes
- **Creador de Notas (`NoteCreator`)**: Formulario para crear nuevas notas
- **Gestión de Temas**: Soporte para modo claro y oscuro

**Capas**:
1. **Capa de Presentación**: Componentes React (JSX/TSX)
2. **Capa de Servicios**: Cliente API (`notasService.ts`)
3. **Capa de Estado**: React Hooks (useState, useEffect)

**Comunicación**:
- Consume API REST del backend mediante `fetch`
- Envía/recibe datos en formato JSON
- Maneja errores y muestra notificaciones al usuario

---

### 2. Backend (FastAPI/Django en Render)

**Responsabilidad**: Lógica de negocio y acceso a datos

**Tecnologías**:
- FastAPI o Django REST Framework
- SQLAlchemy o Django ORM
- Pydantic para validación de datos

**Arquitectura de Capas**:
1. **Capa de Rutas/Endpoints**: Definición de endpoints REST
2. **Capa de Servicios**: Lógica de negocio
3. **Capa de Acceso a Datos**: ORM para interactuar con la BD

**Endpoints Principales**:
- `GET /notas/` - Listar todas las notas
- `POST /notas/` - Crear una nueva nota
- `GET /notas/{id}` - Obtener una nota específica
- `PUT /notas/{id}` - Actualizar una nota
- `DELETE /notas/{id}` - Eliminar una nota
- `GET /notas/estado/{estado}` - Filtrar notas por estado

**Características**:
- Validación de datos con Pydantic/Serializers
- Manejo de errores HTTP
- CORS habilitado para comunicación con frontend
- Respuestas en formato JSON

---

### 3. Base de Datos (PostgreSQL/MySQL en Railway)

**Responsabilidad**: Persistencia de datos

**Modelo de Datos**:

#### Tabla: `notas`

| Campo      | Tipo         | Descripción                    | Constraints         |
|------------|--------------|--------------------------------|---------------------|
| id         | INTEGER      | Identificador único            | PRIMARY KEY, AUTO   |
| titulo     | VARCHAR(200) | Título de la nota              | NOT NULL            |
| contenido  | TEXT         | Contenido de la nota           | NOT NULL            |
| fecha      | DATETIME     | Fecha de creación/modificación | NOT NULL            |
| estado     | BOOLEAN      | Estado activo/inactivo         | DEFAULT TRUE        |

**Relaciones**:
- Actualmente es una tabla simple sin relaciones
- Diseñado para escalar con usuarios y categorías en el futuro

**Índices**:
- PRIMARY KEY en `id`
- Índice en `fecha` para ordenamiento rápido
- Índice en `estado` para filtrado

---

## 🔄 Flujo de Datos

### Crear una Nota

```
1. Usuario completa formulario en NoteCreator
   ↓
2. Frontend valida datos localmente
   ↓
3. notasService.crearNota() envía POST a /notas/
   ↓
4. Backend valida datos con Pydantic/Serializer
   ↓
5. ORM inserta registro en tabla 'notas'
   ↓
6. Base de datos retorna el ID generado
   ↓
7. Backend retorna objeto nota completo (201 Created)
   ↓
8. Frontend actualiza lista de notas
   ↓
9. Usuario ve la nueva nota con notificación de éxito
```

### Listar Notas

```
1. Usuario carga la aplicación
   ↓
2. useEffect ejecuta loadNotes()
   ↓
3. notasService.listarNotas() envía GET a /notas/
   ↓
4. Backend consulta ORM para obtener todas las notas
   ↓
5. Base de datos retorna registros
   ↓
6. Backend serializa y retorna array JSON (200 OK)
   ↓
7. Frontend ordena por fecha descendente
   ↓
8. Usuario ve la lista de notas renderizada
```

### Actualizar una Nota

```
1. Usuario edita nota en NoteEditor
   ↓
2. Frontend envía PUT a /notas/{id}
   ↓
3. Backend valida ID y datos
   ↓
4. ORM actualiza registro en BD
   ↓
5. Backend retorna nota actualizada (200 OK)
   ↓
6. Frontend actualiza estado local
   ↓
7. Usuario ve cambios reflejados inmediatamente
```

### Eliminar una Nota

```
1. Usuario confirma eliminación
   ↓
2. Frontend envía DELETE a /notas/{id}
   ↓
3. Backend valida existencia de la nota
   ↓
4. ORM elimina registro de BD
   ↓
5. Backend retorna 204 No Content
   ↓
6. Frontend elimina nota del estado local
   ↓
7. Usuario ve la nota removida de la lista
```

---

## 🔒 Seguridad

### Medidas Implementadas

1. **HTTPS**: Todas las comunicaciones encriptadas
2. **CORS**: Configurado para permitir solo el dominio del frontend
3. **Validación de Datos**: Tanto en frontend como backend
4. **Sanitización**: Prevención de XSS en inputs de usuario
5. **Rate Limiting**: (Recomendado implementar) Para prevenir abuso

### Mejoras Futuras

- Autenticación JWT
- Autorización basada en roles
- Validación de tokens CSRF
- Encriptación de datos sensibles

---

## ⚡ Rendimiento

### Optimizaciones Frontend

- **Server Components**: Renderizado del lado del servidor con React 19
- **Code Splitting**: Carga bajo demanda con Next.js
- **Image Optimization**: Next.js Image Component
- **Caching**: Cache de datos en cliente

### Optimizaciones Backend

- **Connection Pooling**: Reutilización de conexiones a BD
- **Índices de BD**: Consultas optimizadas
- **Paginación**: (Futuro) Para grandes volúmenes de datos

---

## 📊 Escalabilidad

### Capacidad Actual

- **Frontend**: Auto-scaling en Vercel
- **Backend**: Escalado vertical en Render
- **Base de Datos**: Recursos limitados en Railway free tier

### Estrategias de Escalado Futuro

1. **Horizontal Scaling**: Múltiples instancias del backend
2. **CDN**: Distribución de assets estáticos
3. **Caching Layer**: Redis para datos frecuentes
4. **Database Replication**: Read replicas para consultas
5. **Microservicios**: Separar funcionalidades en servicios independientes

---

## 🚀 Despliegue

### Pipeline de Despliegue

```
┌─────────────┐
│   Código    │
│   GitHub    │
└──────┬──────┘
       │
       │ git push
       ▼
┌──────────────────────┐         ┌──────────────────────┐
│   Vercel (Frontend)  │         │   Render (Backend)   │
│   - Auto deploy      │         │   - Auto deploy      │
│   - Build Next.js    │         │   - Run migrations   │
│   - Optimize assets  │         │   - Start server     │
└──────────────────────┘         └──────────┬───────────┘
                                            │
                                            │ Connect
                                            ▼
                                 ┌──────────────────────┐
                                 │   Railway (DB)       │
                                 │   - Persistent       │
                                 │   - Backups          │
                                 └──────────────────────┘
```

### Ambientes

1. **Desarrollo**: Local (localhost:3000)
2. **Producción**: Vercel + Render + Railway

---

## 📈 Monitoreo y Logs

### Herramientas Actuales

- **Vercel Analytics**: Métricas de rendimiento del frontend
- **Render Logs**: Logs del backend
- **Railway Metrics**: Monitoreo de base de datos

### Recomendaciones Futuras

- Sentry para error tracking
- LogRocket para session replay
- Datadog para métricas unificadas

---

## 🔄 Versionado

- **Frontend**: Semantic Versioning (package.json)
- **Backend**: Versionado de API (v1, v2)
- **Base de Datos**: Migraciones versionadas

---

## 📞 Contacto

Para más información sobre la arquitectura, contactar al equipo de desarrollo.

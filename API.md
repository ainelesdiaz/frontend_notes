# API Documentation - Frontend Notes Backend

## 📡 Información General

**Base URL**: `https://apinotas-iosi.onrender.com`

**Protocolo**: HTTPS

**Formato de Datos**: JSON

**Autenticación**: Ninguna (público por ahora)

---

## 🔗 Endpoints Disponibles

### 1. Listar Todas las Notas

Obtiene todas las notas almacenadas en la base de datos.

**Endpoint**: `GET /notas/`

**Método HTTP**: `GET`

**Headers**:
```http
Content-Type: application/json
```

**Query Parameters**: Ninguno

**Body**: No requiere

**Respuesta Exitosa**: `200 OK`

```json
[
  {
    "id": 1,
    "titulo": "Mi primera nota",
    "contenido": "Este es el contenido de mi primera nota",
    "fecha": "2024-12-10T10:30:00",
    "estado": true
  },
  {
    "id": 2,
    "titulo": "Recordatorio",
    "contenido": "Comprar leche en el supermercado",
    "fecha": "2024-12-10T11:45:00",
    "estado": true
  }
]
```

**Respuesta de Error**: `500 Internal Server Error`

```json
{
  "detail": "Error al obtener las notas"
}
```

**Códigos de Estado**:
- `200` - OK: Notas obtenidas exitosamente
- `500` - Internal Server Error: Error del servidor

---

### 2. Crear una Nueva Nota

Crea una nueva nota en la base de datos.

**Endpoint**: `POST /notas/`

**Método HTTP**: `POST`

**Headers**:
```http
Content-Type: application/json
```

**Body** (requerido):

```json
{
  "titulo": "Título de la nota",
  "contenido": "Contenido de la nota",
  "fecha": "2024-12-10T10:30:00",
  "estado": true
}
```

**Campos del Body**:

| Campo      | Tipo     | Requerido | Descripción                           |
|------------|----------|-----------|---------------------------------------|
| titulo     | string   | ✅ Sí     | Título de la nota (máx. 200 caracteres) |
| contenido  | string   | ✅ Sí     | Contenido de la nota                  |
| fecha      | string   | ✅ Sí     | Fecha en formato ISO 8601             |
| estado     | boolean  | ❌ No     | Estado de la nota (default: true)     |

**Respuesta Exitosa**: `201 Created`

```json
{
  "id": 3,
  "titulo": "Título de la nota",
  "contenido": "Contenido de la nota",
  "fecha": "2024-12-10T10:30:00",
  "estado": true
}
```

**Respuesta de Error**: `400 Bad Request`

```json
{
  "detail": [
    {
      "loc": ["body", "titulo"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

**Códigos de Estado**:
- `201` - Created: Nota creada exitosamente
- `400` - Bad Request: Datos inválidos o faltantes
- `422` - Unprocessable Entity: Error de validación
- `500` - Internal Server Error: Error del servidor

---

### 3. Obtener una Nota Específica

Obtiene una nota por su ID.

**Endpoint**: `GET /notas/{id}`

**Método HTTP**: `GET`

**Headers**:
```http
Content-Type: application/json
```

**Path Parameters**:

| Parámetro | Tipo    | Descripción              |
|-----------|---------|--------------------------|
| id        | integer | ID único de la nota      |

**Body**: No requiere

**Ejemplo de Request**:
```http
GET /notas/1
```

**Respuesta Exitosa**: `200 OK`

```json
{
  "id": 1,
  "titulo": "Mi primera nota",
  "contenido": "Este es el contenido de mi primera nota",
  "fecha": "2024-12-10T10:30:00",
  "estado": true
}
```

**Respuesta de Error**: `404 Not Found`

```json
{
  "detail": "Nota no encontrada"
}
```

**Códigos de Estado**:
- `200` - OK: Nota obtenida exitosamente
- `404` - Not Found: Nota no existe
- `500` - Internal Server Error: Error del servidor

---

### 4. Actualizar una Nota

Actualiza una nota existente (actualización parcial permitida).

**Endpoint**: `PUT /notas/{id}`

**Método HTTP**: `PUT`

**Headers**:
```http
Content-Type: application/json
```

**Path Parameters**:

| Parámetro | Tipo    | Descripción              |
|-----------|---------|--------------------------|
| id        | integer | ID único de la nota      |

**Body** (todos los campos son opcionales):

```json
{
  "titulo": "Nuevo título",
  "contenido": "Nuevo contenido",
  "fecha": "2024-12-10T12:00:00",
  "estado": false
}
```

**Campos del Body**:

| Campo      | Tipo     | Requerido | Descripción                           |
|------------|----------|-----------|---------------------------------------|
| titulo     | string   | ❌ No     | Nuevo título de la nota               |
| contenido  | string   | ❌ No     | Nuevo contenido de la nota            |
| fecha      | string   | ❌ No     | Nueva fecha en formato ISO 8601       |
| estado     | boolean  | ❌ No     | Nuevo estado de la nota               |

**Nota**: Puedes enviar solo los campos que deseas actualizar.

**Ejemplo de Request** (actualización parcial):
```http
PUT /notas/1
Content-Type: application/json

{
  "titulo": "Título actualizado"
}
```

**Respuesta Exitosa**: `200 OK`

```json
{
  "id": 1,
  "titulo": "Título actualizado",
  "contenido": "Este es el contenido de mi primera nota",
  "fecha": "2024-12-10T10:30:00",
  "estado": true
}
```

**Respuesta de Error**: `404 Not Found`

```json
{
  "detail": "Nota no encontrada"
}
```

**Códigos de Estado**:
- `200` - OK: Nota actualizada exitosamente
- `400` - Bad Request: Datos inválidos
- `404` - Not Found: Nota no existe
- `422` - Unprocessable Entity: Error de validación
- `500` - Internal Server Error: Error del servidor

---

### 5. Eliminar una Nota

Elimina una nota de la base de datos.

**Endpoint**: `DELETE /notas/{id}`

**Método HTTP**: `DELETE`

**Headers**:
```http
Content-Type: application/json
```

**Path Parameters**:

| Parámetro | Tipo    | Descripción              |
|-----------|---------|--------------------------|
| id        | integer | ID único de la nota      |

**Body**: No requiere

**Ejemplo de Request**:
```http
DELETE /notas/1
```

**Respuesta Exitosa**: `204 No Content`

```
(Sin contenido en el body)
```

**Respuesta de Error**: `404 Not Found`

```json
{
  "detail": "Nota no encontrada"
}
```

**Códigos de Estado**:
- `204` - No Content: Nota eliminada exitosamente
- `404` - Not Found: Nota no existe
- `500` - Internal Server Error: Error del servidor

---

### 6. Filtrar Notas por Estado

Obtiene notas filtradas por su estado (activo/inactivo).

**Endpoint**: `GET /notas/estado/{estado}`

**Método HTTP**: `GET`

**Headers**:
```http
Content-Type: application/json
```

**Path Parameters**:

| Parámetro | Tipo    | Descripción                    |
|-----------|---------|--------------------------------|
| estado    | boolean | true (activas) o false (inactivas) |

**Body**: No requiere

**Ejemplo de Request**:
```http
GET /notas/estado/true
```

**Respuesta Exitosa**: `200 OK`

```json
[
  {
    "id": 1,
    "titulo": "Nota activa 1",
    "contenido": "Contenido de la nota activa",
    "fecha": "2024-12-10T10:30:00",
    "estado": true
  },
  {
    "id": 3,
    "titulo": "Nota activa 2",
    "contenido": "Contenido de otra nota activa",
    "fecha": "2024-12-10T11:00:00",
    "estado": true
  }
]
```

**Respuesta de Error**: `500 Internal Server Error`

```json
{
  "detail": "Error al filtrar las notas"
}
```

**Códigos de Estado**:
- `200` - OK: Notas filtradas exitosamente
- `400` - Bad Request: Parámetro de estado inválido
- `500` - Internal Server Error: Error del servidor

---

## 📋 Modelos de Datos

### Modelo: Nota

```typescript
interface Nota {
  id?: number          // ID único (generado automáticamente)
  titulo: string       // Título de la nota (máx. 200 caracteres)
  contenido: string    // Contenido de la nota (texto largo)
  fecha: string        // Fecha en formato ISO 8601 (YYYY-MM-DDTHH:mm:ss)
  estado?: boolean     // Estado de la nota (true = activa, false = inactiva)
}
```

### Modelo: NotaCreate (para crear notas)

```typescript
interface NotaCreate {
  titulo: string       // Requerido
  contenido: string    // Requerido
  fecha: string        // Requerido (ISO 8601)
  estado?: boolean     // Opcional (default: true)
}
```

### Modelo: NotaUpdate (para actualizar notas)

```typescript
interface NotaUpdate {
  titulo?: string | null      // Opcional
  contenido?: string | null   // Opcional
  fecha?: string | null       // Opcional (ISO 8601)
  estado?: boolean | null     // Opcional
}
```

---

## 🔄 Ejemplos de Uso con Fetch (JavaScript)

### Listar Todas las Notas

```javascript
async function listarNotas() {
  const response = await fetch('https://apinotas-iosi.onrender.com/notas/');
  
  if (!response.ok) {
    throw new Error('Error al obtener las notas');
  }
  
  const notas = await response.json();
  return notas;
}
```

### Crear una Nueva Nota

```javascript
async function crearNota(titulo, contenido) {
  const nuevaNota = {
    titulo: titulo,
    contenido: contenido,
    fecha: new Date().toISOString(),
    estado: true
  };
  
  const response = await fetch('https://apinotas-iosi.onrender.com/notas/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nuevaNota),
  });
  
  if (!response.ok) {
    throw new Error('Error al crear la nota');
  }
  
  const nota = await response.json();
  return nota;
}
```

### Obtener una Nota por ID

```javascript
async function obtenerNota(id) {
  const response = await fetch(`https://apinotas-iosi.onrender.com/notas/${id}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Nota no encontrada');
    }
    throw new Error('Error al obtener la nota');
  }
  
  const nota = await response.json();
  return nota;
}
```

### Actualizar una Nota

```javascript
async function actualizarNota(id, cambios) {
  const response = await fetch(`https://apinotas-iosi.onrender.com/notas/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cambios),
  });
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Nota no encontrada');
    }
    throw new Error('Error al actualizar la nota');
  }
  
  const nota = await response.json();
  return nota;
}

// Uso
actualizarNota(1, { titulo: "Nuevo título" });
```

### Eliminar una Nota

```javascript
async function eliminarNota(id) {
  const response = await fetch(`https://apinotas-iosi.onrender.com/notas/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Nota no encontrada');
    }
    throw new Error('Error al eliminar la nota');
  }
  
  // La respuesta es 204 No Content, no hay body
  return true;
}
```

### Filtrar Notas por Estado

```javascript
async function filtrarNotasPorEstado(activo) {
  const response = await fetch(`https://apinotas-iosi.onrender.com/notas/estado/${activo}`);
  
  if (!response.ok) {
    throw new Error('Error al filtrar las notas');
  }
  
  const notas = await response.json();
  return notas;
}

// Uso
const notasActivas = await filtrarNotasPorEstado(true);
const notasInactivas = await filtrarNotasPorEstado(false);
```

---

## 🔄 Ejemplos con cURL

### Listar Todas las Notas

```bash
curl -X GET https://apinotas-iosi.onrender.com/notas/
```

### Crear una Nueva Nota

```bash
curl -X POST https://apinotas-iosi.onrender.com/notas/ \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Mi nota desde cURL",
    "contenido": "Este es el contenido de mi nota",
    "fecha": "2024-12-10T10:30:00",
    "estado": true
  }'
```

### Obtener una Nota Específica

```bash
curl -X GET https://apinotas-iosi.onrender.com/notas/1
```

### Actualizar una Nota

```bash
curl -X PUT https://apinotas-iosi.onrender.com/notas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Título actualizado"
  }'
```

### Eliminar una Nota

```bash
curl -X DELETE https://apinotas-iosi.onrender.com/notas/1
```

### Filtrar por Estado

```bash
curl -X GET https://apinotas-iosi.onrender.com/notas/estado/true
```

---

## 📊 Códigos de Estado HTTP

| Código | Significado          | Descripción                                    |
|--------|----------------------|------------------------------------------------|
| 200    | OK                   | Solicitud exitosa, datos retornados           |
| 201    | Created              | Recurso creado exitosamente                   |
| 204    | No Content           | Solicitud exitosa, sin contenido en respuesta |
| 400    | Bad Request          | Datos inválidos o faltantes                   |
| 404    | Not Found            | Recurso no encontrado                         |
| 422    | Unprocessable Entity | Error de validación de datos                  |
| 500    | Internal Server Error| Error del servidor                            |

---

## ⚠️ Manejo de Errores

### Estructura de Errores

Todos los errores siguen el siguiente formato:

```json
{
  "detail": "Descripción del error"
}
```

O para errores de validación:

```json
{
  "detail": [
    {
      "loc": ["body", "campo"],
      "msg": "Mensaje de error",
      "type": "tipo_de_error"
    }
  ]
}
```

### Mejores Prácticas

1. Siempre verifica `response.ok` antes de procesar la respuesta
2. Maneja diferentes códigos de estado apropiadamente
3. Muestra mensajes de error amigables al usuario
4. Implementa reintentos para errores 5xx
5. Valida datos antes de enviarlos al servidor

---

## 🔒 CORS

El servidor tiene CORS habilitado para aceptar solicitudes desde:
- `https://frontend-notes-aineles.vercel.app`
- `http://localhost:3000` (desarrollo)

---

## 📝 Notas Adicionales

### Formato de Fechas

Todas las fechas deben estar en formato ISO 8601:
```
YYYY-MM-DDTHH:mm:ss
Ejemplo: 2024-12-10T10:30:00
```

En JavaScript, puedes obtener este formato con:
```javascript
new Date().toISOString()
```

### Límites

- **Título**: Máximo 200 caracteres
- **Contenido**: Sin límite específico (depende de la configuración del servidor)
- **Rate Limiting**: Por implementar

### Versionado

La API actualmente no tiene versionado. Futuras versiones pueden incluir:
- `/api/v1/notas/`
- `/api/v2/notas/`

---

## 🔮 Funcionalidades Futuras

1. **Autenticación**: Login con JWT
2. **Paginación**: `GET /notas/?page=1&limit=10`
3. **Búsqueda**: `GET /notas/buscar?q=termino`
4. **Categorías**: Clasificación de notas
5. **Compartir**: Endpoints para compartir notas
6. **Archivos adjuntos**: Subida de imágenes/archivos

---

## 📞 Soporte

Para reportar problemas con la API o sugerir mejoras, contactar al equipo de desarrollo.

**Repositorio Backend**: (Agregar link cuando esté disponible)

**Documentación Swagger**: `https://apinotas-iosi.onrender.com/docs`

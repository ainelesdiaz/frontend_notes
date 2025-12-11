const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://apinotasdb-production.up.railway.app'

export interface Nota {
  id?: number
  titulo: string
  contenido: string
  fecha?: string
  estado?: boolean
}

export interface NotaCreate {
  titulo: string
  contenido: string
  fecha: string
  estado?: boolean
}

export interface NotaUpdate {
  titulo?: string | null
  contenido?: string | null
  fecha?: string | null
  estado?: boolean | null
}

// Obtener todas las notas
export async function listarNotas(): Promise<Nota[]> {
  const response = await fetch(`${API_BASE_URL}/notas/`)
  if (!response.ok) {
    throw new Error('Error al obtener las notas')
  }
  return response.json()
}

// Crear una nueva nota
export async function crearNota(nota: NotaCreate): Promise<Nota> {
  const response = await fetch(`${API_BASE_URL}/notas/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nota),
  })
  if (!response.ok) {
    throw new Error('Error al crear la nota')
  }
  return response.json()
}

// Obtener una nota por ID
export async function obtenerNota(notaId: number): Promise<Nota> {
  const response = await fetch(`${API_BASE_URL}/notas/${notaId}`)
  if (!response.ok) {
    throw new Error('Error al obtener la nota')
  }
  return response.json()
}

// Actualizar una nota
export async function actualizarNota(notaId: number, nota: NotaUpdate): Promise<Nota> {
  const response = await fetch(`${API_BASE_URL}/notas/${notaId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nota),
  })
  if (!response.ok) {
    throw new Error('Error al actualizar la nota')
  }
  return response.json()
}

// Eliminar una nota
export async function eliminarNota(notaId: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/notas/${notaId}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Error al eliminar la nota')
  }
}

// Filtrar notas por estado
export async function filtrarNotasPorEstado(estado: boolean): Promise<Nota[]> {
  const response = await fetch(`${API_BASE_URL}/notas/estado/${estado}`)
  if (!response.ok) {
    throw new Error('Error al filtrar las notas')
  }
  return response.json()
}

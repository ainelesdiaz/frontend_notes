"use client"

import { useState, useEffect } from "react"
import { NotesList } from "./notes-list"
import { NoteEditor } from "./note-editor"
import { NoteCreator } from "./note-creator"
import { Button } from "./ui/button"
import { Plus, StickyNote, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import * as notasService from "@/services/notasService"

export function NotesApp() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Cargar notas al iniciar
  useEffect(() => {
    loadNotes()
  }, [])

  const loadNotes = async () => {
    try {
      setIsLoading(true)
      const notasData = await notasService.listarNotas()
      // Ordenar por fecha más reciente primero
      const notasOrdenadas = notasData.sort((a, b) => {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
      })
      setNotes(notasOrdenadas)
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudieron cargar las notas",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateNote = () => {
    setSelectedNote(null)
    setIsCreating(true)
  }

  const handleSaveNewNote = async (noteData) => {
    try {
      const newNote = await notasService.crearNota({
        titulo: noteData.titulo,
        contenido: noteData.contenido,
        estado: true,
      })
      setNotes([newNote, ...notes])
      setIsCreating(false)
      setSelectedNote(newNote)
    } catch (error) {
      throw error
    }
  }

  const handleUpdateNote = async (noteId, updatedData) => {
    try {
      const updatedNote = await notasService.actualizarNota(noteId, updatedData)
      setNotes(notes.map((note) => (note.id === noteId ? updatedNote : note)))
      setSelectedNote(updatedNote)
    } catch (error) {
      throw error
    }
  }

  const handleDeleteNote = async (noteId) => {
    try {
      await notasService.eliminarNota(noteId)
      setNotes(notes.filter((note) => note.id !== noteId))
      if (selectedNote?.id === noteId) {
        setSelectedNote(null)
        setIsCreating(false)
      }
      toast({
        title: "Nota eliminada",
        description: "La nota se ha eliminado exitosamente",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo eliminar la nota",
        variant: "destructive",
      })
    }
  }

  const handleSelectNote = (note) => {
    setSelectedNote(note)
    setIsCreating(false)
  }

  const handleCloseEditor = () => {
    setSelectedNote(null)
    setIsCreating(false)
  }

  const handleRefresh = () => {
    loadNotes()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <StickyNote className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance">Mis Notas</h1>
                <p className="text-sm text-muted-foreground">
                  {notes.length} {notes.length === 1 ? "nota" : "notas"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleRefresh}
                variant="outline"
                size="lg"
                className="gap-2"
                disabled={isLoading}
              >
                <RefreshCw className={`h-5 w-5 ${isLoading ? "animate-spin" : ""}`} />
                Actualizar
              </Button>
              <Button onClick={handleCreateNote} size="lg" className="gap-2">
                <Plus className="h-5 w-5" />
                Nueva Nota
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <RefreshCw className="h-12 w-12 animate-spin text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Cargando notas...</p>
          </div>
        ) : notes.length === 0 && !isCreating ? (
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted mb-6">
              <StickyNote className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No hay notas aún</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Comienza a organizar tus ideas creando tu primera nota
            </p>
            <Button onClick={handleCreateNote} size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              Crear Primera Nota
            </Button>
          </div>
        ) : notes.length === 0 && isCreating ? (
          <div className="max-w-3xl mx-auto">
            <NoteCreator onSave={handleSaveNewNote} onClose={handleCloseEditor} />
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            {/* Lista de Notas */}
            <aside className="space-y-4">
              <NotesList
                notes={notes}
                selectedNote={selectedNote}
                onSelectNote={handleSelectNote}
                onDeleteNote={handleDeleteNote}
              />
            </aside>

            {/* Editor/Creator */}
            <section>
              {isCreating ? (
                <NoteCreator onSave={handleSaveNewNote} onClose={handleCloseEditor} />
              ) : selectedNote ? (
                <NoteEditor
                  note={selectedNote}
                  onUpdateNote={handleUpdateNote}
                  onClose={handleCloseEditor}
                />
              ) : (
                <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-border">
                  <div className="text-center">
                    <StickyNote className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Selecciona una nota para editarla o crea una nueva
                    </p>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

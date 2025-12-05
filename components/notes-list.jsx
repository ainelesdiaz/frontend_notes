"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Trash2, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function NotesList({ notes, selectedNote, onSelectNote, onDeleteNote }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "Hace un momento"
    if (diffMins < 60) return `Hace ${diffMins} min`
    if (diffHours < 24) return `Hace ${diffHours}h`
    if (diffDays === 1) return "Ayer"
    if (diffDays < 7) return `Hace ${diffDays} días`

    return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" })
  }

  const NOTE_COLORS = [
    "bg-yellow-100 dark:bg-yellow-900/30",
    "bg-green-100 dark:bg-green-900/30",
    "bg-blue-100 dark:bg-blue-900/30",
    "bg-pink-100 dark:bg-pink-900/30",
    "bg-purple-100 dark:bg-purple-900/30",
    "bg-orange-100 dark:bg-orange-900/30",
  ]

  const getColorForNote = (noteId) => {
    return NOTE_COLORS[noteId % NOTE_COLORS.length]
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">Todas las notas</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {notes.map((note) => (
          <Card
            key={note.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden transition-all hover:shadow-lg",
              getColorForNote(note.id),
              selectedNote?.id === note.id && "ring-2 ring-primary ring-offset-2",
            )}
            onClick={() => onSelectNote(note)}
          >
            <div className="p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="flex-1 text-lg font-semibold text-card-foreground line-clamp-1">
                  {note.titulo || "Sin título"}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDeleteNote(note.id)
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Eliminar nota</span>
                </Button>
              </div>
              <p className="mb-3 text-sm text-card-foreground/80 line-clamp-3">
                {note.contenido || "Sin contenido"}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-card-foreground/60">
                <Clock className="h-3.5 w-3.5" />
                {formatDate(note.fecha)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

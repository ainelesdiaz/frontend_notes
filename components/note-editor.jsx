"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { X, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function NoteEditor({ note, onUpdateNote, onClose }) {
  const [titulo, setTitulo] = useState(note?.titulo || "")
  const [contenido, setContenido] = useState(note?.contenido || "")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setTitulo(note?.titulo || "")
    setContenido(note?.contenido || "")
  }, [note])

  const handleSave = async () => {
    if (note) {
      setIsLoading(true)
      try {
        await onUpdateNote(note.id, {
          titulo,
          contenido,
          estado: note.estado,
        })
        toast({
          title: "Nota actualizada",
          description: "Los cambios se han guardado exitosamente",
        })
      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudieron guardar los cambios",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  if (!note) return null

  return (
    <Card className="shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <h2 className="text-lg font-semibold">Editar Nota</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="titulo" className="text-sm font-medium">
            Título
          </label>
          <Input
            id="titulo"
            placeholder="Escribe un título..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            onBlur={handleSave}
            className="text-lg font-semibold"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contenido" className="text-sm font-medium">
            Contenido
          </label>
          <Textarea
            id="contenido"
            placeholder="Escribe tu nota aquí..."
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            onBlur={handleSave}
            className="min-h-[400px] resize-none"
          />
        </div>
        <Button onClick={handleSave} className="w-full gap-2" disabled={isLoading}>
          <Save className="h-4 w-4" />
          {isLoading ? "Guardando..." : "Guardar Cambios"}
        </Button>
      </CardContent>
    </Card>
  )
}

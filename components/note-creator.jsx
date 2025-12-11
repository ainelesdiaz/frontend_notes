"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { X, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function NoteCreator({ onSave, onClose }) {
  const [titulo, setTitulo] = useState("")
  const [contenido, setContenido] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSave = async () => {
    setIsLoading(true)
    try {
      await onSave({ 
        titulo: titulo.trim() || "Sin título", 
        contenido: contenido.trim() || "", 
        fecha: new Date().toISOString(),
        estado: true 
      })
      setTitulo("")
      setContenido("")
      toast({
        title: "Nota creada",
        description: "La nota se ha creado exitosamente",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo crear la nota",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="shadow-xl border-2 border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <h2 className="text-lg font-semibold">Crear Nueva Nota</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="new-titulo" className="text-sm font-medium">
            Título
          </label>
          <Input
            id="new-titulo"
            placeholder="Escribe un título..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="text-lg font-semibold"
            autoFocus
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="new-contenido" className="text-sm font-medium">
            Contenido
          </label>
          <Textarea
            id="new-contenido"
            placeholder="Escribe tu nota aquí..."
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="min-h-[400px] resize-none"
          />
        </div>
        <Button 
          onClick={handleSave} 
          className="w-full gap-2" 
          disabled={isLoading}
        >
          <Plus className="h-4 w-4" />
          {isLoading ? "Creando..." : "Crear Nota"}
        </Button>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Trash2, Plus, AlertTriangle, X } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from 'sonner'

interface Rubric {
  criterion: string
  description: string
  maxScore: number
}

interface RubricTemplateModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (template: { name: string; rubrics: Rubric[] }) => void
  initialData?: { id: string; name: string; rubrics: Rubric[] }
}

export function RubricTemplateModal({ isOpen, onClose, onSave, initialData }: RubricTemplateModalProps) {
  const [isSaving, setIsSaving] = useState(false)
  const [name, setName] = useState(initialData?.name || "")
  const [rubrics, setRubrics] = useState<Rubric[]>(
    initialData?.rubrics || [{ criterion: "", description: "", maxScore: 0 }],
  )
  const [inputValues, setInputValues] = useState<string[]>(
    initialData?.rubrics.map(r => String(r.maxScore)) || ["0"]
  )
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setRubrics(initialData.rubrics)
      setInputValues(initialData.rubrics.map(r => String(r.maxScore)))
    } else {
      setName("")
      setRubrics([{ criterion: "", description: "", maxScore: 0 }])
      setInputValues(["0"])
    }
  }, [initialData, isOpen])

  const handleAddRubric = () => {
    setRubrics([...rubrics, { criterion: "", description: "", maxScore: 0 }])
    setInputValues([...inputValues, "0"])
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: "smooth",
        })
      }
    }
  }, [rubrics.length])

  const handleRubricChange = (index: number, field: keyof Rubric, value: string | number) => {
    const updatedRubrics = [...rubrics]
    updatedRubrics[index][field] = value as never
    setRubrics(updatedRubrics)
  }

  const handleMaxScoreChange = (index: number, value: string) => {
    const updatedInputValues = [...inputValues]
    updatedInputValues[index] = value
    setInputValues(updatedInputValues)
  }

  const handleMaxScoreBlur = (index: number) => {
    const value = inputValues[index]
    const parsedValue = value === "" ? 0 : Number.parseInt(value) || 0
    handleRubricChange(index, "maxScore", parsedValue)
    setInputValues(prev => {
      const updated = [...prev]
      updated[index] = String(parsedValue)
      return updated
    })
  }

  const handleRemoveRubric = (index: number) => {
    setRubrics(rubrics.filter((_, i) => i !== index))
    setInputValues(inputValues.filter((_, i) => i !== index))
  }

  const handleSave = async () => {
    if (name && rubrics.length > 0 && rubrics.every((r) => r.criterion && r.maxScore > 0)) {
      setIsSaving(true)
      try {
        await onSave({ name, rubrics })
      } catch (error) {
        toast.error("Failed to save schema. Please try again.",{
          description: error instanceof Error ? error.message : String(error),
        })
      } finally {
        setIsSaving(false)
      }
    } else {
      toast.error("Please fill in all fields correctly.")
    }
  }

  const isValid = name && rubrics.length > 0 && rubrics.every((r) => r.criterion && r.maxScore > 0)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[750px] max-h-[90vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {initialData ? "Edit Marking Schema" : "Create New Marking Schema"}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>

        <div className="px-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="schema-name" className="text-base font-medium">
              Schema Name
            </Label>
            <Input
              id="schema-name"
              placeholder="Marking Schema Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <Separator className="mx-6" />

        <div className="px-6 py-2 sticky top-[73px] z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between py-2">
            <h3 className="text-lg font-medium">Criteria</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleAddRubric}
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Criterion
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add a new criterion to your marking schema</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <ScrollArea className="max-h-[40vh] px-6 py-2" ref={scrollAreaRef}>
          <div className="space-y-4">
            {rubrics.length === 0 && (
              <div className="flex items-center justify-center p-8 border-2 border-dashed rounded-lg">
                <div className="text-center">
                  <AlertTriangle className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">No criteria added yet</p>
                  <Button onClick={handleAddRubric} variant="outline" size="sm" className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Criterion
                  </Button>
                </div>
              </div>
            )}

            {rubrics.map((rubric, index) => (
              <Card
                key={index}
                className="relative transition-all duration-200 transform hover:scale-[1.01] overflow-hidden border m-1 mt-2"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-background">
                      Criterion {index + 1}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveRubric(index)}
                      className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`criterion-${index}`} className="text-sm font-medium">
                      Title
                    </Label>
                    <Input
                      id={`criterion-${index}`}
                      placeholder="Criterion"
                      value={rubric.criterion}
                      onChange={(e) => handleRubricChange(index, "criterion", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`description-${index}`} className="text-sm font-medium">
                      Description
                    </Label>
                    <Textarea
                      id={`description-${index}`}
                      placeholder="Description (optional)"
                      value={rubric.description}
                      onChange={(e) => handleRubricChange(index, "description", e.target.value)}
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`score-${index}`} className="text-sm font-medium">
                      Max Score
                    </Label>
                    <Input
                      id={`score-${index}`}
                      type="number"
                      placeholder="Max Score"
                      value={inputValues[index]}
                      onChange={(e) => handleMaxScoreChange(index, e.target.value)}
                      onBlur={() => handleMaxScoreBlur(index)}
                      min="0"
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
        {rubrics.length > 0 && (
          <div className="mt-6 p-4 border rounded-lg bg-muted/20">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Maximum Score:</span>
              <Badge variant="secondary" className="text-base px-3 py-1">
                {rubrics.reduce((total, rubric) => total + (rubric.maxScore || 0), 0)}
              </Badge>
            </div>
          </div>
        )}

        <DialogFooter className="px-6 py-4 border-t">
          <Button variant="outline" onClick={onClose} disabled={isSaving}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className={`${isValid ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700" : "bg-gray-400 text-white cursor-not-allowed dark:bg-muted dark:text-muted-foreground"} text-white`}
            disabled={!isValid || isSaving}
          >
            {isSaving ? "Saving..." : "Save Schema"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
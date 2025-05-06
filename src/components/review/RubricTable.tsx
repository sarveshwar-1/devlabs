"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Plus, AlertTriangle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Rubric {
  criterion: string
  description: string
  maxScore: number
}

interface RubricTableProps {
  rubrics: Rubric[]
  onEdit: (updatedRubrics: Rubric[]) => void
}

export function RubricTable({ rubrics, onEdit }: RubricTableProps) {
  const [editedRubrics, setEditedRubrics] = useState<Rubric[]>(rubrics)

  const handleInputChange = (index: number, field: keyof Rubric, value: string | number) => {
    const updatedRubrics = [...editedRubrics]
    updatedRubrics[index][field] = value as never
    setEditedRubrics(updatedRubrics)
    onEdit(updatedRubrics)
  }

  const handleAddRubric = () => {
    const newRubric = { criterion: "", description: "", maxScore: 0 }
    setEditedRubrics([...editedRubrics, newRubric])
    onEdit([...editedRubrics, newRubric])
  }

  const handleRemoveRubric = (index: number) => {
    const updatedRubrics = editedRubrics.filter((_, i) => i !== index)
    setEditedRubrics(updatedRubrics)
    onEdit(updatedRubrics)
  }

  if (editedRubrics.length === 0) {
    return (
      <div className="p-8 text-center">
        <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No Criteria Added</h3>
        <p className="text-muted-foreground mb-4">Add criteria to your marking scheme to get started</p>
        <Button
          onClick={handleAddRubric}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add First Criterion
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[30%]">Criteria</TableHead>
            <TableHead className="w-[40%]">Description</TableHead>
            <TableHead className="w-[15%]">Marks</TableHead>
            <TableHead className="w-[15%]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {editedRubrics.map((rubric, index) => (
            <TableRow key={index} className="hover:bg-muted/50 transition-colors">
              <TableCell>
                <div className="space-y-1">
                  <Input
                    value={rubric.criterion}
                    onChange={(e) => handleInputChange(index, "criterion", e.target.value)}
                    className="w-full"
                    placeholder="Enter criterion"
                  />
                </div>
              </TableCell>
              <TableCell>
                <Input
                  value={rubric.description}
                  onChange={(e) => handleInputChange(index, "description", e.target.value)}
                  className="w-full"
                  placeholder="Enter description"
                />
              </TableCell>
              <TableCell>
              <Input
                type="number"
                value={rubric.maxScore === 0 ? "0" : rubric.maxScore || ""}
                onChange={(e) => {
                  const value = e.target.value === "" ? 0 : Number.parseInt(e.target.value)
                  handleInputChange(index, "maxScore", value)
                }}
                onFocus={(e) => {
                  if (e.target.value === "0") {
                    e.target.value = ""
                  }
                }}
                min="0"
                className="w-full"
              />
            </TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveRubric(index)}
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Remove this criterion</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-muted/30 font-medium">
          <TableCell colSpan={2} className="text-right">
          </TableCell>
          <TableCell className="pl-4">Total Score: {editedRubrics.reduce((total, rubric) => total + (rubric.maxScore || 0), 0)}</TableCell>
          <TableCell></TableCell>
        </TableRow>
          <TableRow>
            <TableCell colSpan={4} className="text-center p-4">
              <Button
                onClick={handleAddRubric}
                variant="outline"
                size="sm"
                className="w-full border-dashed hover:border-solid transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Criterion
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

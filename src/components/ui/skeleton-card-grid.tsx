import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface SkeletonCardGridProps {
  cards: number
  columns?: number
}

export function SkeletonCardGrid({ cards, columns = 3 }: SkeletonCardGridProps) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-${columns}`}>
      {Array.from({ length: cards }).map((_, i) => (
        <Card key={i} className="overflow-hidden border">
          <CardHeader className="pb-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent className="pb-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mt-2" />
          </CardContent>
          <CardFooter className="flex justify-end pt-0 pb-3">
            <div className="flex gap-1">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

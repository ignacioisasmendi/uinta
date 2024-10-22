'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from 'react'

export function ProjectSkeletonCard() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-4 flex">
        <div className="w-1/3 mr-4">
          <Skeleton className="w-full h-[100px] rounded-md animate-pulse" />
        </div>
        <div className="w-2/3">
          <Skeleton className="h-6 w-3/4 mb-2 animate-pulse" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-full animate-pulse" />
            <Skeleton className="h-4 w-5/6 animate-pulse" />
            <Skeleton className="h-4 w-4/6 animate-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
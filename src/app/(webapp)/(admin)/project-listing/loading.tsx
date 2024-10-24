import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <div className="h-10 w-64 mx-auto mb-8 bg-gray-200 animate-pulse rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(1)].map((_, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardContent className="p-4 flex">
              <div className="w-1/3 mr-4 relative" style={{ height: '100px' }}>
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
              </div>
              <div className="w-2/3 space-y-2">
                <div className="h-7 mb-2 w-3/4 bg-gray-200 animate-pulse rounded" />
                <div className="space-y-1">
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
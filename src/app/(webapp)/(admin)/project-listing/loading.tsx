import { ProjectSkeletonCard } from "@/components/app/skeleton-card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-gray-200 animate-pulse">Proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(1)].map((_, index) => (
            <ProjectSkeletonCard key={index} />
          ))}
        </div>
      </main>
    </div>
  )
}
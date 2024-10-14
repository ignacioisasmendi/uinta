import Sidebar from "@/components/app/sidebar"
import Header from "@/components/app/header"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-col h-screen bg-gray-100">
      <Header/>
      <div className="flex">
        <Sidebar/>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}



import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"



const DashboardLayout = ({children}:
     {children: React.ReactNode}) => {
  return (
    <div className="h-full relative">
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-0 z-80
        bg-black">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
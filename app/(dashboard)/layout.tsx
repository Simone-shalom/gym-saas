import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { checkSubscription } from "@/lib/subscription"



const DashboardLayout = async({children}:
     {children: React.ReactNode}) => {

      const isPro = await checkSubscription()

  return (
    <div className="h-full relative ">
      <div className=" hidden md:block
        bg-black">
        <Sidebar  isPro={isPro}/>
      </div>
      <main className="md:pt-28">
        <Navbar  isPro={isPro}/>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
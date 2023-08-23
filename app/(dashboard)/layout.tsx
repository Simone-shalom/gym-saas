import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { getApiLimitCount } from "@/actions/api-limit"
import { checkSubscription } from "@/lib/subscription"



const DashboardLayout = async({children}:
     {children: React.ReactNode}) => {

      const apiLimitCount = await getApiLimitCount()
      const isPro = await checkSubscription()

  return (
    <div className="h-full relative">
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-0 z-80
        bg-black">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar apiLimitCount={apiLimitCount} isPro={isPro}/>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
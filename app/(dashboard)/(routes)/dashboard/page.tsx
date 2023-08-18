import { UserButton } from "@clerk/nextjs/app-beta"

const DashboardPage = () => {
  return (
    <div>DashboardPage
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default DashboardPage
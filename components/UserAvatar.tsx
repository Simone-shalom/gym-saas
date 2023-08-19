import { useUser } from "@clerk/nextjs"

import { Avatar, AvatarImage } from "./ui/avatar"

export const UserAvatar = () => {

    const {user} =useUser()

  return (
    <Avatar className="w-16 h-16">
        <AvatarImage className="p-1 rounded-full" src={user?.imageUrl}/>
    </Avatar>
  )
}

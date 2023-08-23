
import { cn } from '@/lib/utils';
import  {LucideIcon} from 'lucide-react'

interface HeadingProps {
    title: string;
    desc: string;
    icon: LucideIcon
    iconColor: string
    bgColor: string

}

const Heading = ({title, desc, icon:Icon, iconColor,bgColor }:
     HeadingProps) => {
  return (
    <div className='px-4 lg:px-8 flex items-center justify-center gap-x-6 mb-8'>
      <div className={cn('p-2 w-fit rounded-md', bgColor)}>
        <Icon className={cn('w-10 h-10', iconColor)}/>
      </div>
      <div>
       <h2 className='text-3xl lg:text-4xl font-bold'>
         {title}
       </h2>
       <p className='text-sm text-muted-foreground'>
        {desc}
       </p>
      </div>
     </div>
  )
}

export default Heading
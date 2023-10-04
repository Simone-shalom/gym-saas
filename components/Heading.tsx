


interface HeadingProps {
    title: string;
    desc: string;


}

const Heading = ({title, desc}:
     HeadingProps) => {
  return (
    <div className='px-4 lg:px-8 flex items-center justify-center gap-x-6 mb-8'>
      <div className="text-center">
       <h2 className='text-3xl lg:text-4xl font-bold text-green-500'>
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



const LandingLayout = ({children}:
     {children: React.ReactNode}) => {
  return (
    <main className="h-full bg-black overflow-y-auto">
        <div className="mx-auto h-full">
            {children}
        </div>
    </main>

  )
}

export default LandingLayout
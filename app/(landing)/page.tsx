import LandingCategories from "@/components/LandingCategories"
import LandingHero from "@/components/LandingHero"
import LandingNavbar from "@/components/LandingNavbar"


const LandingPage = () => {
  return (
    <div className='h-full text-white'>
      <LandingNavbar />
      <LandingHero />
      <LandingCategories />
    </div>
  )
}

export default LandingPage
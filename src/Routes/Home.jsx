import Navbar from '../components/navbar'
import HeroComponent from "../components/hero"
import BannerComponent from "../components/banner"
import AdventureComponent from "../components/adventure"

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroComponent />
      <BannerComponent />
      <AdventureComponent />
    </main>
  )
}

export default Home
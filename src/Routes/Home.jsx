import Navbar from '../components/navbar'
import HeroComponent from "../components/hero"
import BannerComponent from "../components/banner"
import AdventureComponent from "../components/adventure"
import NFTComponent from "../components/nft"

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroComponent />
      <BannerComponent />
      <AdventureComponent />
      <NFTComponent />
    </main>
  )
}

export default Home
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import styles from './hero.module.css'

const HeroComponent = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.title}>
        <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

        <form action="">
          <input type="text" placeholder="Search for location" />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className={styles.photos}>
        <img src={image1} alt="hero1" />
        <img src={image2} alt="hero2" />
        <img src={image3} alt="hero3" />
        <img src={image4} alt="hero4" />
      </div>
    </section>
  )
}

export default HeroComponent
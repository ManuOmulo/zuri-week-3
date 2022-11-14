import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import styles from './banner.module.css'

const BannerComponent = () => {
  return (
    <section className={styles.bannerContainer}>
      <img src={banner1} alt="banner1" />
      <img src={banner2} alt="banner2" />
      <img src={banner3} alt="banner3" />
    </section>
  )
}

export default BannerComponent
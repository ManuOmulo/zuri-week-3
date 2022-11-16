import logo from '../assets/footer/Vector.png'
import logo2 from '../assets/footer/Vector-1.png'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

import styles from './footer.module.css'

const FooterComponent = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.linksContainer}>
            <div className={styles.logo}>
              <div className={styles.logo1}>
                <img src={logo2} alt="logo" />
              </div>
              <div className={styles.logo2}>
                <img src={logo} alt="logo" />
              </div>
            </div>

            <ul className={styles.links}>
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaTwitter /></li>
            </ul>
          </div>

          <div className={styles.list}>
            <h3>Community</h3>
            <ul>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>

          <div className={styles.list}>
            <h3>Places</h3>
            <ul>
              <li>Castle</li>
              <li>Forms</li>
              <li>Beach</li>
              <li>Learn More</li>
            </ul>
          </div>

          <div className={styles.list}>
            <h3>About Us</h3>
            <ul>
              <li>Road Map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy;<span>2022</span><span>Metabnb</span></p>
        </div>
      </div>
    </section>
  )
}

export default FooterComponent
import logo1 from '../assets/logo.png'
import logo2 from '../assets/logo-2.png'
import styles from './navbar.module.css'

export const Navbar = ({}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo1}>
          <img src={logo2} alt="logo" />
        </div>

        <div className={styles.logo2}>
          <img src={logo1} alt="logo2" />
        </div>
      </div>

      <ul className={styles.links}>
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>

      <a className={styles.button} href="#">Connect Wallet</a>
    </nav>
  );
};

export default Navbar
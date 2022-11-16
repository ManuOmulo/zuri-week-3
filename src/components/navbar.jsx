import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import { AiOutlineClose } from 'react-icons/ai'
import { FaChevronRight } from "react-icons/fa";

import logo1 from '../assets/logo.png'
import logo2 from '../assets/logo-2.png'
import metamask from '../assets/metamask.png'
import wallet from '../assets/wallet.png'
import styles from './navbar.module.css'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '600px',
    height: '326px',
    borderRadius: '16px',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden'
  },
};

Modal.setAppElement('#root');

export const Navbar = ({}) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <div className={styles.logo1}>
            <img src={logo2} alt="logo" />
          </div>

          <div className={styles.logo2}>
            <img src={logo1} alt="logo2" />
          </div>
        </div>

        <ul className={styles.links}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/place-to-stay">Place to stay</NavLink></li>
          <li><NavLink to="#">NFTs</NavLink></li>
          <li><NavLink to="#">Community</NavLink></li>
        </ul>

        <a onClick={openModal} className={styles.button} href="#">Connect Wallet</a>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={styles.top}>
            <h2>Connect Wallet</h2>
            <AiOutlineClose className={styles.icon} onClick={closeModal} />
          </div>

          <p>Choose your wallet:</p>

          <div className={styles.buttonModal}>
            <div className={styles.wrapper}>
              <div className={styles.logoContainer}>
                <img src={metamask} alt="metamask" />
              </div>
              <h4>Metamask</h4>
            </div>
            <FaChevronRight />
          </div>

          <div className={styles.buttonModal}>
            <div className={styles.wrapper}>
              <div className={styles.logoContainer}>
                <img src={wallet} alt="metamask" />
              </div>
              <h4>WalletConnect</h4>
            </div>
            <FaChevronRight />
          </div>

        </Modal>
      </div>
    </nav>
  );
};

export default Navbar
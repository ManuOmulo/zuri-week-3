import nft1 from '../assets/nfts/image1.png'
import nft2 from '../assets/nfts/image2.png'
import nft3 from '../assets/nfts/image3.png'

import styles from './nft.module.css'

const NFTComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.nft}>
        <div className={styles.details}>
          <h2>Metabnb NFTs</h2>
          <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
          <a href="#">Learn More</a>
        </div>

        <div className={styles.photos}>
          <div className={styles.photo}>
            <img src={nft1} alt="nft 1" />
          </div>
          <div className={styles.photo}>
          <img src={nft2} alt="nft2" />
          </div>
          <div className={styles.photo}>
            <img src={nft3} alt="nft3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NFTComponent
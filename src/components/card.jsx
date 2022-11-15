import { FaHeart, FaStar } from 'react-icons/fa'
import styles from './card.module.css'

const CardComponent = ({ imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="card Image" />
        <div className={styles.likeCount}>
          <FaHeart />
        </div>
      </div>

      <div className={styles.cardDetails}>
        <div className={styles.row1}>
          <p>Desert King</p>
          <p>1MBT per night</p>
        </div>

        <div className={styles.row2}>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>

        <div className={styles.stars}>
          <FaStar className={styles.star}/>
          <FaStar className={styles.star}/>
          <FaStar className={styles.star}/>
          <FaStar className={styles.star}/>
          <FaStar className={styles.star}/>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
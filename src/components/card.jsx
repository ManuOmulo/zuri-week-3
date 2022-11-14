
import styles from './card.module.css'

const CardComponent = ({ imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="card Image" />
        <div className="likeCount">

        </div>
      </div>

      <div className="cardDetails">

      </div>
    </div>
  )
}

export default CardComponent
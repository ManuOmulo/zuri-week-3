import CardComponent from "./card"
import image1 from '../assets/adventures/Frame151.png'
import image2 from '../assets/adventures/Frame152.png'
import image3 from '../assets/adventures/Frame153.png'
import image4 from '../assets/adventures/Frame154.png'
import image5 from '../assets/adventures/Frame155.png'
import image6 from '../assets/adventures/Frame156.png'
import image7 from '../assets/adventures/Frame157.png'
import image8 from '../assets/adventures/Frame158.png'

import styles from './adventure.module.css'


const AdventureComponent = () => {

  const images = [image1, image2, image3, image4, image5, image6, image7, image8]

  return (
    <section className={styles.adventure}>
      <h2>Inspiration for your next adventure</h2>

      <div className={styles.itemContainer}>
        <CardComponent imageUrl={image1} />
        <CardComponent imageUrl={image2} />
        <CardComponent imageUrl={image3} />
        <CardComponent imageUrl={image4} />
        <CardComponent imageUrl={image5} />
        <CardComponent imageUrl={image6} />
        <CardComponent imageUrl={image7} />
        <CardComponent imageUrl={image8} />
      </div>
    </section>
  )
}

export default AdventureComponent
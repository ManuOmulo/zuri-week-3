import CardComponent from "./card"
import One from '../assets/destinations/Frame1.png'
import Two from '../assets/destinations/Frame2.png'
import Three from '../assets/destinations/Frame3.png'
import Four from '../assets/destinations/Frame4.png'
import Five from '../assets/destinations/Frame5.png'
import Six from '../assets/destinations/Frame6.png'
import Seven from '../assets/destinations/Frame7.png'
import Eight from '../assets/destinations/Frame8.png'
import Nine from '../assets/destinations/Frame9.png'
import Ten from '../assets/destinations/Frame10.png'
import Eleven from '../assets/destinations/Frame11.png'
import Twelve from '../assets/destinations/Frame12.png'
import Thirteen from '../assets/destinations/Frame13.png'
import Fourteen from '../assets/destinations/Frame14.png'
import Fifteen from '../assets/destinations/Frame15.png'
import Sixteen from '../assets/destinations/Frame16.png'
import styles from './destinations.module.css'

const DestinationsComponent = () => {
  return (
    <div className={styles.destinationContainer}>
      <CardComponent imageUrl={One} />
      <CardComponent imageUrl={Two} />
      <CardComponent imageUrl={Three} />
      <CardComponent imageUrl={Four} />
      <CardComponent imageUrl={Five} />
      <CardComponent imageUrl={Six} />
      <CardComponent imageUrl={Seven} />
      <CardComponent imageUrl={Eight} />
      <CardComponent imageUrl={Nine} />
      <CardComponent imageUrl={Ten} />
      <CardComponent imageUrl={Eleven} />
      <CardComponent imageUrl={Twelve} />
      <CardComponent imageUrl={Thirteen} />
      <CardComponent imageUrl={Fourteen} />
      <CardComponent imageUrl={Fifteen} />
      <CardComponent imageUrl={Sixteen} />
      {/* <CardComponent imageUrl={One} /> */}
    </div>
  )
}

export default DestinationsComponent
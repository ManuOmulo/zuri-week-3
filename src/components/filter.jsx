import icon from '../assets/filter.png'
import styles from './filter.module.css'

const FilterComponent = () => {
  return (
    <div className={styles.filterContainer}>
      <ul>
        <li>Restaurant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantast City</li>
        <li>Beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <div className={styles.filter}>
        <p>Location</p>
        <div className={styles.icon}>
          <img src={icon} alt="filter" />
        </div>
      </div>
    </div>
  )
}

export default FilterComponent
import FilterComponent from "../components/filter"
import DestinationsComponent from "../components/destinations"

const Places = () => {
  return (
    <main className="places">
      <FilterComponent />
      <DestinationsComponent />
    </main>
  )
}

export default Places
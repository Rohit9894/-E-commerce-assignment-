import { ArrowDownUp, SlidersHorizontal } from "lucide-react"

const SortFilter = () => {
  return (
    <div className="flex-center justify-between mt-2">
      <div className="filter-button">
        <ArrowDownUp size={"20px"} />
        <p className="font-semibold">Sort</p>
      </div>
      <div className="filter-button">
      <SlidersHorizontal size={"20px"}/>
        <p className="font-semibold">Filter</p>
      </div>
    </div>
  )
}

export default SortFilter

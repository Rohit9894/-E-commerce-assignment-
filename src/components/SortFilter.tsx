import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { BottomDrawerProps } from "./BottomDrawer";

const SortFilter = ({
  show,
  setShow,
  filter,
  setFilter,
}: BottomDrawerProps) => {
  return (
    <div className="flex-center justify-between mt-2 cursor-pointer">
      <div onClick={() => setShow && setShow(!show)} className="filter-button">
        <ArrowDownUp size={"20px"} />
        <p className="font-semibold">Sort</p>
      </div>
      <div
        onClick={() => setFilter && setFilter(!filter)}
        className="filter-button"
      >
        <SlidersHorizontal size={"20px"} />
        <p className="font-semibold">Filter</p>
      </div>
    </div>
  );
};

export default SortFilter;

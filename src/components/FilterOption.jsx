import { useRef } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import OffCanvas from "./OffCanvas";
import RatingsFilter from "./RatingsFilter";

export default function FilterOption({
  setShowFilter,
  selectedRating,
  setSelectedRating,
}) {
  const ref = useRef();

  const handleClick = () => {
    setShowFilter((prev) => !prev);
    if (ref) {
      const offcanvas = ref.current;
      console.log(offcanvas.style.display);
      offcanvas.style.display =
        offcanvas.style.display === "none" ? "block" : "none";
    }
  };
  return (
    <div className="filter-option mt-6 px-6 mx-auto 2xl:container">
      <div className="flex">
        <button
          onClick={handleClick}
          className="flex items-center border-black border px-3 py-4"
        >
          <FilterListIcon fontSize="small" />
          <span className="font-extrabold ms-1">Filter</span>
        </button>
        <OffCanvas position="right" ref={ref}>
          {" "}
          <RatingsFilter
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
        </OffCanvas>
        {selectedRating && (
          <button
            onClick={() => {
              setSelectedRating(null);
            }}
            className="text-secondary font-extrabold ms-3"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

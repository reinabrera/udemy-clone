import { useState } from "react";
import { Rating } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonChecked from "@mui/icons-material/RadioButtonChecked";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function RatingsFilter({ selectedRating, setSelectedRating }) {
  const [showRating, setShowRating] = useState(true);
  const stars = [4.7, 4.6, 4.5];

  const handleChange = (e) => {
    setSelectedRating(parseFloat(e.target.value));
  };

  const handleClick = () => {
    setShowRating(!showRating);
  };

  return (
    <div
      className={`ratings-filter ${
        showRating ? "active" : ""
      } pt-4 md:border-t`}
    >
      <button
        className="flex justify-between w-full items-center"
        onClick={handleClick}
      >
        <span className="font-extrabold text-xl">Ratings</span>{" "}
        <ExpandLessIcon />
      </button>
      <div className="ratings-radio hidden mt-4">
        {stars.map((star, index) => {
          return (
            <div
              key={"stars-radio-" + index}
              className={`flex items-center ${
                index > 0 ? "mt-3" : ""
              }  cursor-pointer `}
            >
              <input
                onChange={handleChange}
                type="radio"
                id={"stars-" + star}
                value={star}
                checked={selectedRating === star}
                className="cursor-pointer opacity-0"
              />
              <div className="pointer-events-none -ms-4">
                {selectedRating === star ? (
                  <RadioButtonChecked fontSize="small" />
                ) : (
                  <RadioButtonUncheckedIcon fontSize="small" />
                )}
              </div>

              <label
                className="stars ms-2 text-sm inline-flex items-center cursor-pointer "
                htmlFor={"stars-" + star}
              >
                <Rating value={star} precision={0.1} readOnly={true} />{" "}
                <span className="ms-2 !text-primary whitespace-nowrap">
                  {star} & up
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

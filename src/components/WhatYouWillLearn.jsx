import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function WhatYouWillLearn({ id, data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLimited, setIsLimited] = useState(false);
  const itemRef = useRef();
  const location = useLocation();

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (itemRef.current) {
      if (itemRef.current.scrollHeight > 240) {
        setIsExpanded(false);
        setIsLimited(true);
      } else {  
        setIsLimited(false)
        setIsExpanded(true);
      }
    }
    console.log("location changed")
  }, [itemRef.current, location]);

  return (
    <div className="what-you-will-learn text-primary">
      <div className="container mx-auto px-6 lg:px-11 pb-8 md:py-8">
        <div className="wrapper w-full max-w-2xl border p-6">
          <h2 className="text-2xl font-bold">What you'll learn</h2>
          <div className="overflow-hidden">
            <ul
              key={"what-to-learn-" + id} className={`flex list-items flex-wrap mt-4 -ms-3 *:ps-3 ${
                isExpanded ? "expanded h-auto" : "h-36 md:h-52 collapsed"
              }`}
              ref={itemRef}
            >
              {data.map((item, index) => {
                return (
                  <li
                    key={"learn-" + index}
                    className={`w-full md:w-1/2 flex text-sm tracking-tight ${
                      index > 1 ? "mt-2" : ""
                    }`}
                  >
                    <DoneIcon fontSize="small" />
                    <span className="ms-4">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          {isLimited && (
            <button
              onClick={handleClick}
              className="bg-white text-secondary text-sm font-extrabold mt-3"
            >
              {isExpanded ? "Show less" : "Show more"} {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

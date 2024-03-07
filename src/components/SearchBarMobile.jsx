import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useSearchBarMobileContext } from "../context/search_bar_mobile_context";
import SearchBarResult from "./SearchBarResult";

export default function SearchBarMobile() {
  const [value, setValue] = useState("");
  const { setIsVisible } = useSearchBarMobileContext();

  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="fixed off-canvas-search-bar-mobile top-0 bottom-0 left-0 right-0 bg-white">
      <div className="search-bar-mobile">
        <form action="/courses/search" className="flex items-center w-full border-b p-3">
          <button type="submit" className="size-8 flex items-center justify-center" disabled={value ? false : true}>
            <SearchOutlinedIcon color={value ? "" : "disabled"} />
          </button>
          <input onChange={handleChange}
            className="flex-1 ms-3 text-primary outline-0"
            type="text"
            placeholder="Search for anything"
            name="q"
            value={value}
          />
          <button onClick={handleClick} className="size-8 flex items-center justify-center">
            <CloseIcon sx={{color: "var(--primary)"}} />
          </button>
        </form>
      </div>
      <SearchBarResult query={value} />
    </div>
  );
}

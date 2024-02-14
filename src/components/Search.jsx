import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBarResult from "./SearchBarResult";
import { useSearchBarMobileContext } from "../context/search_bar_mobile_context";

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const prevQuery = searchParams.get("q");
  const [value, setValue] = useState("");
  const [ isFocus, setIsFocus] = useState(false);
  const { setIsVisible } = useSearchBarMobileContext();
 
  useEffect(() => {
    if (!prevQuery) {
      setValue('');
    } else {
      setValue(prevQuery);
    }
  }, [prevQuery, location])

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocus(true);
  }

  const handleClick = () => {
    setIsVisible(true);
  }

  return (
    <>
      <form
        action="/courses/search"
        className="desktop-search border relative border-primary rounded-t-full h-12 rounded-b-full px-3 items-center hidden md:flex"
      >
        <button disabled={value ? false : true}>
          <SearchOutlinedIcon color={value ? "" : "disabled"} />
        </button>

        <input
          className="w-full outline-0 ms-4 text-primary"
          type="text"
          name="q"
          placeholder="Search for anything"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          onFocus={handleFocus}
        />

        {isFocus && <SearchBarResult query={value} />}

      </form>
      <div className="mobile-search block md:hidden">
        <button onClick={handleClick}>
          <SearchOutlinedIcon />
        </button>
      </div>
    </>
  );
}

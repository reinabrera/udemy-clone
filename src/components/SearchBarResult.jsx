import { useState, useEffect } from "react";
import courses from "../data/courses";
import Fuse from "fuse.js";
import SearchBarResultItem from "./SearchBarResultItem";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

export default function SearchBarResult({ query }) {
  const [searchResult, setSearchResult] = useState(null);
  const [isDone, setIsDone] = useState(true);


  useEffect(() => {
    if (query) {
      const fuseOptions = {
        threshold: 0.3,
        keys: [
          "title",
          "instructor",
          "description",
          "what_you_will_learn",
          "course_content.title",
          "course_content.content_list.title",
        ],
      };
      const fuse = new Fuse(courses, fuseOptions);
      const result = fuse.search(query).map((course, index) => course.item);
      setSearchResult(result.slice(0, 5));
      setIsDone(false);
    } else {
      setSearchResult(null);
    }
  }, [query]);

  const handleClick = () => {
    setIsDone(true);
  }

  return (
    <>
      {(searchResult && !isDone) && (
        <div
          key={"search-bar-result"}
          className="search-bar-result md:absolute left-0 top-12 mt-1 overflow-y-hidden w-full text-primary"
        >
          <div className="py-2 search-bar-result-wrapper md:border md:border-gray-200  bg-white h-full">
            <ul className="search-bar-result-items">
              <li className="search-bar-item-custom-query">
                <Link onClick={handleClick} to={"/courses/search?q=" + query} className="px-3 py-1 -ms-2 *:ps-2 hover:bg-neutral-100 text-start flex items-center">
                  <div className="search-icon">
                    <div className="size-8 inline-flex justify-center items-center">
                      <SearchOutlinedIcon />
                    </div>
                  </div>
                  <span className="font-bold">{query}</span>
                </Link>
              </li>
              {searchResult.map((item) => {
                return <SearchBarResultItem key={item.id} data={item} handleClick={handleClick} />;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

import { useRef } from "react";
import { Link } from "react-router-dom";

import subcategories from "../data/subcategories";
import categories from "../data/categories";
import MenuIcon from "@mui/icons-material/Menu";
import OffCanvas from "./OffCanvas";

export default function MobileMenu() {
  const ref = useRef();

  const getParentCat = (id) => {
    return categories.find((item) => item.id === id).slug;
  };

  const handleClick = () => {
    if (ref) {
      const offcanvas = ref.current;
      offcanvas.style.display =
        offcanvas.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex w-full items-center justify-center"
      >
        <MenuIcon />
      </button>
      <OffCanvas position="left" ref={ref}>
        <div className="categories-and-subcategories">
          <span className="font-bold text-neutral-500 tracking-tighter">
            Most popular
          </span>
          <ul className="text-base mt-2">
            {subcategories.map((item, index) => {
              return (
                <li key={index} className={`${index > 0 ? "mt-3" : ""}`}>
                  <button>
                    <Link
                      to={
                        "/courses/" +
                        getParentCat(item.category_id) +
                        "/" +
                        item.slug
                      }
                    >
                      {item.name}
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </OffCanvas>
    </>
  );
}

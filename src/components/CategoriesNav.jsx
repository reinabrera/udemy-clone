import { useState } from "react";
import NavDropdown from "./NavDropdown";

export default function CategoriesNav() {
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseOver = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="h-full" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
      <button
        className="h-full flex items-center"
      >
        Categories
      </button>
      <NavDropdown isHidden={isHidden}/>
    </div>
  );
}

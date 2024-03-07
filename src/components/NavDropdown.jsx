import { useState, useEffect } from "react";
import categories from "../data/categories";
import subcategories from "../data/subcategories";
import NavDropdownList from "./NavDropdownList";

export default function NavDropdown({isHidden}) {

  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const selectSubcategory = (id, slug) => {
    setSelectedCategory({id, slug});
  }

  useEffect(() => {
    if (selectedCategory) {
      const arr = subcategories.filter((item) => item.category_id === selectedCategory.id);
      setSelectedSubcategories(arr);
    }
  }, [selectedCategory]);
 

  return (
    <nav className="menu absolute h-full pt-1" hidden={isHidden}>
      <div className="top-0 flex">
        <NavDropdownList list={categories} selectSubcategory={selectSubcategory} />
        <NavDropdownList list={selectedSubcategories} isSibling={true} parentSlug={selectedCategory.slug} />
      </div>
    </nav>
  );
}

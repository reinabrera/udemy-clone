import { Link } from "react-router-dom";
export default function NavDropdownList({ list, isSibling, selectSubcategory, parentSlug }) {

  const getSlug = (item) => {
    if (parentSlug) {
      return `${parentSlug}/${item.slug}`;
    }
    else {
      return item.slug;
    }
  }

  return (
    <div className={`bg-white border border-gray-300 shadow-md w-64 h-96 ${isSibling && '-ms-1'}`} hidden={list.length > 0 ? false : true}>
      <ul className="text-start py-3">
        {list.map((item) => {
          return (
            <li
              key={"nav-cat-" + item.id}
              className="text-primary hover:text-secondary"
            >
              <Link
                to={`/courses/${getSlug(item)}/`}

                className="px-4 py-2 flex"
                onMouseEnter={() => {
                  if (!isSibling) {
                    return selectSubcategory(item.id, item.slug);
                  }
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
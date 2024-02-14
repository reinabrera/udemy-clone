import { Link } from "react-router-dom";
export default function SearchBarResultItem({ data, handleClick }) {

  return (
    <li className="search-bar-item px-3 py-1 hover:bg-neutral-100" >
      <Link onClick={handleClick} to={"/course/" + data.id}>
        <div className="flex -ms-2 *:ps-2 items-center">
          <div className="featured-img">
            <img src={data.img} className="border border-gray-200 size-8 object-center object-cover" alt="featured img" />
          </div>
          <div className="details flex-1 text-start">
            <div>
              <span className="font-bold line-clamp-1">{data.title}</span>
            </div>
            <div className="text-xs">
              <span className="text-gray-500 font-semibold">Course</span>
              <span className="ms-2 text-gray-500">{data.instructor}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

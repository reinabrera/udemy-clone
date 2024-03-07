import { Link } from "react-router-dom";

export default function TopCategories({ categories }) {
  return (
    <div className="top-categories px-6 2xl:container mx-auto py-6 md:py-14">
      <h3 className="font-extrabold text-2xl text-primary">Top Categories</h3>
      <ul className="categories-list-wrapper flex flex-wrap -ms-2 md:-ms-8 mt-5">
        {categories.map((item) => {
          return (
            <li key={item.id} className="md:w-1/4 ps-2 mb-2 md:ps-8">
              <Link className="block rounded-full p-3 md:p-0" to={"/courses/" + item.slug}>
                <div className="img-wrapper mb-2 overflow-hidden hidden md:block">
                  <img className="size-full transition-all hover:scale-105 duration-300 overflow-hidden" src={item.img} alt={item.name + " category"} />
                </div>
                <span className="font-extrabold text-base text-primary">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

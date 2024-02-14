import { logo_udemy_inverted } from "../assets/images";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="before-footer pt-40"></div>
      <footer className="flex flex-col md:flex-row md:h-40 bg-dark-gray py-6 px-6 md:px-12 md:justify-between md:items-end absolute bottom-0 w-full">
        <div className="logo">
          <Link to="/">
            <img className="w-24" src={logo_udemy_inverted} alt="udemy logo" />
          </Link>
        </div>
        <div className="copyright mt-5 md:mt-0">
          <span className="text-white text-xs">© 2024 Udemy, Inc.</span>
        </div>
      </footer>
    </>
  );
}

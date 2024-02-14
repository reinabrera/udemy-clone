import { Link } from "react-router-dom";
import { logo_udemy as logo } from "../assets/images";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "./Search";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";
import SearchBarMobile from "./SearchBarMobile";
import { useSearchBarMobileContext } from "../context/search_bar_mobile_context";

export default function NavbarMobile({ cart }) {
  const { isVisible } = useSearchBarMobileContext();

  return (
    <>
      <div id="navbar-mobile" className="p-1 flex md:hidden h-14 items-center">
        <div className="menu-button h-full w-12 flex">
          <MobileMenu />
        </div>
        <div className="spacer h-full w-12"></div>
        <div className="logo flex-1">
          <Link className="flex justify-center" to="/">
            <img className="w-20" src={logo} alt="udemy logo" />
          </Link>
        </div>
        <div className="search h-full w-12 flex items-center justify-center">
          <Search />
        </div>
        <div className="cart relative h-full w-12 flex items-center justify-center">
          {cart.length > 0 && (
            <div className="absolute pointer-events-none top-0 right-1 rounded-full size-6 flex items-center justify-center bg-purple">
              <span className="text-sm text-white font-semibold">
                {cart.length}
              </span>
            </div>
          )}
          <Link to="/cart">
            <ShoppingCartOutlinedIcon />
          </Link>
        </div>
      </div>
      {isVisible && <SearchBarMobile />}
    </>
  );
}

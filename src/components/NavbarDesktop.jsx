import { Link } from "react-router-dom";
import { logo_udemy as logo } from "../assets/images";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "./Search";
import CategoriesNav from "./CategoriesNav";

export default function NavbarDesktop({cart}) {
  return(<div
    id="navbar-desktop"
    className="hidden md:flex relative justify-between  items-center px-6 text-center whitespace-nowrap text-sm"
  >
    <div className="logo pe-2 flex-shrink-0">
      <Link to="/">
        <img className="w-24" src={logo} alt="udemy logo" />
      </Link>
    </div>
    <div className="categories relative h-full px-4">
      <CategoriesNav />
    </div>
    <div className="search w-full px-2">
      <Search />
    </div>
    <div className="udemy-business px-4 hidden lg:block">
      <Link to="/">Udemy Business</Link>
    </div>
    <div className="teach-on-udemy px-4 hidden lg:block">
      <Link to="/">Teach on Udemy</Link>
    </div>
    <div className="cart px-4 relative">
      {cart.length > 0 && (
        <div className="absolute pointer-events-none -top-3 right-1 rounded-full size-6 flex items-center justify-center bg-purple">
          <span className="text-white font-semibold">{cart.length}</span>
        </div>
      )}
      <Link to="/cart">
        <ShoppingCartOutlinedIcon />
      </Link>
    </div>
    <div className="wishlist px-4">
      <Link to="/">
        <FavoriteBorderOutlinedIcon />
      </Link>
    </div>
  </div>)
}
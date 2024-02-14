import React from "react";
import { useCartContext } from "../context/cart_context";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const { cart } = useCartContext();

  return (
    <header className="navbar shadow-md bg-white z-20 relative">
      <NavbarDesktop cart={cart} />
      <NavbarMobile cart={cart} />
    </header>
  );
}

import React from "react";
import { Button, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar fluid rounded className="border-b-2">
      <Navbar.Brand href="/">
        <img
          src={require("./Logo.jpg")}
          className="mr-3 h-7 sm:h-12"
          alt="Wisol"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Wi Sol
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="https://www.facebook.com/profile.php?id=61561519260374&mibextid=LQQJ4d">
          Need help?
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={currentPath === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" active={currentPath === "/about"}>
          About
        </Navbar.Link>
        {/* <Navbar.Link href="/services" active={currentPath === "/services"}>
          Services
        </Navbar.Link> */}
        <Navbar.Link href="/product" active={currentPath === "/product"}>
          Product
        </Navbar.Link>
        <Navbar.Link href="/contact" active={currentPath === "/contact"}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

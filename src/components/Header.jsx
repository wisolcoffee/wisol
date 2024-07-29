import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar fluid rounded className="border-b-2">
      <Navbar.Brand href="/">
        <img
          src={require("./Logo.jpg")}
          className="mr-3 h-7 sm:h-12"
          alt="wi_sol coffee"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Wi Sol 
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="https://m.me/61563012447280">Need help?</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={currentPath === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={currentPath === "/about"}>
          About
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          to="/product"
          active={currentPath === "/product"}
        >
          Product
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/contact"
          active={currentPath === "/contact"}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link href="/">
          <span>Shubham</span>
        </Link>
      </div>
      {/* Social Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.svg" alt="" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image src="/linkedin.svg" alt="" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image src="/insta.svg" alt="" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image src="/fb.svg" alt="" width={24} height={24}></Image>
        </Link>
        <Link href="#">
          <Image src="/x.svg" alt="" width={24} height={24}></Image>
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

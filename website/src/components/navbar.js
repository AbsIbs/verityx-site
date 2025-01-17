"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";

// Images
import logo from "../../public/logo-primary.png";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About us", "Services", "Works", "FAQs"];
  const cta = "Let's talk";

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-transparent"
      isBlurred="true"
      shouldHideOnScroll
    >
      <div className="flex justify-center w-full">
        <div className="flex justify-between w-[1920px]">
          {/* Left side */}
          <NavbarContent>
            {/* Toggle button */}
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-white"
            />
            <NavbarBrand>
              <div className="flex items-center w-full h-[64px]">
                <Image src={logo} height={32} />
              </div>
            </NavbarBrand>
          </NavbarContent>
          {/* Items */}
          <div className="flex flex-row gap-12">
            <NavbarContent className="hidden sm:flex gap-12">
              {menuItems.map((item, index) => {
                return (
                  <NavbarItem key={index}>
                    <Link
                      href={"#"}
                      key={index}
                      className="text-secondary-text-on-bg hover:text-on-bg"
                    >
                      {item}
                    </Link>
                  </NavbarItem>
                );
              })}
            </NavbarContent>
            <NavbarContent>
              <NavbarItem>
                <Link
                  href={"#"}
                  className="visible px-4 py-2 bg-primary text-on-bg rounded"
                >
                  {cta}
                </Link>
              </NavbarItem>
            </NavbarContent>
          </div>
          {/* Responsive */}
          <NavbarMenu className="bg-bg gap-8">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link href={"#"} key={index} className="text-on-bg">
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </div>
      </div>
    </Navbar>
  );
}

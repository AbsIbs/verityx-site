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

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About us", "Services", "Works", "FAQs"];
  const cta = "Let's talk";

  return (
    <div className=" flex justify-center">
      <div className="flex flex-row w-[1920px] justify-center">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="full"
          className="bg-BG"
        >
          {/* Left side */}
          <NavbarContent>
            {/* Toggle button */}
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-white"
            />
            <NavbarBrand>
              {/* <AcmeLogo /> */}
              <p className="font-bold text-white">LOGO</p>
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
                      className="text-secondary-text-on-BG hover:text-on-bg"
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

          {/*           <NavbarContent justify="end">
            <NavbarItem>
              <Link
                href={"#"}
                className=" px-4 py-2 bg-primary text-on-bg rounded"
              >
                {cta}
              </Link>
            </NavbarItem>
          </NavbarContent> */}
          {/* Responsive */}
          <NavbarMenu className="bg-BG gap-8">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link href={"#"} key={index} className="text-on-bg">
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </div>
  );
}

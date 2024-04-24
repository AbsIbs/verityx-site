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
  Button,
} from "@nextui-org/react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About us", "Services", "Works", "FAQs"];
  const cta = "Let's talk";

  return (
    <div className=" flex justify-center">
      <div className="flex flex-row w-[1920px] justify-center">
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
          {/* Left side */}
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              {/* <AcmeLogo /> */}
              <p className="font-bold text-inherit">LOGO</p>
            </NavbarBrand>
          </NavbarContent>
          {/* Items */}
          <NavbarContent className="hidden sm:flex gap-12" justify="end">
            {menuItems.map((item, index) => {
              return (
                <NavbarItem key={index}>
                  <Link href={"#"} key={index}>
                    {item}
                  </Link>
                </NavbarItem>
              );
            })}
            <NavbarItem>
              <Link
                href={"#"}
                className=" px-4 py-2 bg-primary text-on-bg rounded"
              >
                {cta}
              </Link>
            </NavbarItem>
          </NavbarContent>
          {/* Responsive */}
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link href={"#"} key={index}>
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
              <Link
                href={"#"}
                className="px-4 py-2 bg-primary text-on-bg rounded"
              >
                {cta}
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      </div>
    </div>
  );
}

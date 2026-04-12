"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

function NavigationMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/register", label: "Register" },
    { href: "/contactus", label: "Contact Us" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleSignIn = () => {
    closeMenu();
    router.push("/login");
  };

  return (
    <Card className="sticky top-0 z-50 border-none rounded-none bg-[#0B3C5D] shadow-lg">
      <div className="h-16 w-full px-6 lg:px-10 flex items-center">

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <div className="w-12 h-12">
              <Image
                src="/icons/logo.png"
                alt="LÖWE & ADLER Logo"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <span className="text-[#C9A227] font-bold text-xl tracking-wide">
            LÖWE & ADLER
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 ml-auto">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`relative text-white font-medium px-3 py-2 transition-all duration-200
                  ${
                    isActive
                      ? "text-[#C9A227]"
                      : "hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#C9A227] rounded-full" />
                  )}
                </Button>
              </Link>
            );
          })}

          {/* <Button
            onClick={handleSignIn}
            className="bg-[#C9A227] hover:bg-[#B38B1D] text-[#0B3C5D] font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg"
          >
            Sign In
          </Button> */}
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden ml-auto">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </Button>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden`}
      >
        <div className="p-5 border-b flex justify-between items-center bg-[#0B3C5D]">
          <span className="text-lg font-semibold text-[#C9A227]">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="text-white hover:bg-white/10"
          >
            <AiOutlineClose size={20} />
          </Button>
        </div>

        <nav className="p-6 flex flex-col space-y-3">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-base font-medium px-4 py-3 rounded-lg
                  ${
                    isActive
                      ? "bg-[#F5E6B3] text-[#0B3C5D]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            );
          })}

          {/* <Button
            onClick={handleSignIn}
            className="mt-6 bg-[#C9A227] hover:bg-[#B38B1D] text-[#0B3C5D] font-semibold py-3 rounded-xl shadow-md"
          >
            Sign In
          </Button> */}
        </nav>
      </div>
    </Card>
  );
}

export default NavigationMenu;
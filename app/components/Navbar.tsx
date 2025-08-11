"use client";

import React, { useState, useCallback, useEffect } from "react";
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

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen, closeMenu]);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/admission", label: "Admission" },
    { href: "/contactus", label: "Contact Us" },
  ];

  const handleSignIn = useCallback(() => {
    closeMenu();
    router.push("/login");
  }, [closeMenu, router]);

  return (
    <Card className="rounded-none
 border-none sticky top-0 z-50 bg-blue-400 shadow-md">
      <div className="h-10 w-full px-4 lg:px-8 flex items-center">
        {/* LEFT: Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Link href="/" aria-label="EuroBridge Language Institute Home">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
              <Image
                src="/icons/logo.png"
                alt="EuroBridge Language Institute Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>
          <span className="text-yellow-400 font-bold text-lg sm:text-xl lg:text-xl leading-tight">
            EuroBridge Language Institute
          </span>
        </div>

         <nav className="hidden lg:flex items-center space-x-2 ml-auto" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? "default" : "ghost"}
                className={`text-white font-medium px-4 py-2 transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-yellow-400 hover:bg-yellow-700"
                    : "hover:bg-yellow-500/20"
                }`}
                aria-label={`Navigate to ${link.label}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <Button
            onClick={handleSignIn}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-2 ml-4 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
            aria-label="Sign In to your account"
          >
            Sign In
          </Button>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden ml-auto">
          <Button 
            onClick={toggleMenu} 
            variant="ghost"
            size="sm"
            className="text-white hover:bg-yellow-500/20 p-2" 
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </Button>
        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 w-80 max-w-[90vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        aria-hidden={!isMenuOpen}
      >
        {/* Mobile Menu Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200 bg-blue-50">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <Image
                src="/icons/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-blue-600">Menu</span>
          </div>
          <Button 
            onClick={closeMenu} 
            variant="ghost" 
            size="sm"
            className="text-blue-600 hover:bg-blue-100 p-2"
            aria-label="Close navigation menu"
          >
            <AiOutlineClose size={20} />
          </Button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-left px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-label={`Navigate to ${link.label}`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Button
              onClick={handleSignIn}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
              aria-label="Sign In to your account"
            >
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </Card>
  );
}

export default NavigationMenu;
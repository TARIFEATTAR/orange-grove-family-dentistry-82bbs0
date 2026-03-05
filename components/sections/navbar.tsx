"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItem {
  label: string
  href: string
}

interface NavbarProps {
  className?: string
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Dr. Kyle", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" }
]

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md backdrop-blur-sm"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl md:text-2xl text-orange-600">
              Orange Grove
              <span className="block text-base md:text-lg text-neutral-700 font-semibold">
                Family Dentistry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-neutral-700 hover:text-orange-600 transition-colors font-medium",
                  isScrolled ? "text-neutral-700" : "text-neutral-800"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Link href="/schedule">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-neutral-700 hover:text-orange-600"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <div className="font-bold text-lg text-orange-600">
                    Orange Grove
                    <span className="block text-sm text-neutral-700 font-semibold">
                      Family Dentistry
                    </span>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close mobile menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex flex-col space-y-4 py-6">
                  {navigationItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-neutral-700 hover:text-orange-600 transition-colors py-2"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <div className="mt-auto pt-6 border-t">
                  <SheetClose asChild>
                    <Button 
                      asChild
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      size="lg"
                    >
                      <Link href="/schedule">Schedule Consultation</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
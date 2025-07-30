// ...existing code...

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"

const navigation = [
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Handbags", href: "/handbags" },
  { name: "Accessories", href: "/accessories" },
  { name: "Collections", href: "/collections" },
  { name: "Sale", href: "/sale" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { state } = useCart()
  const router = useRouter()

  // Navigation removed as per instructions

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg hover:bg-gray-100">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-80 bg-white">
                <div className="flex flex-col h-full">
                  {/* Header with close button */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/goodnite-removebg-preview.png"
                        alt="Alberto Sora Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                      <span className="text-xl font-bold text-gray-900">Alberto Sora</span>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <nav className="flex-1">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors py-4 px-4 rounded-lg hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                  
                  {/* Bottom section */}
                  <div className="border-t border-gray-200 pt-6 space-y-6">
                    {/* Quick actions */}
                    <div className="flex items-center justify-between">
                      <Link href="/account" className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <User className="h-5 w-5" />
                        <span className="font-medium text-gray-900">Account</span>
                      </Link>
                      <Link href="/cart" className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors relative">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="font-medium text-gray-900">Cart</span>
                        {totalItems > 0 && (
                          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-xs text-white flex items-center justify-center font-medium">
                            {totalItems}
                          </span>
                        )}
                      </Link>
                    </div>
                    
                    {/* Search */}
                    <form onSubmit={handleSearch} className="space-y-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Search handbags, accessories..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 h-12 text-base"
                        />
                      </div>
                      <Button type="submit" className="w-full h-12 bg-black hover:bg-gray-800 text-white">
                        Search
                      </Button>
                    </form>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo and brand */}
          <div className="flex-1 flex justify-center md:justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3"
              style={{ minWidth: 0 }}
            >
              <Image
                src="/images/goodnite-removebg-preview.png"
                alt="Alberto Sora Logo"
                width={40}
                height={40}
                className="object-contain md:w-14 md:h-14"
              />
              <span className="text-lg md:text-2xl font-bold text-gray-900 whitespace-nowrap">Alberto Sora</span>
            </Link>
          </div>

          {/* Right side icons - hidden on mobile, shown on desktop */}
          <div className="hidden md:flex items-center gap-0 flex-shrink-0 absolute right-0 top-1/2 -translate-y-1/2">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Search handbags, accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 md:w-64"
                  autoFocus
                />
                <Button type="submit" variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-xs text-white flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Desktop Navigation - hidden on mobile */}
      <div className="hidden md:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-black">
        <nav className="flex h-12 items-center justify-center gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors px-3 py-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

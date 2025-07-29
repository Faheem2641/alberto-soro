// ...existing code...

"use client"
const navigation = [
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Handbags", href: "/handbags" },
  { name: "Accessories", href: "/accessories" },
  { name: "Collections", href: "/collections" },
  { name: "Sale", href: "/sale" },
]

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
        <div className="flex h-16 items-center justify-center relative">
          {/* Centered Logo and brand */}
          <Link href="/" className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/goodnite-removebg-preview.png"
              alt="Alberto Sora Logo"
              width={56}
              height={56}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-gray-900">Alberto Sora</span>
          </Link>
          {/* Right side icons */}
          <div className="flex items-center gap-4 absolute right-0">
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
      {/* Second line: Navigation tabs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-black">
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

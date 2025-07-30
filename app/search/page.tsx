"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams?.get("q") || ""
  const { dispatch } = useCart()

  // All products (handbags + accessories)
  const allProducts = [
    // Handbags
    {
      id: 1,
      name: "Classic Crossbody",
      price: "$129",
      image: "/images/gray-crossbody.jpg",
      badge: "Best Seller",
      description: "Versatile crossbody with adjustable strap",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 2,
      name: "Evening Clutch",
      price: "$89",
      image: "/images/gray-evening-clutch.jpg",
      badge: "Popular",
      description: "Elegant clutch perfect for special occasions",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 3,
      name: "Mini Tote Bag",
      price: "$119",
      image: "/images/blue-mini-tote.jpg",
      badge: null,
      description: "Compact tote in beautiful powder blue",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 4,
      name: "Shoulder Bag",
      price: "$149",
      image: "/images/blue-shoulder-bag.jpg",
      badge: "Limited",
      description: "Minimalist design with wide comfortable strap",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 5,
      name: "Blue Crossbody",
      price: "$139",
      image: "/images/blue-crossbody.jpg",
      badge: null,
      description: "Soft blue leather with unique triangular flap",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 6,
      name: "Textured Shoulder Bag",
      price: "$145",
      image: "/images/blue-textured-shoulder.jpg",
      badge: "New Arrival",
      description: "Elegant textured design with adjustable strap",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 7,
      name: "Canvas Tote",
      price: "$99",
      image: "/images/beige-canvas-tote.jpg",
      badge: "New Arrival",
      description: "Casual luxury with leather trim details",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 8,
      name: "Red Mini Tote",
      price: "$109",
      image: "/images/red-mini-tote.jpg",
      badge: "New Arrival",
      description: "Bold color statement in compact size",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 9,
      name: "Brown Leather Tote",
      price: "$139",
      image: "/images/brown-leather-tote.jpg",
      badge: "New Arrival",
      description: "Rich chocolate leather with structured design",
      category: "Handbags",
      type: "handbag",
    },
    {
      id: 10,
      name: "Tan Leather Handbag",
      price: "$135",
      image: "/images/tan-leather-handbag.jpg",
      badge: "New Arrival",
      description: "Classic silhouette in warm cognac tone",
      category: "Handbags",
      type: "handbag",
    },
    // Accessories
    {
      id: 101,
      name: "Hardware Kit",
      price: "$25",
      image: "/images/hardware-kit.jpg",
      badge: null,
      description: "Complete set of premium metal hardware for bag repairs and customization",
      category: "Accessories",
      type: "accessory",
    },
    {
      id: 102,
      name: "Gradient Keychain",
      price: "$15",
      image: "/images/grey-keychain.jpg",
      badge: null,
      description: "Stylish beaded keychain in calming blue-grey gradient tones",
      category: "Accessories",
      type: "accessory",
    },
    {
      id: 103,
      name: "Leather Wristlet Strap",
      price: "$35",
      image: "/images/black-wristlet-strap.jpg",
      badge: null,
      description: "Premium black leather wristlet strap with silver hardware",
      category: "Accessories",
      type: "accessory",
    },
    {
      id: 104,
      name: "Charm Keychain",
      price: "$28",
      image: "/images/decorative-keychain.jpg",
      badge: null,
      description: "Elegant silver keychain with butterfly, star, and heart charms",
      category: "Accessories",
      type: "accessory",
    },
  ]

  // Filter products based on search query
  const filteredProducts = allProducts.filter((product) => {
    const searchTerm = query.toLowerCase()
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      (product.badge && product.badge.toLowerCase().includes(searchTerm))
    )
  })

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
        {query && (
          <p className="text-lg text-gray-600">
            {filteredProducts.length > 0
              ? `Found ${filteredProducts.length} result${filteredProducts.length === 1 ? "" : "s"} for "${query}"`
              : `No results found for "${query}"`}
          </p>
        )}
        {!query && <p className="text-lg text-gray-600">Please enter a search term to find products.</p>}
      </div>

      {/* Search Results */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium rounded-full text-white ${
                        product.badge === "New Arrival"
                          ? "bg-green-600"
                          : product.badge === "Best Seller"
                            ? "bg-blue-600"
                            : product.badge === "Limited"
                              ? "bg-purple-600"
                              : "bg-black"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 z-10 bg-white text-gray-700 px-2 py-1 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                  <div className={product.type === "accessory" ? "bg-gray-50 p-8" : ""}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                        product.type === "accessory" ? "h-64 object-contain" : "h-64 sm:h-80 object-contain sm:object-cover"
                      }`}
                    />
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-gray-900">{product.price}</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-black hover:text-white transition-colors"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Results Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find any products matching "{query}". Try searching for different keywords or browse our
            collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black hover:bg-gray-800">
              <a href="/handbags">Browse Handbags</a>
            </Button>
            <Button variant="outline" asChild className="bg-transparent">
              <a href="/accessories">Browse Accessories</a>
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">👜</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Search</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Use the search bar above to find handbags, accessories, or browse our collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black hover:bg-gray-800">
              <a href="/handbags">Browse Handbags</a>
            </Button>
            <Button variant="outline" asChild className="bg-transparent">
              <a href="/accessories">Browse Accessories</a>
            </Button>
          </div>
        </div>
      )}

      {/* Search Suggestions */}
      {query && filteredProducts.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Suggestions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Popular Searches</h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <a href="/search?q=crossbody" className="hover:text-gray-900">
                    Crossbody
                  </a>
                </li>
                <li>
                  <a href="/search?q=tote" className="hover:text-gray-900">
                    Tote
                  </a>
                </li>
                <li>
                  <a href="/search?q=clutch" className="hover:text-gray-900">
                    Clutch
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Colors</h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <a href="/search?q=blue" className="hover:text-gray-900">
                    Blue
                  </a>
                </li>
                <li>
                  <a href="/search?q=gray" className="hover:text-gray-900">
                    Gray
                  </a>
                </li>
                <li>
                  <a href="/search?q=red" className="hover:text-gray-900">
                    Red
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Materials</h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <a href="/search?q=leather" className="hover:text-gray-900">
                    Leather
                  </a>
                </li>
                <li>
                  <a href="/search?q=canvas" className="hover:text-gray-900">
                    Canvas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Accessories</h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <a href="/search?q=keychain" className="hover:text-gray-900">
                    Keychain
                  </a>
                </li>
                <li>
                  <a href="/search?q=strap" className="hover:text-gray-900">
                    Strap
                  </a>
                </li>
                <li>
                  <a href="/search?q=hardware" className="hover:text-gray-900">
                    Hardware
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <Suspense
          fallback={
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center py-16">
                <div className="text-2xl">Loading search results...</div>
              </div>
            </div>
          }
        >
          <SearchResults />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

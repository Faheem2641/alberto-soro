"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"
import Image from "next/image"

export default function HandbagsPage() {
  const { dispatch } = useCart()

  // Most recent handbag additions
  const newArrivals = [
    {
      id: 6,
      name: "Textured Shoulder Bag",
      price: "$145",
      image: "/images/blue-textured-shoulder.jpg",
      badge: "New Arrival",
      description: "Elegant textured design with adjustable strap",
    },
    {
      id: 7,
      name: "Canvas Tote",
      price: "$99",
      image: "/images/beige-canvas-tote.jpg",
      badge: "New Arrival",
      description: "Casual luxury with leather trim details",
    },
    {
      id: 8,
      name: "Red Mini Tote",
      price: "$109",
      image: "/images/red-mini-tote.jpg",
      badge: "New Arrival",
      description: "Bold color statement in compact size",
    },
    {
      id: 9,
      name: "Brown Leather Tote",
      price: "$139",
      image: "/images/brown-leather-tote.jpg",
      badge: "New Arrival",
      description: "Rich chocolate leather with structured design",
    },
    {
      id: 10,
      name: "Tan Leather Handbag",
      price: "$135",
      image: "/images/tan-leather-handbag.jpg",
      badge: "New Arrival",
      description: "Classic silhouette in warm cognac tone",
    },
  ]

  // All handbags collection
  const allProducts = [
    {
      id: 1,
      name: "Classic Crossbody",
      price: "$129",
      image: "/images/gray-crossbody.jpg",
      badge: "Best Seller",
      description: "Versatile crossbody with adjustable strap",
    },
    {
      id: 2,
      name: "Evening Clutch",
      price: "$89",
      image: "/images/gray-evening-clutch.jpg",
      badge: "Popular",
      description: "Elegant clutch perfect for special occasions",
    },
    {
      id: 3,
      name: "Mini Tote Bag",
      price: "$119",
      image: "/images/blue-mini-tote.jpg",
      badge: null,
      description: "Compact tote in beautiful powder blue",
    },
    {
      id: 4,
      name: "Shoulder Bag",
      price: "$149",
      image: "/images/blue-shoulder-bag.jpg",
      badge: "Limited",
      description: "Minimalist design with wide comfortable strap",
    },
    {
      id: 5,
      name: "Blue Crossbody",
      price: "$139",
      image: "/images/blue-crossbody.jpg",
      badge: null,
      description: "Soft blue leather with unique triangular flap",
    },
    ...newArrivals,
  ]

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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Handbags</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of luxury handbags, featuring the latest arrivals and timeless classics
            </p>
          </div>

          {/* Latest Arrivals section removed as requested */}

          {/* All Products Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Complete Collection</h2>
              <div className="h-px bg-gray-200 flex-1 ml-8"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {allProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-64 sm:h-80 object-contain sm:object-cover rounded-t-lg"
                      />
                      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
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
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center bg-white border border-gray-200 rounded-lg p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our collection is constantly evolving. Subscribe to our newsletter to be the first to know about new
              arrivals and exclusive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Button className="bg-black hover:bg-gray-800 whitespace-nowrap">Subscribe</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

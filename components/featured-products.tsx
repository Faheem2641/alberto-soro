"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"

export function FeaturedProducts() {
  const { dispatch } = useCart()

  const products = [
    {
      id: 1,
      name: "Classic Crossbody",
      price: "$129",
      image: "/images/gray-crossbody.jpg",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Evening Clutch",
      price: "$89",
      image: "/images/gray-evening-clutch.jpg",
      badge: "New",
    },
    {
      id: 3,
      name: "Mini Tote Bag",
      price: "$119",
      image: "/images/blue-mini-tote.jpg",
      badge: null,
    },
    {
      id: 4,
      name: "Shoulder Bag",
      price: "$149",
      image: "/images/blue-shoulder-bag.jpg",
      badge: "Limited",
    },
    {
      id: 5,
      name: "Blue Crossbody",
      price: "$139",
      image: "/images/blue-crossbody.jpg",
      badge: null,
    },
    {
      id: 6,
      name: "Textured Shoulder Bag",
      price: "$145",
      image: "/images/blue-textured-shoulder.jpg",
      badge: "New",
    },
    {
      id: 7,
      name: "Canvas Tote",
      price: "$99",
      image: "/images/beige-canvas-tote.jpg",
      badge: null,
    },
    {
      id: 8,
      name: "Red Mini Tote",
      price: "$109",
      image: "/images/red-mini-tote.jpg",
      badge: "Popular",
    },
    {
      id: 9,
      name: "Brown Leather Tote",
      price: "$139",
      image: "/images/brown-leather-tote.jpg",
      badge: null,
    },
    {
      id: 10,
      name: "Tan Leather Handbag",
      price: "$135",
      image: "/images/tan-leather-handbag.jpg",
      badge: "Classic",
    },
  ]

  const handleAddToCart = (product: (typeof products)[0]) => {
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
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Products</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Explore our complete collection of handbags, carefully selected for their exceptional quality and timeless
            design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-medium rounded-full text-white bg-black">
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 sm:h-80 object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors text-base sm:text-lg">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">{product.price}</p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent hover:bg-black hover:text-white transition-colors h-10 rounded-lg"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of handbags, carefully selected for their exceptional quality and timeless
            design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-none">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  {/* Removed product badge/tab from image */}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">{product.price}</p>
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => handleAddToCart(product)}>
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

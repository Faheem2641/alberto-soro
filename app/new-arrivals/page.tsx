"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"
import Image from "next/image"

export default function NewArrivalsPage() {
  const { dispatch } = useCart()

  const newArrivals = [
    {
      id: 6,
      name: "Textured Shoulder Bag",
      price: "$145",
      image: "/images/blue-textured-shoulder.jpg",
      description: "Elegant textured design with adjustable strap",
    },
    {
      id: 7,
      name: "Canvas Tote",
      price: "$99",
      image: "/images/beige-canvas-tote.jpg",
      description: "Casual luxury with leather trim details",
    },
    {
      id: 8,
      name: "Red Mini Tote",
      price: "$109",
      image: "/images/red-mini-tote.jpg",
      description: "Bold color statement in compact size",
    },
    {
      id: 9,
      name: "Brown Leather Tote",
      price: "$139",
      image: "/images/brown-leather-tote.jpg",
      description: "Rich chocolate leather with structured design",
    },
    {
      id: 10,
      name: "Tan Leather Handbag",
      price: "$135",
      image: "/images/tan-leather-handbag.jpg",
      description: "Classic silhouette in warm cognac tone",
    },
  ]

  const handleAddToCart = (product: (typeof newArrivals)[0]) => {
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h1>
            <p className="text-lg text-gray-600">Discover our latest handbag designs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {newArrivals.map((product) => (
              <Card key={product.id} className="group cursor-pointer border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-64 sm:h-80 object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-lg font-bold text-gray-900">{product.price}</p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
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
      </main>
      <Footer />
    </div>
  )
}

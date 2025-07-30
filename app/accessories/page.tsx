"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"
import Image from "next/image"

export default function AccessoriesPage() {
  const { dispatch } = useCart()

  const accessories = [
    {
      id: 101,
      name: "Hardware Kit",
      price: "$25",
      image: "/images/hardware-kit.jpg",
      description: "Complete set of premium metal hardware for bag repairs and customization",
      category: "Hardware",
    },
    {
      id: 102,
      name: "Gradient Keychain",
      price: "$15",
      image: "/images/grey-keychain.jpg",
      description: "Stylish beaded keychain in calming blue-grey gradient tones",
      category: "Keychains",
    },
    {
      id: 103,
      name: "Leather Wristlet Strap",
      price: "$35",
      image: "/images/black-wristlet-strap.jpg",
      description: "Premium black leather wristlet strap with silver hardware",
      category: "Straps",
    },
    {
      id: 104,
      name: "Charm Keychain",
      price: "$15",
      image: "/images/decorative-keychain.jpg",
      description: "Elegant silver keychain with butterfly, star, and heart charms",
      category: "Keychains",
    },
  ]

  const handleAddToCart = (product: (typeof accessories)[0]) => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete your look with our premium handbag accessories. From functional hardware to stylish keychains,
              find the perfect finishing touches for your Alberto Sora collection.
            </p>
          </div>

          {/* Accessories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {accessories.map((accessory) => (
              <Card
                key={accessory.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg flex justify-center items-center bg-white" style={{height: '16rem'}}>
                    <Image
                      src={accessory.image || "/placeholder.svg"}
                      alt={accessory.name}
                      width={220}
                      height={220}
                      className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {accessory.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {accessory.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{accessory.description}</p>
                    <p className="text-lg font-bold text-gray-900">{accessory.price}</p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent hover:bg-black hover:text-white transition-colors"
                      onClick={() => handleAddToCart(accessory)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <section className="bg-white border border-gray-200 rounded-lg p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Accessories?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every accessory is carefully selected to complement your Alberto Sora handbags with quality and style.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                {/* Removed emoji */}
                <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-600">
                  All hardware and accessories are made from high-quality materials that match our handbag standards.
                </p>
              </div>

              <div className="text-center">
                {/* Removed emoji */}
                <h3 className="font-semibold text-gray-900 mb-2">Perfect Match</h3>
                <p className="text-sm text-gray-600">
                  Designed to complement your Alberto Sora handbags with coordinating colors and finishes.
                </p>
              </div>

              <div className="text-center">
                {/* Removed emoji */}
                <h3 className="font-semibent text-gray-900 mb-2">Great Gifts</h3>
                <p className="text-sm text-gray-600">
                  Perfect as standalone gifts or to complete a handbag purchase for someone special.
                </p>
              </div>
            </div>
          </section>

          {/* Care Instructions */}
          <section className="mt-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Care Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Hardware & Metal Accessories</h4>
                  <ul className="space-y-1">
                    <li>• Clean with a soft, dry cloth</li>
                    <li>• Avoid exposure to moisture and chemicals</li>
                    <li>• Store in a dry place when not in use</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Leather Straps & Keychains</h4>
                  <ul className="space-y-1">
                    <li>• Wipe gently with a damp cloth if needed</li>
                    <li>• Apply leather conditioner occasionally</li>
                    <li>• Keep away from direct sunlight</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

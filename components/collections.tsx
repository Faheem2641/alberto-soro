import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Collections() {
  const collections = [
    {
      name: "Spring Collection",
      description: "Fresh designs for the new season",
      image: "/images/blue-crossbody.jpg",
      cta: "Shop Spring",
      href: "/collections/spring",
    },
    {
      name: "Evening Essentials",
      description: "Perfect for special occasions",
      image: "/images/gray-evening-clutch.jpg",
      cta: "Shop Evening",
      href: "/collections/evening",
    },
    {
      name: "Classic Totes",
      description: "Timeless everyday companions",
      image: "/images/brown-leather-tote.jpg",
      cta: "Shop Totes",
      href: "/collections/totes",
    },
    {
      name: "Canvas Collection",
      description: "Casual luxury for everyday",
      image: "/images/beige-canvas-tote.jpg",
      cta: "Shop Canvas",
      href: "/collections/canvas",
    },
    {
      name: "Crossbody Essentials",
      description: "Hands-free luxury and style",
      image: "/images/gray-crossbody.jpg",
      cta: "Shop Crossbody",
      href: "/collections/crossbody",
    },
    {
      name: "Colorful Classics",
      description: "Add a pop of color to your style",
      image: "/images/red-mini-tote.jpg",
      cta: "Shop Colors",
      href: "/collections/colorful",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Removed duplicate heading and description */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  width={400}
                  height={400}
                  className="w-full h-64 sm:h-80 object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center text-white space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold">{collection.name}</h3>
                    <p className="text-sm md:text-base opacity-90">{collection.description}</p>
                    <Link href={collection.href}>
                      <Button variant="outline" className="bg-white text-black hover:bg-gray-100 h-10 px-6 rounded-lg">
                        {collection.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px] py-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Timeless
                <br />
                <span className="text-gray-600">Elegance</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Discover our expanded collection of premium handbags crafted with the finest materials and attention to
                detail. From classic leather to contemporary canvas designs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/collections">
                <Button size="lg" className="bg-black hover:bg-gray-800 w-full sm:w-auto">
                  Shop Collection
                </Button>
              </Link>
              <Link href="/lookbook">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  View Lookbook
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/tan-leather-handbag.jpg"
              alt="Featured luxury leather handbag in tan"
              width={500}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

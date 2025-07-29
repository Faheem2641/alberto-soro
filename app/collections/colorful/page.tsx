import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedProducts } from "@/components/featured-products"

export default function ColorfulCollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Colorful Classics</h1>
            <p className="text-lg text-gray-600">Add a pop of color to your style</p>
          </div>
          <FeaturedProducts />
        </div>
      </main>
      <Footer />
    </div>
  )
}

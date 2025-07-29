import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Collections } from "@/components/collections"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h1>
            <p className="text-lg text-gray-600">Explore our curated collections designed for every occasion</p>
          </div>
          <Collections />
        </div>
      </main>
      <Footer />
    </div>
  )
}

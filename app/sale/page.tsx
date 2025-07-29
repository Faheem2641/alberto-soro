import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Bell } from "lucide-react"
import Link from "next/link"

export default function SalePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sales & Offers</h1>
            <p className="text-lg text-gray-600">Stay updated with our latest deals and promotions</p>
          </div>

          <div className="space-y-8">
            {/* No Sale Currently Card */}
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-gray-100 p-4">
                    <AlertCircle className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No Sales Currently</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We don't have any active sales at the moment, but don't worry! Our beautiful handbags are always worth
                  their value with premium quality and timeless design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/handbags">
                    <Button className="bg-black hover:bg-gray-800">Shop Full Collection</Button>
                  </Link>
                  <Button variant="outline" className="bg-transparent">
                    <Bell className="h-4 w-4 mr-2" />
                    Notify Me of Sales
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup for Sale Notifications */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Be the First to Know</h3>
                  <p className="text-gray-600">
                    Subscribe to our newsletter to get notified about exclusive sales, new arrivals, and special offers.
                  </p>
                  <div className="max-w-md mx-auto">
                    <div className="flex gap-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <Button className="bg-black hover:bg-gray-800 whitespace-nowrap">Subscribe</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Shop With Us */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-4">✨</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Quality</h4>
                  <p className="text-sm text-gray-600">
                    Every Alberto Sora handbag is crafted with the finest materials and attention to detail.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-4">🚚</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
                  <p className="text-sm text-gray-600">
                    Enjoy complimentary shipping on all orders, no minimum purchase required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-4">🔄</div>
                  <h4 className="font-semibent text-gray-900 mb-2">Easy Returns</h4>
                  <p className="text-sm text-gray-600">
                    Not satisfied? Return your purchase within 30 days for a full refund.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

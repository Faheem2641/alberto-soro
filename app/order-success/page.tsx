import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage() {
  const orderNumber = `AS${Date.now().toString().slice(-6)}`

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-lg text-gray-600 mb-2">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <p className="text-sm text-gray-500">
              Order Number: <span className="font-medium text-gray-900">#{orderNumber}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
                <p className="text-sm text-gray-600">
                  A confirmation email has been sent to your email address with order details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Package className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Processing</h3>
                <p className="text-sm text-gray-600">
                  Your order is being prepared and will be shipped within 1-2 business days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">
                  Your order qualifies for free shipping and will arrive in 3-5 business days.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What's Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Order Processing</h4>
                    <p className="text-sm text-gray-600">We'll prepare your items with care and attention to detail.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Shipping Notification</h4>
                    <p className="text-sm text-gray-600">You'll receive a tracking number once your order ships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Delivery</h4>
                    <p className="text-sm text-gray-600">Your Alberto Sora handbag will arrive at your doorstep.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/handbags">
                <Button className="bg-black hover:bg-gray-800">Continue Shopping</Button>
              </Link>
              <Link href="/account">
                <Button variant="outline" className="bg-transparent">
                  View Account
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Need help? Contact our customer service team at{" "}
              <a href="mailto:support@albertosora.com" className="text-blue-600 hover:underline">
                support@albertosora.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

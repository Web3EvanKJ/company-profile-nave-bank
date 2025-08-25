"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Shield,
  CreditCard,
  DollarSign,
  TrendingUp,
  Users,
  Lock,
  Smartphone,
  PiggyBank,
  Building,
  Banknote,
  Phone,
  MapPin,
  Clock,
  Award,
  Zap,
} from "lucide-react";

// Simple CountUp Component
function CountUp({ from = 0, to = 0, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const increment = (to - from) / (duration * 60);
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function App() {
  // Banking metrics
  const totalAssets = 2500; // $2.5B
  const activeCustomers = 850; // 850K

  return (
    <>
      <section
        className="relative lg:h-[90vh] h-[70vh] flex items-center justify-start bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://cdn5.ocbc.id/asset/media/Feature/Banner/Main-Banner/2023/slide-banner-ocbc-melajujauh_d.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/50 " />
        <div className="relative z-10 text-left px-10">
          {/* Hero Section */}
          <section className=" w-full py-20">
            <div className="lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-gray-900 dark:text-white">
                      Your Trusted{" "}
                      <span className="block">
                        Financial{" "}
                        <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                          Partner
                        </span>
                      </span>
                    </h1>
                  </div>

                  <p className="max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                    Experience modern banking with innovative digital solutions,
                    competitive rates, and personalized financial services. Your
                    financial success is our priority.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white group"
                    onClick={() => window.open("/open-account", "_blank")}
                  >
                    Open Account
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>

                  <Button
                    size="lg"
                    className="group hover:bg-gray-900 dark:hover:bg-gray-800"
                    onClick={() => window.open("/service", "_blank")}
                  >
                    Explore Services
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span>FDIC Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span>No Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5">
        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Banking Solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial services designed for individuals,
              families, and businesses with innovative digital banking solutions
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="hover:shadow-lg transition-all duration-500 hover:scale-101 transform">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Mobile Banking</CardTitle>
                <CardDescription>
                  Bank anywhere, anytime with our award-winning mobile app
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-500 hover:scale-101 transform">
              <CardHeader>
                <Shield className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Secure & Protected</CardTitle>
                <CardDescription>
                  Advanced security measures to keep your money and data safe
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-500 hover:scale-101 transform">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Investment Services</CardTitle>
                <CardDescription>
                  Grow your wealth with our comprehensive investment solutions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Card className="bg-gradient-to-r from-red-600 to-red-500 text-white border-0">
              <CardContent className="p-4">
                <p className="text-sm opacity-90 mb-1">
                  Assets Under Management
                </p>
                <div className="text-2xl sm:text-3xl font-bold">
                  $<CountUp from={0} to={totalAssets} duration={2} />B
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border-0">
              <CardContent className="p-4">
                <p className="text-sm opacity-90 mb-1">Trusted Customers</p>
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span className="text-2xl sm:text-3xl font-bold">
                    <CountUp from={0} to={activeCustomers} duration={2} />
                    K+
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your finances effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Savings Accounts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                High-yield savings with competitive rates
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Credit Cards</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Reward cards with cashback and points
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Home Loans</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Competitive mortgage rates and terms
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Premium Banking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Exclusive benefits for high-value customers
              </p>
            </div>
          </div>
        </section>

        {/* Account Types Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Account Options
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our range of checking, savings, and premium accounts
              designed to meet your financial needs with competitive rates and
              exceptional service.
            </p>
          </div>

          {/* Account Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Essential Checking
                  <span className="text-sm text-red-600 font-normal">Free</span>
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-900 dark:text-white">
                  $0/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    No monthly fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    Free mobile banking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    Online bill pay
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Premium Plus
                  <span className="text-sm text-red-600 font-normal">
                    Premium
                  </span>
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-900 dark:text-white">
                  $15/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    All Essential features
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    2.5% APY savings rate
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    Priority customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    Investment advisory
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Private Banking
                  <span className="text-sm text-red-600 font-normal">
                    Elite
                  </span>
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-900 dark:text-white">
                  $50/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    All Premium features
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    Dedicated relationship manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    Exclusive investment products
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    Concierge services
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Open Account Today
              </Button>
              <Button variant="outline" size="lg">
                Visit Branch Locator
              </Button>
            </div>

            <div className="flex justify-center gap-8 mt-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-BANKING</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>500+ Branches</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

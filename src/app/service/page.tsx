import Image from "next/image";
import {
  CreditCard,
  PiggyBank,
  Briefcase,
  ShieldCheck,
  Smartphone,
  Globe,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCBC Bank",
  description: "OCBC bank official website",
  icons: {
    icon: "/assets/ocbc-logo.jpg", // normal favicon
    shortcut: "/assets/ocbc-logo.jpg", // for browser shortcuts
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Image
          src="/assets/ocbc.jpg"
          alt="Our Services"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent leading-snug">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of financial products designed to support
            individuals and businesses at every stage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow bg-gray-50 dark:bg-gray-900 text-center">
            <CreditCard className="mx-auto h-10 w-10 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personal Banking</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Easy and secure banking solutions tailored to your personal needs.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50 dark:bg-gray-900 text-center">
            <PiggyBank className="mx-auto h-10 w-10 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Savings & Investments
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Competitive interest rates and smart investment options to grow
              your wealth.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50 dark:bg-gray-900 text-center">
            <Briefcase className="mx-auto h-10 w-10 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Banking</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering businesses with tailored financial services and
              solutions.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50 dark:bg-gray-900 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Insurance</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Protect what matters most with our wide range of insurance
              options.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50 dark:bg-gray-900 text-center">
            <Smartphone className="mx-auto h-10 w-10 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Banking</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your accounts anytime, anywhere with our secure mobile app.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50 dark:bg-gray-900 text-center">
            <Globe className="mx-auto h-10 w-10 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Transfers</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fast and secure international money transfers at low rates.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">
          Open an account today and experience the future of digital banking
          with OCBC.
        </p>
        <a
          href="/open-account"
          className="inline-block px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Open Account
        </a>
      </section>
    </main>
  );
}

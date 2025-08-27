import Image from "next/image";
import FetchTeam from "@/components/FetchTeam";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nave Bank",
  description: "Nave bank official website",
  icons: {
    icon: "/assets/Logo-nave.png", // normal favicon
    shortcut: "/assets/Logo-nave.png", // for browser shortcuts
  },
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Image
          src="/assets/nave.jpg"
          alt="About Nave"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent leading-snug">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            The people who drive our company forward with their expertise and
            passion.
          </p>
        </div>
      </section>
      <main className="min-h-screen bg-gray-50 py-16 px-6">
        <section className="max-w-6xl mx-auto text-center">
          <FetchTeam />
        </section>
      </main>
    </>
  );
}

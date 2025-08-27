// app/not-found.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nave Bank",
  description: "Nave bank official website",
  icons: {
    icon: "/assets/Logo-nave.png", // normal favicon
    shortcut: "/assets/Logo-nave.png", // for browser shortcuts
  },
};

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

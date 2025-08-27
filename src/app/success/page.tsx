import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Account Created Successfully!
        </h1>

        <p className="mt-2 text-gray-600">
          Your account has been created. You can log in and start contributing
          to our blog.
        </p>

        <div className="mt-6 space-y-3">
          <Link
            href="/login"
            className="block w-full rounded-md bg-green-600 px-4 py-2 text-white font-medium shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            Go to Login
          </Link>

          <Link
            href="/"
            className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 font-medium shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

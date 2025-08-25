import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const AccountType = () => {
  return (
    <div>
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
              <span className="text-sm text-red-600 font-normal">Premium</span>
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
              <span className="text-sm text-red-600 font-normal">Elite</span>
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
    </div>
  );
};
export default AccountType;

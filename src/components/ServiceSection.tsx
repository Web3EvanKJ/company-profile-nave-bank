import { Award, Building, CreditCard, PiggyBank } from "lucide-react";

const ServiceSection = () => {
  return (
    <div>
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
    </div>
  );
};
export default ServiceSection;

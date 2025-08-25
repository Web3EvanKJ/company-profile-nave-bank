import { CheckCircle } from "lucide-react";
import HomeButton from "./HomeButton";

const HeroSection = () => {
  return (
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

        <HomeButton />

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
  );
};
export default HeroSection;

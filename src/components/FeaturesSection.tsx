import { Users } from "lucide-react";
import CountUp from "./countUp";
import FeatureCard from "./FeatureCard";
import { Card, CardContent } from "./ui/card";

const FeaturesSection = () => {
  // Banking metrics
  const totalAssets = 2500; // $2.5B
  const activeCustomers = 850; // 850K

  return (
    <div>
      {" "}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Banking Solutions
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive financial services designed for individuals, families,
          and businesses with innovative digital banking solutions
        </p>
      </div>
      {/* Feature Cards */}
      <FeatureCard />
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <Card className="bg-gradient-to-r from-red-600 to-red-500 text-white border-0">
          <CardContent className="p-4">
            <p className="text-sm opacity-90 mb-1">Assets Under Management</p>
            <div className="text-2xl sm:text-3xl font-bold">
              <CountUp from={0} to={totalAssets} duration={2} suffix="B+" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border-0">
          <CardContent className="p-4">
            <p className="text-sm opacity-90 mb-1">Trusted Customers</p>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              <span className="text-2xl sm:text-3xl font-bold">
                <CountUp
                  from={0}
                  to={activeCustomers}
                  duration={2}
                  suffix="K+"
                />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default FeaturesSection;

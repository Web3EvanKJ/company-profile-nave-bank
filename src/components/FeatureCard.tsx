import { Shield, Smartphone, TrendingUp } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const FeatureCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <Card className="hover:shadow-lg transition-all duration-500 hover:scale-101 transform">
        <CardHeader>
          <Smartphone className="h-10 w-10 text-green-600 mb-2" />
          <CardTitle>Mobile Banking</CardTitle>
          <CardDescription>
            Bank anywhere, anytime with our award-winning mobile app
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-500 hover:scale-101 transform">
        <CardHeader>
          <Shield className="h-10 w-10 text-green-600 mb-2" />
          <CardTitle>Secure & Protected</CardTitle>
          <CardDescription>
            Advanced security measures to keep your money and data safe
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-500 hover:scale-101 transform">
        <CardHeader>
          <TrendingUp className="h-10 w-10 text-green-600 mb-2" />
          <CardTitle>Investment Services</CardTitle>
          <CardDescription>
            Grow your wealth with our comprehensive investment solutions
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
export default FeatureCard;

import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
  );
};
export default ContactSection;

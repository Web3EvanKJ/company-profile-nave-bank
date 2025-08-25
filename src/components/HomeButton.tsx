"use client";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const HomeButton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="lg"
        className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white group"
        onClick={() => window.open("/open-account", "_blank")}
      >
        Open Account
        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>

      <Button
        size="lg"
        className="group hover:bg-gray-900 dark:hover:bg-gray-800"
        onClick={() => window.open("/service", "_blank")}
      >
        Explore Services
        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </div>
  );
};
export default HomeButton;

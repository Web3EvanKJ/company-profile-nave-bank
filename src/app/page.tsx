import ContactSection from "@/components/ContactSection";
import AccountType from "@/components/AccountType";
import ServiceSection from "@/components/ServiceSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";

function App() {
  return (
    <>
      <section
        className="relative lg:h-[90vh] h-[70vh] flex items-center justify-start bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/nave-sky-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/50 " />
        <div className="relative z-10 text-left px-10">
          {/* Hero Section */}
          <section className=" w-full py-20">
            <HeroSection />
          </section>
        </div>
      </section>
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5">
        {/* Features Section */}
        <section className="py-20">
          <FeaturesSection />
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl">
          <ServiceSection />
        </section>

        {/* Account Types Section */}
        <section className="py-20">
          <AccountType />
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <ContactSection />
        </section>
      </main>
    </>
  );
}

export default App;


import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StaffSection from "@/components/StaffSection";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-ayush-50 to-herb-50 p-4">
        <div className="text-center w-full max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 animate-fade-in">
            Welcome to AYUSH Health Care
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate-slide-in delay-200">
            Specialized care for anorectal diseases by Dr. S. Soma Rao
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-scale-in delay-300">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover-scale">
              <h3 className="text-xl font-bold mb-3 text-ayush-600">Expert Care</h3>
              <p className="text-gray-600">Over 20 years of specialized experience in treating anorectal conditions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover-scale">
              <h3 className="text-xl font-bold mb-3 text-herb-600">Advanced Treatments</h3>
              <p className="text-gray-600">Combining ancient Ayurvedic wisdom with modern medical techniques</p>
            </div>
          </div>
          
          <div className="animate-fade-in delay-400">
            <Button asChild className="mr-4 bg-ayush-600 hover:bg-ayush-700">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="border-ayush-600 text-ayush-600 hover:bg-ayush-50">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                title="About AYUSH Health Care"
                subtitle="Trusted expert care for anorectal conditions"
              />
              <p className="text-gray-600 mb-6">
                At AYUSH Health Care, we provide comprehensive, compassionate care for all anorectal conditions.
                With over 20 years of experience and more than 50,000 successfully treated patients,
                our center combines traditional Ayurvedic methods with modern medical technology.
              </p>
              <Button asChild className="bg-ayush-600 hover:bg-ayush-700">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/033a2ecf-e6db-41b0-b421-fcfe6a03921c.png"
                alt="AYUSH Health Care Facility"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Staff/Doctor Section */}
      <StaffSection />

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Patient Testimonials"
            subtitle="See what our patients say about their experience"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Sample testimonial cards */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">"The treatment I received at AYUSH Health Care completely changed my life. After suffering for years, I'm finally pain-free."</p>
              <p className="font-semibold text-gray-800">- Rahul M.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">"Dr. Soma Rao is extremely knowledgeable and caring. The Ayurvedic approach was gentler than I expected and very effective."</p>
              <p className="font-semibold text-gray-800">- Priya K.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">"I was nervous about getting treatment, but the staff made me feel comfortable. The cashless facility was also very convenient."</p>
              <p className="font-semibold text-gray-800">- Amit S.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-ayush-600 text-ayush-600 hover:bg-ayush-50">
              <Link to="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive care for all anorectal conditions"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-ayush-600">Piles Treatment</h3>
              <p className="text-gray-600 mb-4">Advanced non-surgical and minimally invasive treatments for hemorrhoids</p>
              <Button asChild variant="outline" className="w-full border-ayush-600 text-ayush-600 hover:bg-ayush-50">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-ayush-600">Fistula Treatment</h3>
              <p className="text-gray-600 mb-4">Specialized Ksharsutra therapy and other effective approaches</p>
              <Button asChild variant="outline" className="w-full border-ayush-600 text-ayush-600 hover:bg-ayush-50">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-ayush-600">Consultation</h3>
              <p className="text-gray-600 mb-4">Comprehensive evaluation and personalized treatment plans</p>
              <Button asChild variant="outline" className="w-full border-ayush-600 text-ayush-600 hover:bg-ayush-50">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ayush-700 to-herb-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Expert Care?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule your appointment today and take the first step towards relief and recovery.</p>
          <Button asChild size="lg" className="bg-white text-ayush-700 hover:bg-gray-100">
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

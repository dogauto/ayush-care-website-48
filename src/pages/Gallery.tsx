
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Phone } from "lucide-react";

const Gallery = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Gallery</h1>
            <p className="text-lg text-gray-600">
              Take a virtual tour of our clinic facilities and treatment spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Welcome to the AYUSH HEALTH CARE gallery. Here you can see our modern, clean clinic spaces designed with patient comfort in mind. Our facility combines advanced medical technology with a soothing, healing environment.
            </p>
          </div>

          {/* Clinic Exterior */}
          <SectionHeading 
            title="Clinic Building" 
            subtitle="Our dedicated healthcare facility in Barasat"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={`exterior-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img 
                  src="/placeholder.svg"
                  alt={`Clinic Exterior View ${num}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Reception Area */}
          <SectionHeading 
            title="Reception & Waiting Area" 
            subtitle="Comfortable spaces designed for patient comfort"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={`reception-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img 
                  src="/placeholder.svg"
                  alt={`Reception Area ${num}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Consultation Rooms */}
          <SectionHeading 
            title="Consultation Rooms" 
            subtitle="Private spaces for detailed discussions with Dr. S. Soma Rao"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={`consultation-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img 
                  src="/placeholder.svg"
                  alt={`Consultation Room ${num}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Treatment Rooms */}
          <SectionHeading 
            title="Treatment Facilities" 
            subtitle="State-of-the-art equipment for advanced anorectal care"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`treatment-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img 
                  src="/placeholder.svg"
                  alt={`Treatment Room ${num}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Our Team */}
          <SectionHeading 
            title="Our Team" 
            subtitle="Dedicated professionals committed to your care"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={`team-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img 
                  src="/placeholder.svg"
                  alt={`Team Member ${num}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{num === 1 ? "Dr. S. Soma Rao" : `Staff Member ${num}`}</h3>
                  <p className="text-gray-600">{num === 1 ? "Lead Surgeon" : `Role ${num}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Visit Our Clinic
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience our facilities in person and meet with Dr. S. Soma Rao for a personalized consultation about your anorectal health concerns.
          </p>
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg" 
            icon={<Phone size={20} />}
            className="bg-white text-ayush-700"
          >
            Schedule Your Visit
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

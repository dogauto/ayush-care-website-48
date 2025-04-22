
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Phone } from "lucide-react";

const clinicBuildingImages = [
  {
    src: "/lovable-uploads/0d0766af-73be-402b-89c1-50e4a6071f03.png",
    alt: "Ayush Health Care clinic frontage with shutter and car"
  },
  {
    src: "/lovable-uploads/9f72e384-596e-421a-ad57-37bfee18af4b.png",
    alt: "Consultation room at Ayush Health Care"
  },
  {
    src: "/lovable-uploads/6452fe5b-acb6-4699-b681-0bdfcdc938cc.png",
    alt: "Ayush Health Care exterior with signboard and open interior view"
  },
  {
    src: "/lovable-uploads/711a9b0a-34ed-466f-a392-0cc0717c33e0.png",
    alt: "Dr. S. Soma Rao at Ayush Health Care"
  }
];

const Gallery = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto transition-all animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Gallery</h1>
            <p className="text-lg text-gray-600">
              Take a virtual tour of our clinic facilities and treatment spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 transition-all animate-slide-in">
            <p className="text-lg text-gray-700">
              Welcome to the AYUSH HEALTH CARE gallery. Here you can see our modern, clean clinic spaces designed with patient comfort in mind. Our facility combines advanced medical technology with a soothing, healing environment.
            </p>
          </div>

          {/* Clinic Exterior */}
          <SectionHeading
            title="Clinic Building"
            subtitle="Our dedicated healthcare facility in Barasat"
            centered={true}
            className="animate-fade-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clinicBuildingImages.map((img, idx) => (
              <div
                key={`exterior-img-${idx}`}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover animate-fade-in"
                />
              </div>
            ))}
          </div>

          {/* Reception Area */}
          <SectionHeading
            title="Reception & Waiting Area"
            subtitle="Comfortable spaces designed for patient comfort"
            centered={true}
            className="animate-fade-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={`reception-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in">
                <img
                  src="/placeholder.svg"
                  alt={`Reception Area ${num}`}
                  className="w-full h-64 object-cover animate-fade-in"
                />
              </div>
            ))}
          </div>

          {/* Consultation Rooms */}
          <SectionHeading
            title="Consultation Rooms"
            subtitle="Private spaces for detailed discussions with Dr. S. Soma Rao"
            centered={true}
            className="animate-fade-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={`consultation-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in">
                <img
                  src="/placeholder.svg"
                  alt={`Consultation Room ${num}`}
                  className="w-full h-64 object-cover animate-fade-in"
                />
              </div>
            ))}
          </div>

          {/* Treatment Rooms */}
          <SectionHeading
            title="Treatment Facilities"
            subtitle="State-of-the-art equipment for advanced anorectal care"
            centered={true}
            className="animate-fade-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={`treatment-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in">
                <img
                  src="/placeholder.svg"
                  alt={`Treatment Room ${num}`}
                  className="w-full h-64 object-cover animate-fade-in"
                />
              </div>
            ))}
          </div>

          {/* Our Team */}
          <SectionHeading
            title="Our Team"
            subtitle="Dedicated professionals committed to your care"
            centered={true}
            className="animate-fade-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in">
              <img
                src="/lovable-uploads/711a9b0a-34ed-466f-a392-0cc0717c33e0.png"
                alt="Dr. S. Soma Rao"
                className="w-full h-64 object-cover animate-fade-in"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800">Dr. S. Soma Rao</h3>
                <p className="text-gray-600">Lead Surgeon</p>
              </div>
            </div>
            {[1, 2, 3].map((num) => (
              <div key={`team-${num}`} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in">
                <img
                  src="/placeholder.svg"
                  alt={`Staff Member ${num}`}
                  className="w-full h-64 object-cover animate-fade-in"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{`Staff Member ${num}`}</h3>
                  <p className="text-gray-600">{`Role ${num}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center transition-all animate-slide-in">
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


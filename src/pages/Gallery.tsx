import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Phone, Video } from "lucide-react";

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

const receptionAreaImages = [
  {
    src: "/lovable-uploads/16d848b0-a7b1-44d4-a693-ffb75dac2c85.png",
    alt: "Reception area with desk, chairs, and global decoration"
  },
  {
    src: "/lovable-uploads/6b1ae3ff-87f8-4780-a0c6-81b9af1b84b5.png",
    alt: "Reception desk with staff member and decorative elements"
  }
];

const consultationRoomImages = [
  {
    src: "/lovable-uploads/033a2ecf-e6db-41b0-b421-fcfe6a03921c.png", 
    alt: "Consultation room with desk, chairs, and decorative elements"
  },
  {
    src: "/placeholder.svg", 
    alt: "Consultation Room 2"
  },
  {
    src: "/placeholder.svg", 
    alt: "Consultation Room 3"
  }
];

const treatmentFacilityImages = [
  {
    src: "/lovable-uploads/8e3599e2-5cf8-43e7-8db0-e8f5bc3d7771.png",
    alt: "Treatment room with sliding glass partitions and medical examination table"
  },
  {
    src: "/placeholder.svg", 
    alt: "Treatment Room 2"
  },
  {
    src: "/placeholder.svg", 
    alt: "Treatment Room 3"
  },
  {
    src: "/placeholder.svg", 
    alt: "Treatment Room 4"
  },
  {
    src: "/placeholder.svg", 
    alt: "Treatment Room 5"
  },
  {
    src: "/placeholder.svg", 
    alt: "Treatment Room 6"
  }
];

const doctors = [
  {
    name: "Dr. S. Soma Rao",
    role: "Lead Surgeon",
    image: "/lovable-uploads/f9eb8feb-91f9-48f2-b2d0-fd0861f2917b.png"
  },
  {
    name: "Dr. S.K Rao",
    role: "Senior Surgeon",
    image: "/lovable-uploads/81d5c032-a05e-4a42-8b14-2b709113b2f9.png"
  }
];

const clinicVideos = [
  {
    src: "/lovable-uploads/video-placeholder.mp4",
    poster: "/placeholder.svg",
    title: "Clinic Tour",
    description: "Take a virtual tour of our modern medical facility"
  },
  {
    src: "/lovable-uploads/video-placeholder.mp4",
    poster: "/placeholder.svg",
    title: "Treatment Procedures",
    description: "Learn about our treatment procedures"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 container mx-auto px-4">
            {receptionAreaImages.map((img, idx) => (
              <div 
                key={`reception-${idx}`} 
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-96 object-cover animate-fade-in"
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
            {consultationRoomImages.map((img, idx) => (
              <div 
                key={`consultation-${idx}`} 
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

          {/* Treatment Facilities */}
          <SectionHeading
            title="Treatment Facilities"
            subtitle="State-of-the-art equipment for advanced anorectal care"
            centered={true}
            className="animate-fade-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {treatmentFacilityImages.map((img, idx) => (
              <div 
                key={`treatment-${idx}`} 
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

          {/* Videos Section */}
          <SectionHeading
            title="Video Gallery"
            subtitle="Watch our informative videos about the clinic and procedures"
            centered={true}
            className="animate-fade-in"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 container mx-auto px-4">
            {clinicVideos.map((video, idx) => (
              <div 
                key={`video-${idx}`}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in"
              >
                <video
                  controls
                  poster={video.poster}
                  className="w-full aspect-video object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
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
            {doctors.map((doctor, index) => (
              <div 
                key={`team-${index}`} 
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale animate-scale-in"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover animate-fade-in"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.role}</p>
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

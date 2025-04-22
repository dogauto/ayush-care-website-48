import React from 'react';
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Phone, Clock, Check, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ServiceCard = ({ title, description, imageUrl, link }: { title: string; description: string; imageUrl: string; link: string }) => {
  return (
    <Link to={link} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-ayush-600 font-medium">
          <span>Learn More</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

const TestimonialCard = ({ name, condition, quote }: { name: string; condition: string; quote: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="mb-4">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 12H6C5.4 12 5 12.4 5 13V21C5 21.6 5.4 22 6 22H10V26C10 26.6 10.4 27 11 27H12C12.6 27 13 26.6 13 26V13C13 12.4 12.6 12 12 12H14C14.6 12 15 11.6 15 11V10C15 9.4 14.6 9 14 9H6C5.4 9 5 9.4 5 10V11C5 11.6 5.4 12 6 12ZM31 12H23C22.4 12 22 12.4 22 13V21C22 21.6 22.4 22 23 22H27V26C27 26.6 27.4 27 28 27H29C29.6 27 30 26.6 30 26V13C30 12.4 29.6 12 29 12H31C31.6 12 32 11.6 32 11V10C32 9.4 31.6 9 31 9H23C22.4 9 22 9.4 22 10V11C22 11.6 22.4 12 23 12H31Z" fill="#0EA5E9" opacity="0.2" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div>
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{condition}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="Advanced treatments for all anorectal diseases with a blend of Ayurvedic wisdom and modern techniques."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Piles (হেমোরয়েডস)"
            description="Advanced treatment for hemorrhoids with minimal pain and quick recovery."
            imageUrl="/lovable-uploads/49449a39-c5a9-4012-8208-e6065ecc117b.png"
            link="/services#piles"
          />
          <ServiceCard 
            title="Fissure (পায়খানার কাটা)"
            description="Effective relief from painful anal fissures with long-lasting results."
            imageUrl="/lovable-uploads/230315df-fc8d-448d-8a0b-008c20bf55e0.png"
            link="/services#fissure"
          />
          <ServiceCard 
            title="Fistula (ভগন্দর)"
            description="Specialized Ksharsutra therapy for complete healing of fistula."
            imageUrl="/lovable-uploads/f0cf37a4-a252-4119-bc5a-24df8d6f75b3.png"
            link="/services#fistula"
          />
          <ServiceCard 
            title="Rectal Prolapse (মলদ্বারের পতন)"
            description="Painless and effective cure for rectal prolapse without complications."
            imageUrl="/lovable-uploads/e53c4a44-cdf6-49cd-b0e1-cc6f5c272fea.png"
            link="/services#prolapse"
          />
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton to="/services" variant="primary" icon={<ArrowRight size={16} />}>
            View All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

const StaffMembers = () => {
  const doctors = [
    {
      name: "Dr. S. Soma Rao",
      role: "Expert in Anorectal Diseases",
      experience: "20+ Years",
      imageUrl: "/lovable-uploads/711a9b0a-34ed-466f-a392-0cc0717c33e0.png",
      pronouns: "(she/her)",
      qualification: "Specialist in Anorectal Conditions"
    },
    {
      name: "Dr. S.K Rao",
      role: "Senior Surgeon",
      experience: "45+ Years",
      imageUrl: "/lovable-uploads/b966ae11-e2f5-447e-ae45-1c88cd8e945e.png",
      pronouns: "(he/him)",
      qualification: "B.U.M.S (Cal)"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Doctors" 
          subtitle="Meet the experts dedicated to providing compassionate and advanced anorectal care"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
                <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {doctor.name} <span className="text-sm text-gray-600">{doctor.pronouns}</span>
                </h3>
                <p className="text-gray-600">{doctor.role}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Experience:</span> {doctor.experience}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Qualification:</span> {doctor.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-ayush-50 to-herb-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                Complete Anorectal Care with Compassion & Expertise
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Dr. S. Soma Rao brings 20 years of experience in treating Piles, Fissure, Fistula, and Rectal Prolapse with a blend of Ayurvedic-Ksharsutra and modern surgical techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  to="/contact" 
                  variant="primary" 
                  size="lg"
                  icon={<Phone size={20} />}
                >
                  Book Appointment
                </CTAButton>
                <CTAButton 
                  to="/services" 
                  variant="outline" 
                  size="lg"
                >
                  Our Services
                </CTAButton>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-4">
                <img 
                  src="/lovable-uploads/711a9b0a-34ed-466f-a392-0cc0717c33e0.png"
                  alt="Dr. S. Soma Rao" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <h3 className="text-5xl font-bold text-ayush-600 mb-2">20+</h3>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <h3 className="text-5xl font-bold text-ayush-600 mb-2">50,000+</h3>
              <p className="text-gray-700 font-medium">Patients Treated</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <h3 className="text-5xl font-bold text-ayush-600 mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Cure Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Dr. S. Soma Rao" 
            subtitle="Expert in Anorectal Diseases with 20+ Years of Experience"
            centered
          />
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="rounded-full overflow-hidden aspect-square bg-white border-4 border-white shadow-lg max-w-xs mx-auto">
                <img 
                  src="/lovable-uploads/711a9b0a-34ed-466f-a392-0cc0717c33e0.png"
                  alt="Dr. S. Soma Rao" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                Dr. S. Soma Rao is a highly experienced surgeon specializing in anorectal diseases. With over two decades of clinical expertise, she has successfully treated more than 50,000 patients suffering from conditions like Piles, Fissure, Fistula, and Rectal Prolapse.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Her unique approach combines the ancient wisdom of Ayurvedic-Ksharsutra treatments with modern surgical techniques, providing comprehensive care that addresses both the symptoms and root causes of anorectal conditions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center">
                  <Check size={20} className="text-herb-600 mr-2" />
                  <span className="text-gray-700">100% Cure Assurance</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-herb-600 mr-2" />
                  <span className="text-gray-700">Personalized Treatment Plans</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-herb-600 mr-2" />
                  <span className="text-gray-700">Minimal Pain & Discomfort</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-herb-600 mr-2" />
                  <span className="text-gray-700">Quick Recovery Time</span>
                </div>
              </div>
              <CTAButton to="/about" variant="secondary" icon={<ArrowRight size={16} />}>
                Learn More About Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F1F0FB]">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Dr. S.K Rao"
            subtitle="Senior Surgeon & Proctology Specialist with 45+ Years of Experience"
            centered
          />
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="rounded-full overflow-hidden aspect-square bg-white border-4 border-white shadow-lg max-w-xs mx-auto">
                <img
                  src="/lovable-uploads/b966ae11-e2f5-447e-ae45-1c88cd8e945e.png"
                  alt="Dr. S.K Rao"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                Dr. S.K Rao <span className="italic">(he/him)</span> is our senior surgeon with <span className="font-bold">45+ years of expertise</span> in proctology. He is renowned as the best doctor and specialist for all proctological problems, bringing relief to even the toughest cases.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                He is recognized for handling complex and chronic conditions, always ensuring personalized care with the utmost compassion and advanced surgical skills.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center">
                  <Check size={20} className="text-purple-600 mr-2" />
                  <span className="text-gray-700">Senior Surgeon (B.U.M.S (Cal))</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-purple-600 mr-2" />
                  <span className="text-gray-700">45+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-purple-600 mr-2" />
                  <span className="text-gray-700">Expert in advanced proctological care</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-purple-600 mr-2" />
                  <span className="text-gray-700">Trusted by thousands of patients</span>
                </div>
              </div>
              <CTAButton to="/about" variant="secondary" icon={<ArrowRight size={16} />}>
                See Dr. S.K Rao's Credentials
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-16 bg-gradient-to-r from-ayush-50 to-herb-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Advanced Treatment Options" 
            subtitle="We offer cutting-edge treatment methods for complete recovery from anorectal conditions."
            centered
          />
          
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-ayush-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-ayush-700 text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Laser Surgery</h3>
              </div>
              <p className="text-gray-700 mb-4">
                State-of-the-art laser treatment offering precision, minimal discomfort, and faster healing. Ideal for patients seeking quick recovery with excellent results.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-ayush-600 mr-2" />
                  <span className="text-gray-700">Modern & painless procedure</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-ayush-600 mr-2" />
                  <span className="text-gray-700">Minimal hospital stay</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-ayush-600 mr-2" />
                  <span className="text-gray-700">Fast recovery time</span>
                </li>
              </ul>
              <CTAButton to="/treatments#laser" variant="secondary" size="default">
                Learn More
              </CTAButton>
            </div>
            
            <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-herb-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-herb-700 text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Ayurvedic Ksharsutra</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Ancient Ayurvedic technique perfected for modern use. This natural treatment is particularly effective for complex fistulas and offers a holistic approach to healing.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Check size={18} className="text-herb-600 mr-2" />
                  <span className="text-gray-700">100% Ayurvedic method</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-herb-600 mr-2" />
                  <span className="text-gray-700">No major surgery required</span>
                </li>
                <li className="flex items-center">
                  <Check size={18} className="text-herb-600 mr-2" />
                  <span className="text-gray-700">No side effects</span>
                </li>
              </ul>
              <CTAButton to="/treatments#ksharsutra" variant="secondary" size="default">
                Learn More
              </CTAButton>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <CTAButton to="/contact" variant="primary" size="lg" icon={<Phone size={20} />}>
              Book Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Patient Testimonials" 
            subtitle="Hear from our patients who have experienced successful treatments and transformative results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Rajesh Sharma"
              condition="Piles (Grade III)"
              quote="After years of suffering, Dr. Soma Rao's treatment finally gave me relief. The procedure was minimally painful and recovery was quick. I'm grateful for their care."
            />
            <TestimonialCard 
              name="Priya Gupta"
              condition="Chronic Fissure"
              quote="I had given up hope after trying many treatments for my chronic fissure. The team at AYUSH Health Care treated me with such care. The pain is completely gone now."
            />
            <TestimonialCard 
              name="Amit Das"
              condition="Fistula"
              quote="The Ksharsutra treatment I received was remarkable. After suffering for 3 years with recurring fistula, I'm finally cured. Thank you Dr. Soma Rao!"
            />
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton to="/testimonials" variant="secondary" icon={<ArrowRight size={16} />}>
              Read More Testimonials
            </CTAButton>
          </div>
        </div>
      </section>

      <StaffMembers />

      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Find Relief?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. S. Soma Rao to discuss your condition and learn about treatment options that best suit your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg" 
              icon={<Clock size={20} />}
              className="bg-white text-ayush-700"
            >
              Book Appointment
            </CTAButton>
            <CTAButton 
              to="tel:965063755" 
              variant="outline" 
              size="lg" 
              icon={<Phone size={20} />}
              className="border-white text-white hover:bg-white/10"
            >
              Call Now: 9650 63755
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, Phone } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">About Us</h1>
            <p className="text-lg text-gray-600">
              Learn about our clinic's mission, our expert doctor, and our commitment to providing the best care for anorectal diseases.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="rounded-xl overflow-hidden bg-white shadow-lg">
                <img 
                  src="/lovable-uploads/711a9b0a-34ed-466f-a392-0cc0717c33e0.png"
                  alt="Dr. S. Soma Rao" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <SectionHeading 
                title="Dr. S. Soma Rao" 
                subtitle="Expert Surgeon Specializing in Anorectal Diseases"
                centered={false}
              />
              
              <p className="text-lg text-gray-700 mb-6">
                Dr. S. Soma Rao is a highly skilled surgeon with over 20 years of dedicated experience in the treatment of anorectal diseases. His expertise spans both traditional Ayurvedic methods and modern surgical techniques, allowing him to provide comprehensive care tailored to each patient's needs.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Throughout his distinguished career, Dr. Rao has successfully treated more than 50,000 patients suffering from conditions like Piles (Hemorrhoids), Fissure, Fistula, and Rectal Prolapse. His unique approach combines the time-tested wisdom of Ayurvedic-Ksharsutra therapy with advanced surgical interventions, ensuring optimal results with minimal discomfort.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Specialized Training</h4>
                    <p className="text-gray-600">Extensive training in both Ayurvedic and modern surgical techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Patient-Centered Approach</h4>
                    <p className="text-gray-600">Focuses on personalized care plans tailored to individual needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Proven Results</h4>
                    <p className="text-gray-600">Consistently achieves excellent outcomes with high patient satisfaction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Compassionate Care</h4>
                    <p className="text-gray-600">Known for his gentle approach and empathetic communication</p>
                  </div>
                </div>
              </div>
              
              <CTAButton 
                to="/contact" 
                variant="primary" 
                size="lg" 
                icon={<Phone size={20} />}
              >
                Book a Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Clinic's Legacy" 
            subtitle="A tradition of excellence in anorectal care"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              AYUSH HEALTH CARE was established with a vision to provide comprehensive, effective, and compassionate care for patients suffering from anorectal diseases. Our clinic has grown to become a trusted name in specialized treatment, combining the best of traditional Ayurvedic wisdom with modern medical advancements.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              For over two decades, we have been serving the community in Kolkata and surrounding areas, helping thousands of patients overcome painful and often embarrassing conditions with dignity and care. Our approach focuses not just on treating symptoms but addressing the root causes for long-lasting relief.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              What began as a small clinic has now evolved into a specialized center of excellence, while maintaining the personal touch and individualized attention that has always been our hallmark. We take pride in our high success rate and the trust our patients place in us for their anorectal health needs.
            </p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-5xl font-bold text-ayush-600 mb-2">20+</h3>
                <p className="text-gray-700">Years of Service</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-5xl font-bold text-ayush-600 mb-2">50k+</h3>
                <p className="text-gray-700">Patients Treated</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-5xl font-bold text-ayush-600 mb-2">100%</h3>
                <p className="text-gray-700">Cure Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Treatment Philosophy" 
            subtitle="Blending ancient wisdom with modern techniques"
            centered={true}
          />
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg"
                alt="Treatment Philosophy" 
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Holistic Approach to Anorectal Care</h3>
              <p className="text-lg text-gray-700 mb-6">
                At AYUSH HEALTH CARE, we believe in addressing not just the symptoms but the underlying causes of anorectal conditions. Our approach combines the time-tested wisdom of Ayurveda, particularly the specialized Ksharsutra therapy, with contemporary surgical techniques.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Treatment Plans</h3>
              <p className="text-lg text-gray-700 mb-6">
                We understand that each patient is unique, with different needs and circumstances. This is why we create individualized treatment plans after thorough assessment of your condition, medical history, lifestyle, and personal preferences.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Focus on Minimal Discomfort</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our treatments are designed to minimize pain and discomfort while maximizing effectiveness. Whether through gentle Ayurvedic procedures or advanced laser techniques, we prioritize patient comfort at every stage.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Recovery as the Goal</h3>
              <p className="text-lg text-gray-700">
                Our ultimate aim is not temporary relief but complete, lasting recovery. We take pride in our 100% cure rate and focus on treatments that prevent recurrence, allowing you to return to a normal, pain-free life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Experience Expert Care at AYUSH HEALTH CARE
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. S. Soma Rao to discuss your condition and learn about the most suitable treatment options for you.
          </p>
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg" 
            className="bg-white text-ayush-700"
          >
            Book Your Appointment Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default About;

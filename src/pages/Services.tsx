import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, Phone } from "lucide-react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Services</h1>
            <p className="text-lg text-gray-600">
              Comprehensive treatment options for all anorectal conditions using a blend of Ayurvedic and modern techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Specialized Anorectal Care</h2>
            <p className="text-lg text-gray-700 mb-6">
              At AYUSH HEALTH CARE, we specialize in treating a range of anorectal conditions using both Ayurvedic-Ksharsutra therapy and modern surgical techniques. Our treatments offer:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-center">
                <Check size={24} className="text-herb-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">100% Cure Assurance</span>
              </div>
              <div className="flex items-center">
                <Check size={24} className="text-herb-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">No Side Effects</span>
              </div>
              <div className="flex items-center">
                <Check size={24} className="text-herb-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Personalized Treatment Plans</span>
              </div>
              <div className="flex items-center">
                <Check size={24} className="text-herb-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Fast Recovery & Minimal Pain</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              Dr. S. Soma Rao has successfully treated over 50,000 patients with these conditions, with a consistent record of excellent outcomes and patient satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Piles Treatment */}
      <section className="py-16 bg-gray-50" id="piles">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/9519ce77-7741-4810-9d01-5a6d095f994d.png"
                alt="Medical illustration of Piles" 
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Piles (হেমোরয়েডস)" 
                subtitle="Effective, permanent relief from hemorrhoids"
                centered={false}
              />
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">What are Piles?</h3>
              <p className="text-gray-700 mb-6">
                Piles, or hemorrhoids, are swollen veins in the lower part of the anus and rectum. When the walls of these vessels stretch, they can become irritated, particularly during bowel movements. They may be internal (inside the rectum) or external (under the skin around the anus).
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Common Symptoms</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Painless bleeding during bowel movements</li>
                <li>Itching or irritation in the anal region</li>
                <li>Pain or discomfort</li>
                <li>Swelling around the anus</li>
                <li>A lump near the anus, which may be sensitive or painful</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Treatment Approach</h3>
              <p className="text-gray-700 mb-6">
                At AYUSH HEALTH CARE, we offer both Ayurvedic and modern treatments for piles, depending on the severity and type of your condition. Our methods include:
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ayurvedic Medications</h4>
                    <p className="text-gray-600 text-sm">Herbal preparations to reduce inflammation and pain</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ksharsutra Therapy</h4>
                    <p className="text-gray-600 text-sm">A specialized Ayurvedic technique for grade II-III hemorrhoids</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Laser Treatment</h4>
                    <p className="text-gray-600 text-sm">Advanced, minimally invasive procedure for quick recovery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Dietary and Lifestyle Guidance</h4>
                    <p className="text-gray-600 text-sm">Personalized advice to prevent recurrence</p>
                  </div>
                </div>
              </div>
              
              <CTAButton 
                to="/contact" 
                variant="primary" 
                icon={<Phone size={18} />}
              >
                Consult for Piles Treatment
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Fissure Treatment */}
      <section className="py-16" id="fissure">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/75aeec72-4cb2-4926-83a3-d6e2132e571c.png"
                alt="Chronic Anal Fissure Medical Illustration" 
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Fissure-in-Ano (পায়খানার কাটা)" 
                subtitle="Permanent relief from painful anal fissures"
                centered={false}
              />
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">What is an Anal Fissure?</h3>
              <p className="text-gray-700 mb-6">
                An anal fissure is a small tear in the thin, moist tissue that lines the anus. This condition can cause severe pain during bowel movements, often with bleeding and intense burning that may continue for several hours afterward. Chronic fissures can lead to complications if left untreated.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Common Symptoms</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Sharp pain during bowel movements</li>
                <li>Burning sensation lasting hours after defecation</li>
                <li>Bright red blood on toilet paper or stool</li>
                <li>Visible crack or tear in the anus</li>
                <li>Difficulty and pain during bowel movements</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Treatment Approach</h3>
              <p className="text-gray-700 mb-6">
                AYUSH HEALTH CARE offers specialized treatments for anal fissures that focus on healing the tear, relaxing the anal sphincter muscle, and preventing recurrence:
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ayurvedic Topical Treatments</h4>
                    <p className="text-gray-600 text-sm">Specialized herbal preparations to promote healing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Minimal Surgical Intervention</h4>
                    <p className="text-gray-600 text-sm">When required for chronic or severe cases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Pain Management</h4>
                    <p className="text-gray-600 text-sm">Effective techniques to minimize discomfort during healing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Preventative Care Program</h4>
                    <p className="text-gray-600 text-sm">Dietary and lifestyle changes to prevent recurrence</p>
                  </div>
                </div>
              </div>
              
              <CTAButton 
                to="/contact" 
                variant="primary" 
                icon={<Phone size={18} />}
              >
                Consult for Fissure Treatment
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Fistula Treatment */}
      <section className="py-16 bg-gray-50" id="fistula">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg"
                alt="Fistula Treatment" 
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Fistula-in-Ano (ভগন্দর)" 
                subtitle="Advanced Ksharsutra therapy for complete healing"
                centered={false}
              />
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">What is an Anal Fistula?</h3>
              <p className="text-gray-700 mb-6">
                An anal fistula is an abnormal tunnel connecting the anal canal to the skin around the anus. It often develops as a result of an infection near the anus causing an abscess that doesn't heal properly. Fistulas can be painful and may cause continuous drainage of pus, which can lead to hygiene issues and skin irritation.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Common Symptoms</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Pain that worsens when sitting or with bowel movements</li>
                <li>Persistent discharge or drainage from the anal area</li>
                <li>Redness, swelling, and tenderness around the anus</li>
                <li>Bleeding from the fistula opening</li>
                <li>Difficulty controlling bowel movements in severe cases</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Treatment Approach</h3>
              <p className="text-gray-700 mb-6">
                AYUSH HEALTH CARE specializes in the treatment of anal fistulas using Ksharsutra therapy, a time-tested Ayurvedic technique that is particularly effective for this condition:
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ksharsutra Therapy</h4>
                    <p className="text-gray-600 text-sm">A specialized Ayurvedic procedure using medicated thread</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Gradual Cutting and Healing</h4>
                    <p className="text-gray-600 text-sm">Progressive treatment that cuts through the fistula while simultaneously healing it</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Minimal Scarring</h4>
                    <p className="text-gray-600 text-sm">Treatment approach that preserves sphincter function and reduces scarring</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Low Recurrence Rate</h4>
                    <p className="text-gray-600 text-sm">Our approach ensures complete healing with minimal chance of recurrence</p>
                  </div>
                </div>
              </div>
              
              <CTAButton 
                to="/contact" 
                variant="primary" 
                icon={<Phone size={18} />}
              >
                Consult for Fistula Treatment
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Rectal Prolapse Treatment */}
      <section className="py-16" id="prolapse">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg"
                alt="Rectal Prolapse Treatment" 
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                title="Rectal Prolapse (মলদ্বারের পতন)" 
                subtitle="Effective treatment for rectal tissue protrusion"
                centered={false}
              />
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">What is Rectal Prolapse?</h3>
              <p className="text-gray-700 mb-6">
                Rectal prolapse occurs when part or all of the rectum's lining slides out through the anal opening. This condition can range from mild (occurring only during bowel movements) to severe (where the rectum protrudes constantly). It is more common in older adults and can significantly impact quality of life if left untreated.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Common Symptoms</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Tissue protrusion from the anus</li>
                <li>Mucus or bloody discharge from the protruding tissue</li>
                <li>Difficulty controlling bowel movements</li>
                <li>Feeling of incomplete evacuation after bowel movements</li>
                <li>Anal discomfort, pain, or bleeding</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Our Treatment Approach</h3>
              <p className="text-gray-700 mb-6">
                At AYUSH HEALTH CARE, we offer comprehensive treatment for rectal prolapse that addresses both the symptoms and underlying causes:
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Non-Surgical Treatments</h4>
                    <p className="text-gray-600 text-sm">For mild cases, including dietary modifications and pelvic floor exercises</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Ayurvedic Approaches</h4>
                    <p className="text-gray-600 text-sm">Specialized treatments to strengthen the rectal muscles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Surgical Intervention</h4>
                    <p className="text-gray-600 text-sm">Minimally invasive procedures for advanced cases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={20} className="text-herb-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Complete Recovery Program</h4>
                    <p className="text-gray-600 text-sm">Comprehensive approach to ensure long-term relief</p>
                  </div>
                </div>
              </div>
              
              <CTAButton 
                to="/contact" 
                variant="primary" 
                icon={<Phone size={18} />}
              >
                Consult for Prolapse Treatment
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Benefits of Our Treatment Approach" 
            subtitle="Why patients choose AYUSH HEALTH CARE for anorectal treatments"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-ayush-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-ayush-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">100% Cure Assurance</h3>
              <p className="text-gray-600">
                Our treatment methods have consistently demonstrated complete resolution of symptoms with minimal chance of recurrence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-herb-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">No Side Effects</h3>
              <p className="text-gray-600">
                Our Ayurvedic approaches and minimally invasive techniques ensure treatment without harmful side effects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-ayush-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-ayush-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Personalized Plans</h3>
              <p className="text-gray-600">
                We create individualized treatment plans tailored to each patient's specific condition and needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-herb-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Fast Recovery</h3>
              <p className="text-gray-600">
                Our treatments are designed to promote quick healing with minimal downtime and pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Consult With Confidence
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            At AYUSH HEALTH CARE, we understand the sensitive nature of anorectal conditions. We assure you of complete privacy, compassionate care, and long-term support throughout your treatment journey.
          </p>
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg" 
            icon={<Phone size={20} />}
            className="bg-white text-ayush-700"
          >
            Book Your Consultation Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Services;

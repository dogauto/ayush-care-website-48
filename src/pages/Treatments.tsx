import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Phone } from "lucide-react";

const Treatments = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-ayush-50 to-herb-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Advanced Anorectal Treatments
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Combining modern surgical techniques with traditional Ayurvedic wisdom for comprehensive care
            </p>
            <CTAButton 
              to="/contact" 
              variant="primary" 
              size="lg"
              className="animate-scale-in"
            >
              Schedule Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Conditions We Treat" 
            subtitle="Specialized care for all anorectal disorders"
            centered={true}
            className="animate-scale-in"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Hemorrhoids (Piles)",
                description: "Swollen veins in the lower rectum and anus that can cause pain, itching, and bleeding.",
                image: "/lovable-uploads/e9c9c9c9-e9c9-4e9c-9c9c-e9c9c9c9e9c9.png"
              },
              {
                title: "Anal Fissure",
                description: "A small tear in the thin, moist tissue that lines the anus, causing pain during bowel movements.",
                image: "/lovable-uploads/e9c9c9c9-e9c9-4e9c-9c9c-e9c9c9c9e9c9.png"
              },
              {
                title: "Anal Fistula",
                description: "An abnormal tunnel between the anal canal and the skin around the anus.",
                image: "/lovable-uploads/e9c9c9c9-e9c9-4e9c-9c9c-e9c9c9c9e9c9.png"
              },
              {
                title: "Rectal Prolapse",
                description: "A condition where the rectum slips out of its normal position and protrudes through the anus.",
                image: "/lovable-uploads/e9c9c9c9-e9c9-4e9c-9c9c-e9c9c9c9e9c9.png"
              }
            ].map((condition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all animate-scale-in hover-scale">
                <div className="h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={condition.image || "/placeholder.svg"} 
                    alt={condition.title}
                    className="w-full h-full object-cover animate-fade-in"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{condition.title}</h3>
                <p className="text-gray-600">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Treatments */}
      <section id="advanced-treatments" className="py-16 animate-fade-in">
        <div className="max-w-6xl mx-auto w-full px-4 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold text-ayush-700 mb-8 animate-scale-in">
            Advanced Treatments
          </h2>

          {/* Laser Surgery */}
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/9519ce77-7741-4810-9d01-5a6d095f994d.png"
                alt="Laser Surgery"
                className="rounded-xl shadow-md w-full h-auto object-cover animate-scale-in hover-scale"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Laser Surgery</h3>
              <p className="text-gray-700 mb-4">
                Our clinic offers state-of-the-art laser surgery for hemorrhoids and other anorectal conditions. This minimally invasive procedure uses precise laser energy to remove or shrink hemorrhoidal tissue with minimal bleeding and pain.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Minimal discomfort and quick recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Precise targeting of affected tissue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Reduced risk of complications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Outpatient procedure with no overnight stay</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ayurvedic Ksharsutra Therapy */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 animate-fade-in mt-12">
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/7e8ef28e-62fa-4fce-b75d-9c4971deda1e.png"
                alt="Ksharsutra Therapy"
                className="rounded-xl shadow-md w-full h-auto object-cover animate-scale-in hover-scale"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ayurvedic Ksharsutra Therapy</h3>
              <p className="text-gray-700 mb-4">
                Ksharsutra is an ancient Ayurvedic parasurgical treatment especially effective for anal fistula. This technique uses a medicated thread that gradually cuts and heals the fistulous tract simultaneously, eliminating the need for extensive surgery.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Recognized by the WHO as effective treatment for fistula</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Minimal recurrence rate compared to conventional surgery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Preserves anal sphincter function</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>No hospitalization required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Treatment Process" 
            subtitle="What to expect when you choose AYUSH HEALTH CARE"
            centered={true}
            className="animate-scale-in"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              {[
                {
                  step: "Initial Consultation",
                  description: "A thorough examination and discussion of your symptoms, medical history, and lifestyle factors to determine the exact nature of your condition."
                },
                {
                  step: "Diagnosis & Assessment",
                  description: "Using both modern diagnostic tools and traditional Ayurvedic assessment methods to identify the root cause of your problem."
                },
                {
                  step: "Personalized Treatment Plan",
                  description: "Development of a customized treatment approach that may include surgical procedures, Ayurvedic therapies, dietary modifications, and lifestyle changes."
                },
                {
                  step: "Treatment Execution",
                  description: "Implementation of the selected treatment in our state-of-the-art facility under the expert care of Dr. S. Soma Rao."
                },
                {
                  step: "Follow-up & Recovery Support",
                  description: "Comprehensive post-treatment care including follow-up visits, dietary guidance, and lifestyle recommendations to ensure complete recovery and prevent recurrence."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 animate-scale-in">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-ayush-600 to-herb-600 flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.step}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Common questions about our treatments"
            centered={true}
            className="animate-scale-in"
          />
          
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How long does recovery take after treatment?",
                  answer: "Recovery time varies depending on the condition and treatment method. Most patients can return to normal activities within 1-2 weeks after laser surgery, while Ksharsutra therapy may require a longer healing period of 4-6 weeks. Dr. Rao will provide specific recovery guidelines based on your individual case."
                },
                {
                  question: "Are the treatments painful?",
                  answer: "We prioritize patient comfort during all procedures. Laser surgery is performed under local anesthesia, minimizing pain during the procedure. Ksharsutra therapy may cause mild discomfort during thread changes, but pain management options are provided. Most patients report minimal post-procedure pain compared to conventional surgical methods."
                },
                {
                  question: "What is the success rate of your treatments?",
                  answer: "Our clinic maintains a success rate of over 95% for hemorrhoid treatments and 90% for fistula cases. The combination of modern techniques with Ayurvedic principles significantly reduces recurrence rates compared to conventional treatments alone."
                },
                {
                  question: "Will I need to stay overnight at the clinic?",
                  answer: "Most of our procedures are performed on an outpatient basis, allowing you to return home the same day. In rare cases involving complex conditions, an overnight stay might be recommended for observation."
                },
                {
                  question: "Are dietary changes necessary after treatment?",
                  answer: "Yes, dietary modifications are an essential part of the healing process and preventing recurrence. We provide comprehensive dietary guidelines tailored to your specific condition, typically emphasizing high-fiber foods, adequate hydration, and avoiding spicy or irritating foods during the recovery period."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="animate-fade-in">
                  <AccordionTrigger className="text-left font-medium text-gray-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ayush-600 to-herb-600 animate-fade-in">
        <div className="container mx-auto px-4 text-center animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Experience Relief?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't let anorectal conditions affect your quality of life. Schedule a consultation with Dr. S. Soma Rao today and take the first step toward lasting relief.
          </p>
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg" 
            icon={<Phone size={20} />}
            className="bg-white text-ayush-700 animate-scale-in"
          >
            Book Your Appointment
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Treatments;

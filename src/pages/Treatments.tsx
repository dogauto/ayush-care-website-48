import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, Phone } from "lucide-react";

const Treatments = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Advanced Treatments</h1>
            <p className="text-lg text-gray-600">
              Discover our specialized treatment approaches combining modern technology and traditional Ayurvedic methods.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="At AYUSH HEALTH CARE, we offer the most effective treatment methods for anorectal conditions"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Under the expert guidance of Dr. S. Soma Rao, our clinic has pioneered advanced treatment approaches that combine the best of modern medical technology with time-tested Ayurvedic methods. We carefully evaluate each patient's condition to recommend the most appropriate treatment option from our specialized techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Laser Surgery */}
      <section className="py-16 bg-gray-50" id="laser">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/8c9eb38b-45b7-44fc-8ffd-1bc8168981aa.png"
                alt="Laser Treatment Procedure" 
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-ayush-100 text-ayush-800 font-semibold px-4 py-1 rounded-full mb-4">
                #1 Recommended
              </div>
              <SectionHeading 
                title="Laser Surgery" 
                subtitle="The Best Solution for Anorectal Conditions"
                centered={false}
              />
              
              <p className="text-lg text-gray-700 mb-6">
                Laser surgery represents the cutting edge of anorectal treatment technology, offering precision, minimal discomfort, and exceptionally fast recovery times. This modern approach is highly effective for treating piles, fissures, and selected cases of fistula.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Key Benefits</h3>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="flex items-start">
                  <Check size={24} className="text-ayush-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Modern & Painless Procedure</h4>
                    <p className="text-gray-600">Precise laser energy seals blood vessels and nerve endings, resulting in minimal pain during and after the procedure.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-ayush-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Minimal Hospital Stay</h4>
                    <p className="text-gray-600">Most laser procedures are performed on an outpatient basis, allowing you to return home the same day.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-ayush-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Very Fast Recovery Time</h4>
                    <p className="text-gray-600">Patients typically resume normal activities within days rather than weeks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-ayush-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">No Blood Loss, No Stitches</h4>
                    <p className="text-gray-600">Laser immediately seals blood vessels, reducing bleeding and eliminating the need for stitches.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-ayush-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Minimal Risk of Recurrence</h4>
                    <p className="text-gray-600">High success rate with very low chances of condition returning after treatment.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">
                Laser treatment is particularly recommended for working professionals and those who need to return to their normal activities quickly with minimal disruption to their daily lives.
              </p>
              
              <CTAButton 
                to="/contact" 
                variant="primary" 
                icon={<Phone size={18} />}
              >
                Consult About Laser Treatment
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurvedic Ksharsutra */}
      <section className="py-16" id="ksharsutra">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg"
                alt="Ksharsutra Therapy" 
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-herb-100 text-herb-800 font-semibold px-4 py-1 rounded-full mb-4">
                Natural Alternative
              </div>
              <SectionHeading 
                title="Ayurvedic Ksharsutra Therapy" 
                subtitle="Time-tested natural approach with proven results"
                centered={false}
              />
              
              <p className="text-lg text-gray-700 mb-6">
                Ksharsutra is a specialized Ayurvedic treatment that has been refined over thousands of years and is particularly effective for fistula treatment. This technique involves the use of a medicated thread that gradually cuts and heals the fistulous tract simultaneously.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">Key Benefits</h3>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">100% Ayurvedic Method</h4>
                    <p className="text-gray-600">Using natural herbs and medicines with proven efficacy for anorectal conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Especially Effective for Complex Fistulas</h4>
                    <p className="text-gray-600">Particularly beneficial for cases where conventional surgery may be risky or has previously failed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">No Need for Major Surgery</h4>
                    <p className="text-gray-600">Avoids the risks and recovery time associated with conventional surgical procedures.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">No Side Effects</h4>
                    <p className="text-gray-600">Natural treatment approach minimizes risks commonly associated with conventional treatments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check size={24} className="text-herb-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Permanent Solution</h4>
                    <p className="text-gray-600">Addresses the root cause of the condition, not just the symptoms, for lasting results.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">
                Ksharsutra therapy is ideal for patients seeking a holistic, natural approach to their anorectal conditions, particularly those with complex fistulas or those who prefer non-surgical interventions.
              </p>
              
              <CTAButton 
                to="/contact" 
                variant="primary" 
                icon={<Phone size={18} />}
              >
                Consult About Ksharsutra Therapy
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Treatment Comparison" 
            subtitle="Understanding the differences between our advanced treatment options"
            centered={true}
          />
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b">Factors</th>
                  <th className="text-left p-4 border-b text-ayush-700">Laser Surgery</th>
                  <th className="text-left p-4 border-b text-herb-700">Ksharsutra Therapy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b font-medium">Best For</td>
                  <td className="p-4 border-b">Piles, Fissures, Early Fistulas</td>
                  <td className="p-4 border-b">Complex Fistulas, Recurrent Cases</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Treatment Duration</td>
                  <td className="p-4 border-b">Single procedure (15-30 minutes)</td>
                  <td className="p-4 border-b">Multiple sessions over weeks</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Recovery Time</td>
                  <td className="p-4 border-b">2-7 days</td>
                  <td className="p-4 border-b">Gradual over treatment period</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Pain Level</td>
                  <td className="p-4 border-b">Minimal</td>
                  <td className="p-4 border-b">Mild to moderate</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Anesthesia</td>
                  <td className="p-4 border-b">Local anesthesia</td>
                  <td className="p-4 border-b">Minimal or none</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Hospital Stay</td>
                  <td className="p-4 border-b">Outpatient (same day)</td>
                  <td className="p-4 border-b">Outpatient (same day)</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Return to Work</td>
                  <td className="p-4 border-b">Usually 2-3 days</td>
                  <td className="p-4 border-b">Can continue during treatment</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Success Rate</td>
                  <td className="p-4 border-b">Very high</td>
                  <td className="p-4 border-b">Very high</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Personalized Guidance */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Personalized Treatment Guidance
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Dr. S. Soma Rao will recommend the most appropriate treatment based on your specific condition, medical history, lifestyle, and personal preferences. Schedule a consultation to discuss which advanced treatment option is best for you.
          </p>
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg" 
            icon={<Phone size={20} />}
            className="bg-white text-ayush-700"
          >
            Book Your Personalized Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Treatments;

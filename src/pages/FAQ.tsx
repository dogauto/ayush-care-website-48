
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Phone, Plus, Minus } from "lucide-react";

const FAQ = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about anorectal conditions and our treatment approaches.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="General Questions" 
              centered={false}
            />
            
            <div className="space-y-4 mb-12">
              <FAQItem
                question="What are the common symptoms of piles (hemorrhoids)?"
                answer="Common symptoms of piles include painless bleeding during bowel movements, itching or irritation in the anal region, pain or discomfort, swelling around the anus, and a lump near the anus that may be sensitive or painful. Internal hemorrhoids may prolapse or protrude through the anus during bowel movements."
              />
              <FAQItem
                question="How can I tell if I have an anal fissure?"
                answer="The most common symptom of an anal fissure is sharp pain during bowel movements, often followed by a burning sensation that can last for several hours. You may also notice bright red blood on toilet paper or on the surface of your stool. In some cases, you might experience spasms in the anal sphincter muscle. If you have these symptoms, it's important to consult a doctor for proper diagnosis."
              />
              <FAQItem
                question="What is the difference between a fissure and a fistula?"
                answer="While both conditions affect the anal area, they are quite different. An anal fissure is a tear or crack in the lining of the anal canal, similar to a paper cut. A fistula is an abnormal tunnel connecting the anal canal to the skin around the anus, usually developing from an infection that didn't heal properly. Fissures primarily cause pain during bowel movements, while fistulas typically cause continuous drainage, discharge, or recurrent abscesses."
              />
              <FAQItem
                question="Are anorectal conditions common?"
                answer="Yes, anorectal conditions are very common. It's estimated that about 50% of adults will experience hemorrhoids by age 50. Anal fissures affect people of all ages, and fistulas, while less common, still affect a significant portion of the population. Despite their prevalence, many people delay seeking treatment due to embarrassment or the belief that symptoms will resolve on their own."
              />
              <FAQItem
                question="When should I see a doctor for anorectal symptoms?"
                answer="You should consult a doctor if you experience rectal bleeding (even if painless), persistent anal pain, changes in bowel habits, or notice a lump in the anal area. Early diagnosis allows for more effective treatment. It's particularly important to rule out more serious conditions that may present with similar symptoms. At AYUSH HEALTH CARE, we provide discreet and compassionate care for all anorectal conditions."
              />
            </div>
            
            <SectionHeading 
              title="Treatment Questions" 
              centered={false}
            />
            
            <div className="space-y-4 mb-12">
              <FAQItem
                question="What is Ksharsutra therapy and how does it work?"
                answer="Ksharsutra therapy is an Ayurvedic parasurgical treatment primarily used for anal fistulas. It involves the use of a medicated thread (Ksharsutra) that is passed through the fistula tract. The thread contains herbs with properties that gradually cut through the tract while simultaneously promoting healing from the base. This method preserves the sphincter muscles and prevents recurrence by ensuring the fistula heals from the inside out. The thread is typically changed weekly until complete healing occurs."
              />
              <FAQItem
                question="How long does it take to recover from laser treatment for piles?"
                answer="Recovery from laser treatment for piles is typically much faster than traditional surgery. Most patients can return to normal activities within 2-3 days, with complete healing occurring within 1-2 weeks. There is minimal post-operative pain, and most patients can resume work quickly. However, individual recovery times may vary based on the severity of the condition and individual healing factors."
              />
              <FAQItem
                question="Is the treatment for anorectal conditions painful?"
                answer="Our treatment approaches focus on minimizing discomfort. Laser procedures are performed under local anesthesia, resulting in minimal pain during and after treatment. Ksharsutra therapy may cause mild discomfort during thread changing, but this is brief and manageable. We provide appropriate pain management guidance for all treatments, and most patients report that the relief from their condition far outweighs any temporary treatment discomfort."
              />
              <FAQItem
                question="Will my condition return after treatment?"
                answer="At AYUSH HEALTH CARE, our treatments are designed to provide permanent relief with a very low recurrence rate. By combining appropriate surgical or Ayurvedic interventions with lifestyle and dietary modifications, we address both the symptoms and underlying causes. For specific conditions like fistulas, Ksharsutra therapy has shown significantly lower recurrence rates compared to conventional surgery. Follow-up care and adherence to post-treatment guidelines further reduce the risk of recurrence."
              />
              <FAQItem
                question="Do I need any special preparation before my appointment?"
                answer="For your initial consultation, no special preparation is needed. Dr. S. Soma Rao will evaluate your condition and may recommend specific tests if necessary. If you're scheduled for a procedure, you'll receive detailed preparation instructions. Generally, we recommend wearing comfortable clothing and, in some cases, may advise a light diet or bowel preparation depending on the planned examination or treatment."
              />
            </div>
            
            <SectionHeading 
              title="Lifestyle & Prevention" 
              centered={false}
            />
            
            <div className="space-y-4">
              <FAQItem
                question="What dietary changes can help prevent anorectal problems?"
                answer="A high-fiber diet is essential for preventing many anorectal conditions. Include plenty of fruits, vegetables, whole grains, and legumes in your meals. Adequate hydration (at least 8 glasses of water daily) helps maintain soft stools. Limit spicy foods, alcohol, and caffeine, which can irritate the digestive system. For patients with existing conditions, we provide personalized dietary recommendations as part of your treatment plan."
              />
              <FAQItem
                question="Can exercise help in preventing or managing anorectal conditions?"
                answer="Regular physical activity helps maintain healthy bowel function and prevents constipation, which is a major risk factor for many anorectal conditions. However, certain high-impact exercises or heavy weightlifting can increase abdominal pressure and potentially worsen conditions like hemorrhoids. We recommend moderate exercise like walking, swimming, or yoga, which improve circulation without excessive strain."
              />
              <FAQItem
                question="How can I prevent constipation, which seems to worsen my symptoms?"
                answer="Constipation is a common trigger for many anorectal conditions. To prevent it: maintain a high-fiber diet, stay well-hydrated, establish a regular toilet routine, respond promptly to the urge to defecate, avoid straining during bowel movements, and stay physically active. Some patients may benefit from fiber supplements or mild natural laxatives. If constipation persists despite these measures, consult with Dr. Rao for personalized advice."
              />
              <FAQItem
                question="Are there specific hygiene practices recommended for anorectal health?"
                answer="Proper anal hygiene is important for preventing infections and irritation. Clean the area gently with warm water after bowel movements, avoiding harsh soaps or alcohol-containing wipes. Pat dry rather than rubbing. If cleaning with toilet paper, use soft, unscented varieties and avoid excessive wiping. For patients with specific conditions, we may recommend medicated washes or sitz baths as part of your treatment protocol."
              />
              <FAQItem
                question="How do pregnancy and childbirth affect anorectal conditions?"
                answer="Pregnancy and childbirth can increase the risk of developing hemorrhoids and anal fissures due to increased pressure in the pelvic region and straining during delivery. Hormonal changes during pregnancy can also contribute to constipation, further increasing risk. For pregnant women or new mothers experiencing anorectal symptoms, we offer safe, appropriate treatments that consider both maternal and child health. Early intervention can prevent complications."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            We understand that you may have specific concerns about your condition. Our team is ready to provide personalized answers and guidance.
          </p>
          <CTAButton 
            to="/contact" 
            variant="primary" 
            size="lg" 
            icon={<Phone size={20} />}
          >
            Contact Us for Answers
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-gray-800">{question}</h3>
        <div className="flex-shrink-0 ml-2">
          {isOpen ? (
            <Minus size={18} className="text-ayush-600" />
          ) : (
            <Plus size={18} className="text-ayush-600" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;

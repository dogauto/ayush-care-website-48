
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Phone, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Patient Testimonials</h1>
            <p className="text-lg text-gray-600">
              Real stories from patients who found relief and healing at AYUSH HEALTH CARE.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Over the past 20 years, Dr. S. Soma Rao and the team at AYUSH HEALTH CARE have successfully treated more than 50,000 patients suffering from anorectal conditions. Here are some of their stories and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <TestimonialCard 
              name="Amit Kumar"
              age="42"
              condition="Piles (Grade III)"
              location="Kolkata"
              quote="After suffering from piles for over 5 years and trying many treatments without success, I finally found relief at AYUSH HEALTH CARE. Dr. Soma Rao's treatment was surprisingly painless and effective. Within just 2 weeks, I was completely cured. I highly recommend this clinic to anyone suffering from piles."
              rating={5}
            />
            <TestimonialCard 
              name="Priya Sharma"
              age="35"
              condition="Chronic Anal Fissure"
              location="Howrah"
              quote="The pain from my fissure was unbearable for months, making even simple daily activities difficult. After Dr. Rao's treatment, I experienced immediate relief and complete healing within weeks. The staff was compassionate and professional throughout my treatment. I'm finally able to live without pain."
              rating={5}
            />
            <TestimonialCard 
              name="Rajesh Das"
              age="48"
              condition="Fistula"
              location="North 24 Parganas"
              quote="I had undergone surgery twice for fistula at other hospitals, but it kept recurring. The Ksharsutra treatment at AYUSH HEALTH CARE permanently solved my problem. Dr. Soma Rao's expertise and the Ayurvedic approach made all the difference. I'm grateful for their care and attention."
              rating={5}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <TestimonialCard 
              name="Sanjay Ghosh"
              age="52"
              condition="Rectal Prolapse"
              location="Barasat"
              quote="After being told I needed major surgery for my rectal prolapse, I sought a second opinion at AYUSH HEALTH CARE. Dr. Rao treated me with a combination of Ayurvedic methods and minimal intervention. I avoided a major surgery and recovered completely. The clinic's approach is truly remarkable."
              rating={5}
            />
            <TestimonialCard 
              name="Meena Devi"
              age="39"
              condition="Piles and Fissure"
              location="Salt Lake"
              quote="I suffered from both piles and fissure which made my daily life miserable. The treatment at AYUSH HEALTH CARE was comfortable and effective. Dr. Soma Rao is not only an expert but also very understanding of patient concerns. I'm now completely free from pain and discomfort."
              rating={5}
            />
            <TestimonialCard 
              name="Rahul Banerjee"
              age="45"
              condition="Complex Fistula"
              location="Kolkata"
              quote="I had a complex fistula that other doctors said would require multiple surgeries. Dr. Rao's Ksharsutra treatment cured my condition completely without major surgery. The healing was gradual but permanent. I recommend AYUSH HEALTH CARE to anyone with anorectal issues."
              rating={5}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Sunita Pal"
              age="56"
              condition="Hemorrhoids"
              location="Madhyamgram"
              quote="After years of using over-the-counter medications for my hemorrhoids with no lasting relief, the laser treatment at AYUSH HEALTH CARE finally solved the problem. The procedure was quick, nearly painless, and I was able to return to normal activities within days. Excellent care and results!"
              rating={5}
            />
            <TestimonialCard 
              name="Deepak Sen"
              age="41"
              condition="Chronic Fistula"
              location="Dum Dum"
              quote="I had suffered from a recurring fistula for years with multiple failed treatments elsewhere. The Ksharsutra therapy at AYUSH HEALTH CARE was life-changing. Dr. Soma Rao patiently explained every step of the treatment. Today I am completely cured with no recurrence for over 2 years."
              rating={5}
            />
            <TestimonialCard 
              name="Aruna Roy"
              age="62"
              condition="Rectal Prolapse"
              location="Barrackpore"
              quote="As an elderly patient, I was worried about treatment for my rectal prolapse. Dr. Rao designed a gentle treatment plan that considered my age and health condition. The staff was extremely supportive throughout my recovery. I'm now completely comfortable and back to my normal activities."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Patient Recovery Stories" 
            subtitle="Detailed accounts of treatment journeys and outcomes"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <PatientStory 
              name="Ajay Mukherjee"
              condition="Grade IV Hemorrhoids"
              story="I had been suffering from severe hemorrhoids for nearly a decade. The bleeding and pain had become unbearable, affecting my work and personal life. After consulting multiple doctors and trying various treatments with no lasting results, I was almost resigned to living with this condition permanently.\n\nWhen I visited AYUSH HEALTH CARE, Dr. Soma Rao conducted a thorough examination and explained my condition in detail – something no other doctor had done before. He recommended a combination of laser treatment for immediate relief, followed by Ayurvedic medications to address underlying causes.\n\nThe laser procedure was remarkably quick and nearly painless. I was surprised to experience immediate relief from my symptoms. The recovery was smooth, with minimal discomfort. Dr. Rao and his team monitored my progress closely and adjusted my medications as needed.\n\nIt's been one year since my treatment, and I remain completely symptom-free. What impressed me most was how Dr. Rao addressed both the immediate problem and the root causes through dietary guidance and herbal supplements. I only wish I had found AYUSH HEALTH CARE sooner and saved myself years of suffering."
            />
            
            <div className="border-t border-gray-200 my-12"></div>
            
            <PatientStory 
              name="Lakshmi Agarwal"
              condition="Recurrent Fistula"
              story="My journey with fistula began three years ago, and it was one of the most challenging experiences of my life. I underwent two conventional surgeries at different hospitals, but the fistula kept returning within months, each time more painful than before. The constant discharge, discomfort, and embarrassment affected my confidence and quality of life.\n\nAfter my second recurrence, a friend who had been successfully treated recommended AYUSH HEALTH CARE. I was initially skeptical about the Ksharsutra therapy Dr. Soma Rao suggested, as I had never heard of this Ayurvedic approach. However, desperate for a solution, I decided to trust his expertise.\n\nThe Ksharsutra treatment was different from anything I had experienced before. Rather than a single surgery, it involved weekly visits for thread replacement. Although it took longer than conventional surgery, the process was much more comfortable, and I could continue my normal activities during treatment.\n\nGradually, I noticed the fistula tract healing from the inside out. Dr. Rao explained that this gradual approach ensures complete healing without damaging the sphincter muscles – likely the reason my previous surgeries had failed.\n\nIt's been two years since my treatment was completed, and there has been no recurrence. The AYUSH HEALTH CARE approach taught me that sometimes the traditional methods, refined over centuries, can succeed where modern quick fixes fail."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have found lasting relief at AYUSH HEALTH CARE. Schedule your consultation with Dr. S. Soma Rao and take the first step toward a pain-free life.
          </p>
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg" 
            icon={<Phone size={20} />}
            className="bg-white text-ayush-700"
          >
            Book Your Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ 
  name, 
  age, 
  condition, 
  location, 
  quote, 
  rating 
}: { 
  name: string; 
  age: string; 
  condition: string; 
  location: string; 
  quote: string; 
  rating: number;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="mb-4">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 12H6C5.4 12 5 12.4 5 13V21C5 21.6 5.4 22 6 22H10V26C10 26.6 10.4 27 11 27H12C12.6 27 13 26.6 13 26V13C13 12.4 12.6 12 12 12H14C14.6 12 15 11.6 15 11V10C15 9.4 14.6 9 14 9H6C5.4 9 5 9.4 5 10V11C5 11.6 5.4 12 6 12ZM31 12H23C22.4 12 22 12.4 22 13V21C22 21.6 22.4 22 23 22H27V26C27 26.6 27.4 27 28 27H29C29.6 27 30 26.6 30 26V13C30 12.4 29.6 12 29 12H31C31.6 12 32 11.6 32 11V10C32 9.4 31.6 9 31 9H23C22.4 9 22 9.4 22 10V11C22 11.6 22.4 12 23 12H31Z" fill="#0EA5E9" opacity="0.2" />
        </svg>
      </div>
      
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6">{quote}</p>
      
      <div>
        <h4 className="font-bold text-gray-800">{name}, {age}</h4>
        <p className="text-sm text-gray-600">{condition}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

// Patient Story Component
const PatientStory = ({ 
  name, 
  condition, 
  story 
}: { 
  name: string; 
  condition: string;
  story: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}'s Story</h3>
      <p className="text-ayush-600 font-semibold mb-4">{condition}</p>
      
      {story.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
      ))}
    </div>
  );
};

export default Testimonials;


import { SectionHeading } from "@/components/ui/section-heading";
import { CreditCard, Cash, Wallet, WalletCards, ShieldCheck } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-ayush-900 to-herb-900 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Why Choose Us?" 
          subtitle="Trust the experts with proven results"
          centered
          className="text-white [&_span]:text-white [&_p]:text-white/90"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <span className="mr-3 text-3xl">✅</span>
              <h3 className="text-xl font-bold">100% Cure Guarantee</h3>
            </div>
            <p className="text-white/80">We stand behind our treatments with complete confidence in positive outcomes.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <span className="mr-3 text-3xl">🍃</span>
              <h3 className="text-xl font-bold">Ayurvedic Ksharsutra</h3>
            </div>
            <p className="text-white/80">Traditional healing wisdom combined with modern medical expertise.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <span className="mr-3 text-3xl">💨</span>
              <h3 className="text-xl font-bold">Pain Less and Fast Recovery</h3>
            </div>
            <p className="text-white/80">Minimal discomfort with our advanced treatment methods.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <WalletCards className="mr-3 h-8 w-8 text-herb-300" />
              <h3 className="text-xl font-bold">Cashless Treatment</h3>
            </div>
            <p className="text-white/80">Hassle-free cashless treatment facility available with major insurance providers.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <Cash className="mr-3 h-8 w-8 text-herb-300" />
              <h3 className="text-xl font-bold">Flexible EMI Options</h3>
            </div>
            <p className="text-white/80">Choose from No-Cost EMI and Low-Cost EMI plans to manage your treatment expenses.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <CreditCard className="mr-3 h-8 w-8 text-herb-300" />
              <h3 className="text-xl font-bold">Multiple Payment Options</h3>
            </div>
            <p className="text-white/80">Convenient payment options including credit cards, debit cards, and digital payments.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <ShieldCheck className="mr-3 h-8 w-8 text-herb-300" />
              <h3 className="text-xl font-bold">Insurance Claims Support</h3>
            </div>
            <p className="text-white/80">We support mediclaim and term insurance plan claims for your convenience.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all">
            <div className="flex items-center mb-2">
              <span className="mr-3 text-3xl">⏱️</span>
              <h3 className="text-xl font-bold">14 Days Recovery</h3>
            </div>
            <p className="text-white/80">Quick return to normal life with our efficient treatment protocols.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


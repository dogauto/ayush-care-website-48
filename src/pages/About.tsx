import React from "react";

const About = () => {
  return (
    <main className="bg-[#f8f9fa] py-16 min-h-[80vh]">
      <div className="max-w-6xl mx-auto w-full px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Dr. S. Soma Rao */}
        <div className="flex-shrink-0 flex items-center justify-center w-[320px] h-[320px] bg-gray-200 rounded-full shadow-md overflow-hidden border-4 border-white">
          <img
            src="/lovable-uploads/711a9b0a-34ed-466f-a392-0cc0717c33e0.png"
            alt="Dr. S. Soma Rao"
            className="object-cover w-full h-full"
            style={{ minWidth: 0, minHeight: 0 }}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            About Dr. S. Soma Rao
          </h2>
          <p className="text-lg text-gray-600 mb-3 mt-1">
            Expert in Anorectal Diseases with 20+ Years of Experience
          </p>
          <div className="w-20 h-1 bg-green-400 mb-6" />
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Dr. S. Soma Rao is a highly experienced surgeon specializing in anorectal diseases. With over two decades of clinical expertise, she has successfully treated more than 50,000 patients suffering from conditions like Piles, Fissure, Fistula, and Rectal Prolapse.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Her unique approach combines the ancient wisdom of Ayurvedic-Ksharsutra treatments with modern surgical techniques, providing comprehensive care that addresses both the symptoms and root causes of anorectal conditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">100% Cure Assurance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">Personalized Treatment Plans</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">Minimal Pain & Discomfort</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">Quick Recovery Time</span>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-green-400 text-green-700 font-semibold hover:bg-green-50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <span className="mr-2">Learn More About Us</span>
            <span className="text-green-500 text-xl">→</span>
          </a>
        </div>
      </div>

      {/* Senior Surgeon Section (Dr. S.K Rao) */}
      <div className="max-w-6xl mx-auto w-full px-4 flex flex-col md:flex-row-reverse items-center md:items-start gap-10 mt-20">
        {/* Dr. S.K Rao Image */}
        <div className="flex-shrink-0 flex items-center justify-center w-[320px] h-[320px] bg-gray-200 rounded-full shadow-md overflow-hidden border-4 border-white">
          <img
            src="/lovable-uploads/9f30bd39-3a36-4ea3-8c13-e7735f4a43b8.png"
            alt="Dr. S.K Rao"
            className="object-cover w-full h-full"
            style={{ minWidth: 0, minHeight: 0 }}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            About Dr. S.K Rao
          </h2>
          <p className="text-lg text-gray-600 mb-3 mt-1">
            Senior Surgeon <span className="font-semibold">(B.U.M.S (Cal))</span>
          </p>
          <div className="w-20 h-1 bg-purple-400 mb-6" />
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Dr. S.K Rao (<span className="italic">he/him</span>) is our senior surgeon with over <span className="font-bold">45+ years of experience</span>. He is widely recognized as the best doctor and specialist for all proctological problems. His expertise and dedication have helped thousands find relief from even the most challenging cases.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Renowned for a caring and attentive approach, he ensures every patient receives tailored, compassionate treatment using the most advanced and effective techniques available in proctology.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-purple-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">Specialist in Piles, Fissure, Fistula, and Rectal Prolapse</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">Expertise in advanced proctological care</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">Best for complex & chronic cases</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500 text-2xl">✔</span>
              <span className="text-gray-800 text-base font-medium">Trusted by thousands of patients</span>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-400 text-purple-700 font-semibold hover:bg-purple-50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <span className="mr-2">See Dr. S.K Rao's Credentials</span>
            <span className="text-purple-500 text-xl">→</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;

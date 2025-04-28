
import React from "react";
import { Button } from "@/components/ui/button";
import StaffMembers from "@/components/StaffMembers";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
            About AYUSH Health Care
          </h1>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src="/lovable-uploads/033a2ecf-e6db-41b0-b421-fcfe6a03921c.png"
                  alt="AYUSH Health Care"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
                  Established 1995
                </div>
                <p className="mt-2 text-gray-600">
                  AYUSH Health Care is a specialized medical center dedicated to
                  providing expert care for anorectal diseases. Founded by Dr. S.
                  Soma Rao, our center has been serving patients with
                  compassion, expertise, and the latest medical advancements for
                  over 25 years.
                </p>
                <p className="mt-4 text-gray-600">
                  Our mission is to improve the quality of life for patients
                  suffering from anorectal conditions through personalized
                  treatment plans, minimally invasive procedures, and
                  comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
            Our Vision & Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading center of excellence in anorectal care,
                recognized for our innovative treatments, research contributions,
                and patient-centered approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Our Values
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Patient comfort and dignity above all</li>
                <li>• Excellence in medical care and outcomes</li>
                <li>• Continuous learning and improvement</li>
                <li>• Compassion and empathy in all interactions</li>
                <li>• Transparency and ethical practice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 text-center">
            Meet Our Expert Team
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Doctor 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      className="h-64 w-full object-cover md:h-full"
                      src="/lovable-uploads/16d848b0-a7b1-44d4-a693-ffb75dac2c85.png"
                      alt="Dr. S.K. Rao"
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
                      Senior Consultant
                    </div>
                    <h3 className="mt-1 text-2xl font-semibold text-gray-800 leading-tight">
                      Dr. S.K. Rao
                    </h3>
                    <p className="mt-2 text-gray-600">S.C.U.M(Cal)</p>
                    <p className="mt-4 text-gray-600">
                      Dr. S.K. Rao has over 20 years of experience specializing
                      in anorectal surgeries and treatment of complex colorectal
                      conditions. He has pioneered several minimally invasive
                      techniques that have benefited thousands of patients.
                    </p>
                    <p className="mt-2 text-gray-600">
                      His compassionate approach and dedication to patient
                      education have made him a trusted name in the field of
                      colorectal health.
                    </p>
                  </div>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      className="h-64 w-full object-cover md:h-full"
                      src="/lovable-uploads/18c77be6-866e-4a3d-b716-9582b0926a91.png"
                      alt="Dr. S. Soma Rao"
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
                      Chief Surgeon & Director
                    </div>
                    <h3 className="mt-1 text-2xl font-semibold text-gray-800 leading-tight">
                      Dr. S. Soma Rao
                    </h3>
                    <p className="mt-2 text-gray-600">
                      M.S., M.Ch. (Gastroenterology)
                    </p>
                    <p className="mt-4 text-gray-600">
                      Dr. S. Soma Rao is the founder and director of AYUSH
                      Health Care. With his extensive training in
                      gastroenterology and specialized expertise in anorectal
                      surgeries, he has successfully treated over 15,000
                      patients.
                    </p>
                    <p className="mt-2 text-gray-600">
                      He is committed to providing the highest standard of care
                      using the latest advancements in medical technology and
                      surgical techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-700 mt-12 mb-6">
              Our Support Staff
            </h3>
            <StaffMembers />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 text-center">
            Our Facility
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                className="rounded-lg shadow-md"
                src="/lovable-uploads/033a2ecf-e6db-41b0-b421-fcfe6a03921c.png"
                alt="AYUSH Health Care Facility"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art facility is designed with patient comfort
                and privacy in mind. We offer a calm, healing environment
                equipped with the latest medical technology for diagnosis and
                treatment.
              </p>
              <p className="text-gray-600 mb-4">
                The center features modern consultation rooms, a minor procedure
                suite, recovery areas, and dedicated spaces for patient education
                and counseling.
              </p>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Facilities Include:
              </h3>
              <ul className="text-gray-600 space-y-1 mb-4">
                <li>• Advanced diagnostic equipment</li>
                <li>• Modern surgical suites for minimally invasive procedures</li>
                <li>• Comfortable recovery spaces</li>
                <li>• Private consultation rooms</li>
                <li>• Patient education center</li>
              </ul>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = "/gallery";
                }}
              >
                View Our Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Experience Specialized Care at AYUSH Health Care
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Don't let anorectal conditions affect your quality of life. Our team
            of experts is ready to provide you with personalized care and
            effective treatment options.
          </p>
          <Button
            className="bg-white text-green-600 hover:bg-gray-100"
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.href = "/contact";
            }}
          >
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;

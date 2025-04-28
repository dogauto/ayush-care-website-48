
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StaffSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Expert Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Doctor 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src="/lovable-uploads/16d848b0-a7b1-44d4-a693-ffb75dac2c85.png"
                  alt="Dr. S.K. Rao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Dr. S.K. Rao
                </h3>
                <p className="text-green-600 mb-2">Senior Consultant</p>
                <p className="text-gray-600 mb-4">
                  S.C.U.M(Cal)
                </p>
                <p className="text-gray-600">
                  Specializes in advanced techniques for anorectal surgeries with
                  over 20 years of experience.
                </p>
              </div>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src="/lovable-uploads/18c77be6-866e-4a3d-b716-9582b0926a91.png"
                  alt="Dr. S. Soma Rao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Dr. S. Soma Rao
                </h3>
                <p className="text-green-600 mb-2">Chief Surgeon & Director</p>
                <p className="text-gray-600 mb-4">
                  M.S., M.Ch. (Gastroenterology)
                </p>
                <p className="text-gray-600">
                  Expert in minimally invasive procedures and comprehensive
                  management of anorectal conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
            asChild
          >
            <Link to="/about">Meet Our Complete Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;

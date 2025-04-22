
import React from "react";
import StaffMembers from "./StaffMembers";
import { SectionHeading } from "@/components/ui/section-heading";

const StaffSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Doctors" 
          subtitle="Meet the experts dedicated to providing compassionate and advanced anorectal care"
          centered
        />
        <StaffMembers />
      </div>
    </section>
  );
};

export default StaffSection;


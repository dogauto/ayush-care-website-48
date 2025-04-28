
import { SectionHeading } from "@/components/ui/section-heading";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const doctors = [
  {
    name: "Dr. S. Soma Rao",
    role: "Expert in Anorectal Diseases",
    experience: "20+ Years",
    imageUrl: "/lovable-uploads/f9eb8feb-91f9-48f2-b2d0-fd0861f2917b.png",
    pronouns: "(she/her)",
    qualification: "Specialist in Anorectal Conditions"
  },
  {
    name: "Dr. S.K Rao",
    role: "Senior Consultant",
    experience: "45+ Years",
    imageUrl: "/lovable-uploads/81d5c032-a05e-4a42-8b14-2b709113b2f9.png",
    pronouns: "(he/him)",
    qualification: "S.C.U.M (Cal) - Specialist in Anorectal Conditions"
  }
];

const StaffMembers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Doctors" 
          subtitle="Meet the experts dedicated to providing compassionate and advanced anorectal care"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
                <AvatarFallback>
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {doctor.name} <span className="text-sm text-gray-600">{doctor.pronouns}</span>
                </h3>
                <p className="text-gray-600">{doctor.role}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Experience:</span> {doctor.experience}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Qualification:</span> {doctor.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffMembers;

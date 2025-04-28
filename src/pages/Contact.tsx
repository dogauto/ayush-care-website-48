import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveAppointment } from "@/services/appointmentService";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
const Contact = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    message: "",
    date: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Save appointment to local storage
      saveAppointment(formData);

      // Show success and reset form
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        condition: "",
        message: "",
        date: ""
      });
      toast({
        title: "Appointment Requested",
        description: "Your appointment request has been submitted successfully.",
        variant: "default"
      });

      // Reset success message after a few seconds and redirect
      setTimeout(() => {
        setIsSubmitted(false);
        navigate("/my-appointments");
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "There was an error submitting your appointment. Please try again.",
        variant: "destructive"
      });
    }
  };
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-50 to-herb-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Reach out for appointments, questions, or to learn more about our treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <SectionHeading title="Get In Touch" subtitle="We're here to help with your anorectal health concerns" centered={false} />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ayush-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} className="text-ayush-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Clinic Address</h3>
                    <p className="text-gray-600">
                      BARASAT, MOYNA HAT, MADHAVPUR ROAD,<br />
                      KOLKATA, PIN - 700125,<br />
                      NORTH 24 PGS
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ayush-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} className="text-ayush-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919695063755" className="hover:text-ayush-600">+91 9695063755</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ayush-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} className="text-ayush-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ayushhealthcare.com" className="hover:text-ayush-600">info@ayushhealthcare.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ayush-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={24} className="text-ayush-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Clinic Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 2:00 PM (Emergency only)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <SectionHeading title="Book an Appointment" subtitle="Fill out the form below and we'll contact you to confirm your appointment" centered={false} />
                
                {isSubmitted ? <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                    <h3 className="font-bold text-lg mb-2">Thank you for reaching out!</h3>
                    <p>We've received your appointment request and will contact you shortly to confirm the details.</p>
                    <div className="mt-4">
                      <Button onClick={() => navigate("/my-appointments")} className="w-full bg-green-600 hover:bg-green-700 text-white">
                        View My Appointments
                      </Button>
                    </div>
                  </div> : <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
                      </div>
                      
                      <div>
                        <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                          Condition *
                        </label>
                        <select id="condition" name="condition" value={formData.condition} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required>
                          <option value="">Select your condition</option>
                          <option value="Piles (Hemorrhoids)">Piles (Hemorrhoids)</option>
                          <option value="Fissure">Fissure</option>
                          <option value="Fistula">Fistula</option>
                          <option value="Rectal Prolapse">Rectal Prolapse</option>
                          <option value="Not Sure">Not Sure</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date *
                        </label>
                        <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please share any details about your condition or specific questions you may have" rows={4} />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700 text-white" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Request Appointment"}
                    </Button>
                    
                    <p className="mt-4 text-sm text-gray-500 text-center">
                      By submitting this form, you agree to be contacted regarding your appointment request.
                    </p>
                  </form>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Find Us" subtitle="Located conveniently in Barasat, North 24 Parganas" centered={true} />
          
          <div className="rounded-xl overflow-hidden shadow-sm h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.065708877237!2d88.41352637427606!3d22.57953813617391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275acdf1dde79%3A0x9d21975f53d4d625!2sAyush%20Health%20Care!5e0!3m2!1sen!2sin!4v1719248901882!5m2!1sen!2sin" width="100%" height="400" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-gradient-to-r from-ayush-600 to-herb-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Need Immediate Assistance?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            For urgent concerns during clinic hours, please call us directly.
          </p>
          <Button asChild className="bg-white text-ayush-700 hover:bg-gray-100">
            <a href="tel:+919650637551" className="flex items-center gap-2">
              <Phone size={20} />
              <span>Call: 96950 63755</span>
            </a>
          </Button>
        </div>
      </section>
    </div>;
};
export default Contact;
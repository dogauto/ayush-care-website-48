
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-ayush-700">AYUSH <span className="text-herb-600">HEALTH CARE</span></h3>
            <p className="text-gray-600 mb-4">
              Complete Anorectal Care with Compassion & Expertise. Over 20 years of experience with 50,000+ successfully treated patients.
            </p>
            <div className="flex items-center space-x-4">
              {/* Social media icons could go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-ayush-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-ayush-600">About Us</Link></li>
              <li><Link to="/services" className="hover:text-ayush-600">Services</Link></li>
              <li><Link to="/treatments" className="hover:text-ayush-600">Advanced Treatments</Link></li>
              <li><Link to="/testimonials" className="hover:text-ayush-600">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-ayush-600">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-ayush-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-ayush-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">BARASAT, MOYNA HAT, MADHAVPUR ROAD, KOLKATA, PIN - 700125, NORTH 24 PGS</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-ayush-600 flex-shrink-0" />
                <span className="text-gray-600">9650 63755</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-ayush-600 flex-shrink-0" />
                <span className="text-gray-600">info@ayushhealthcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} AYUSH HEALTH CARE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

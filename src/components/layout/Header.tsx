
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-2xl text-ayush-700">
            AYUSH <span className="text-herb-600">HEALTH CARE</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link to="/" className="text-gray-700 hover:text-ayush-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-ayush-600 font-medium">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-ayush-600 font-medium">Services</Link>
          <Link to="/treatments" className="text-gray-700 hover:text-ayush-600 font-medium">Advanced Treatments</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-ayush-600 font-medium">Testimonials</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-ayush-600 font-medium">Gallery</Link>
          <Link to="/faq" className="text-gray-700 hover:text-ayush-600 font-medium">FAQ</Link>
          <Link to="/contact" className="text-gray-700 hover:text-ayush-600 font-medium">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Button asChild className="rounded-full bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700 text-white font-medium">
            <Link to="/contact" className="flex items-center gap-2">
              <Phone size={16} />
              <span>9650 63755</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <Link to="/" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>About Us</Link>
              <Link to="/services" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>Services</Link>
              <Link to="/treatments" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>Advanced Treatments</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>Testimonials</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>Gallery</Link>
              <Link to="/faq" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>Contact</Link>
              
              <Button asChild className="mt-2 rounded-full bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700 text-white font-medium w-full">
                <Link to="/contact" className="flex items-center justify-center gap-2" onClick={toggleMenu}>
                  <Phone size={16} />
                  <span>9650 63755</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

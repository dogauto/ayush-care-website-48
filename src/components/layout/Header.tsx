import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-ayush-700">
          AYUSH <span className="text-herb-600">HEALTH CARE</span>
        </Link>

        {/* Mobile Menu Button - Highlighted */}
        <div className="block md:hidden">
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="relative bg-herb-50 border-herb-300 hover:bg-herb-100 hover:border-herb-400 animate-pulse duration-1000 shadow-md"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-herb-700" />
            ) : (
              <Menu className="h-5 w-5 text-herb-700" />
            )}
            <span className="sr-only">Toggle Menu</span>
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
          <Link to="/my-appointments" className="text-gray-700 hover:text-ayush-600 font-medium">My Appointments</Link>
          <Link to="/contact" className="text-gray-700 hover:text-ayush-600 font-medium">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Button asChild className="rounded-full bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700 text-white font-medium">
            <Link to="/contact" className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9695063755</span>
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
              <Link to="/my-appointments" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>My Appointments</Link>
              <Link to="/contact" className="text-gray-700 hover:text-ayush-600 font-medium py-2" onClick={toggleMenu}>Contact</Link>
              
              <Button asChild className="mt-2 rounded-full bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700 text-white font-medium w-full">
                <Link to="/contact" className="flex items-center justify-center gap-2" onClick={toggleMenu}>
                  <Phone size={16} />
                  <span>+91 9695063755</span>
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

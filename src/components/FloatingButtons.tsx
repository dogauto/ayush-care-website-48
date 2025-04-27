
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <Button
        asChild
        size="icon"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <a
          href="http://wa.link/nlt4te"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
      
      <Button
        asChild
        size="icon"
        className="rounded-full w-14 h-14 bg-ayush-600 hover:bg-ayush-700 shadow-lg"
      >
        <a href="tel:+919695063755" aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;

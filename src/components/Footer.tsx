
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center text-lg md:text-xl">
          Para mi abuelo 
          <Heart className="mx-2 text-red-500 fill-red-500 animate-pulse" size={24} />
          con mucho amor
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  return <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-16 px-4" style={{
    background: 'linear-gradient(to bottom, #1e293b, #0f172a)'
  }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 cursor-pointer" onClick={handleLogoClick}>
              <img src="/lovable-uploads/144cce7c-5cf5-4f74-bc20-e904c873c359.png" alt="Insty.cc Logo" className="w-10 h-10" />
              <h3 className="text-xl font-bold pb-1 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Insty.cc
              </h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The all-in-one platform for creators to monetize their audience with AI-powered bio links.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              📧 support@insty.cc
            </p>
            
            {/* Social Links */}
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="mailto:support@insty.cc" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              
              
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="https://insty.cc/terms.html" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="https://insty.cc/policy.html" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              
              
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Insty.cc. All rights reserved. Built with ❤️ for creators worldwide.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
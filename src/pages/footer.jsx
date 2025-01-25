import React from 'react';
import { Tractor, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <Tractor className="mr-2 text-green-400" />
            <h3 className="text-xl font-bold">AgriTransport</h3>
          </div>
          <p className="text-sm text-green-200">
            Connecting farmers with efficient transportation solutions for agricultural needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-green-300">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-300">Book a Tractor</a></li>
            <li><a href="#" className="hover:text-green-300">Field Rental</a></li>
            <li><a href="#" className="hover:text-green-300">Transport Services</a></li>
            <li><a href="#" className="hover:text-green-300">Equipment Sharing</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 text-green-300">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-300">Help Center</a></li>
            <li><a href="#" className="hover:text-green-300">FAQ</a></li>
            <li><a href="#" className="hover:text-green-300">Contact Support</a></li>
            <li><a href="#" className="hover:text-green-300">Report an Issue</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-green-300">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <MapPin className="mr-2 text-green-400" size={20} />
              <span className="text-sm">123 Farmland Road, Rural Area</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-green-400" size={20} />
              <span className="text-sm">(555) FARM-HELP</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-green-400" size={20} />
              <span className="text-sm">support@agritransport.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-700 mt-8 pt-4 text-center">
        <p className="text-sm text-green-200">
          © {new Date().getFullYear()} AgriTransport. All agricultural rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-green-300 hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="text-green-300 hover:text-white text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
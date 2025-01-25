import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tractor } from 'lucide-react';

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);
  const backgroundColor = useTransform(
    scrollY, 
    [0, 200], 
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      style={{ 
        opacity, 
        backgroundColor,
        backdropFilter: 'blur(10px)'
      }}
      className="fixed w-full z-50 transition-all duration-300 py-6"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <Link to="/" className="flex items-center">
            <Tractor className="mr-2 text-green-600" size={30} />
            <span className="text-xl font-bold text-black">AgriTransport</span>
          </Link>
        </motion.div>
        <motion.nav 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-x-4"
        >
          <Link to="/services" className="text-black font-bold hover:text-gray-600 transition-colors">
            Services
          </Link>
          <Link to="/routes" className="text-black font-bold hover:text-gray-600 transition-colors">
            Routes
          </Link>
          <Link to="/AboutPage" className="text-black font-bold hover:text-gray-600 transition-colors">
            About
          </Link>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tractor, MapPin, Users, ArrowRight, 
  Smartphone, Globe, DollarSign, Target 
} from 'lucide-react';

const AboutPage = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-green-50 min-h-screen"
    >
      {/* Hero Section with Dynamic Animation */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-green-500 to-green-700 py-20 px-4 text-white"
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-6"
          >
            AgriTransport: Farmer's Digital Companion
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Transforming agricultural challenges into opportunities through technology-driven solutions.
          </motion.p>
        </div>
      </motion.div>

      {/* Farmer Motivation Section */}
      <div className="container mx-auto py-16 px-4">
        <motion.div 
          variants={featureVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Empowering Farmers, Transforming Agriculture
            </h2>
            <ul className="space-y-4 text-gray-700">
              <motion.li 
                variants={featureVariants}
                className="flex items-center space-x-3"
              >
                <Smartphone className="text-green-500" />
                <span>One-click equipment booking</span>
              </motion.li>
              <motion.li 
                variants={featureVariants}
                className="flex items-center space-x-3"
              >
                <Globe className="text-green-500" />
                <span>Expand your agricultural network</span>
              </motion.li>
              <motion.li 
                variants={featureVariants}
                className="flex items-center space-x-3"
              >
                <DollarSign className="text-green-500" />
                <span>Reduce equipment investment costs</span>
              </motion.li>
              <motion.li 
                variants={featureVariants}
                className="flex items-center space-x-3"
              >
                <Target className="text-green-500" />
                <span>Maximize equipment utilization</span>
              </motion.li>
            </ul>
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Tractor size={300} className="text-green-600 opacity-70" />
          </motion.div>
        </motion.div>
      </div>

      {/* Platform Features with Interactive Cards */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-green-800 mb-12"
          >
            Revolutionary Features for Modern Farmers
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { 
                transition: { 
                  staggerChildren: 0.2 
                } 
              }
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Tractor className="mx-auto mb-4 text-green-600" size={50} />,
                title: "Smart Tractor Booking",
                description: "Instant booking, real-time availability, transparent pricing."
              },
              { 
                icon: <MapPin className="mx-auto mb-4 text-green-600" size={50} />,
                title: "Land Marketplace",
                description: "Connect, collaborate, and cultivate new agricultural opportunities."
              },
              { 
                icon: <Users className="mx-auto mb-4 text-green-600" size={50} />,
                title: "Agricultural Network",
                description: "Build connections, share knowledge, grow together."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 p-6 rounded-lg shadow-md text-center hover:bg-green-100 transition"
              >
                {feature.icon}
                <h3 className="font-bold text-xl mb-3 text-green-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action with Pulsing Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-green-700 text-white py-16 text-center"
      >
        <motion.h2
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 300 
          }}
          className="text-4xl font-bold mb-6"
        >
          Your Agricultural Future Starts Here
        </motion.h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join AgriTransport and transform your farming experience with cutting-edge technology.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-100 transition text-lg"
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
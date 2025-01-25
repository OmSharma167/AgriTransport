import React from 'react';
import { Tractor, MapPin, Users, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            AgriTransport: Empowering Farmers Through Technology
          </h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            We're revolutionizing agricultural transportation by connecting farmers, landowners, and agricultural service providers through an innovative digital marketplace.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            AgriTransport aims to solve critical challenges in agricultural transportation and land management by creating a seamless, technology-driven platform that:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <ArrowRight className="mr-2 text-green-500" />
              Simplify tractor and equipment booking
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 text-green-500" />
              Enable efficient land and equipment sharing
            </li>
            <li className="flex items-center">
              <ArrowRight className="mr-2 text-green-500" />
              Reduce agricultural transportation barriers
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Tractor size={200} className="text-green-600 opacity-50" />
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Key Platform Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tractor Booking */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Tractor className="mx-auto mb-4 text-green-600" size={50} />
              <h3 className="font-bold text-xl mb-3">Tractor Booking</h3>
              <p className="text-gray-600">
                Instantly book tractors from local owners, reducing idle time and maximizing equipment utilization.
              </p>
            </div>

            {/* Land Rental */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="mx-auto mb-4 text-green-600" size={50} />
              <h3 className="font-bold text-xl mb-3">Field Rental</h3>
              <p className="text-gray-600">
                Connect landowners with farmers seeking cultivation spaces, creating new economic opportunities.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="mx-auto mb-4 text-green-600" size={50} />
              <h3 className="font-bold text-xl mb-3">Agricultural Network</h3>
              <p className="text-gray-600">
                Build a collaborative ecosystem where farmers, landowners, and service providers thrive together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem We Solve */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          The Agricultural Challenge
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Current Limitations
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>High equipment investment costs</li>
              <li>Underutilized agricultural machinery</li>
              <li>Limited land access for small farmers</li>
              <li>Complex transportation logistics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Our Solution
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>Shared equipment model</li>
              <li>Digital marketplace for land and machinery</li>
              <li>Transparent pricing and availability</li>
              <li>Technology-enabled agricultural ecosystem</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join the Agricultural Revolution
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a farmer, landowner, or service provider, AgriTransport is your gateway to a more efficient, connected agricultural future.
        </p>
        <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-100 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
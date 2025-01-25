import React from 'react';
import { X, MapPin, Clock, Gauge, Wrench, Calendar, Check, AlertTriangle } from 'lucide-react';

export const TractorDetailsModal = ({ tractor, onClose, onBook, distance }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={tractor.image} 
            alt={tractor.name}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{tractor.name}</h2>
            <div className="flex items-center">
              {tractor.available ? (
                <div className="flex items-center text-green-600">
                  <Check className="w-5 h-5 mr-1" />
                  <span>Available Now</span>
                </div>
              ) : (
                <div className="flex items-center text-yellow-600">
                  <AlertTriangle className="w-5 h-5 mr-1" />
                  <span>Currently Booked</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{tractor.location}</span>
                {distance && (
                  <span className="ml-2 text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {distance} km away
                  </span>
                )}
              </div>

              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>₹{tractor.hourlyRate}/hour</span>
              </div>

              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Available for daily and weekly rentals</span>
              </div>

              <div className="flex items-center text-gray-600">
                <Wrench className="w-5 h-5 mr-2" />
                <span>Regular maintenance & servicing included</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {tractor.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-gray-50 p-2 rounded-lg"
                  >
                    <Gauge className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-gray-600">{tractor.description}</p>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={onBook}
              className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
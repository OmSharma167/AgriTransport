import React from 'react';
import { MapPin, Clock, Check, X } from 'lucide-react';

export const TractorCard = ({ tractor, onBook, onClick, distance }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <img 
        src={tractor.image} 
        alt={tractor.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{tractor.name}</h3>
          <span className="flex items-center">
            {tractor.available ? 
              <Check className="w-5 h-5 text-green-500" /> :
              <X className="w-5 h-5 text-red-500" />
            }
          </span>
        </div>
        
        <div className="mt-2 flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{tractor.location}</span>
          </div>
          {distance !== undefined && (
            <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {distance} km away
            </span>
          )}
        </div>
        
        <div className="mt-2 flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>₹{tractor.hourlyRate}/hour</span>
        </div>
        
        <p className="mt-3 text-gray-600 line-clamp-2">{tractor.description}</p>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {tractor.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
            {tractor.features.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                +{tractor.features.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBook(tractor.id);
          }}
          className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
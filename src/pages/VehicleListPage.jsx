import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const mockVehicles = {
  tractors: [
    { 
      id: 1, 
      name: 'John Deere 5E', 
      price: '1500/day', 
      description: 'Powerful tractor for heavy-duty farming',
      features: ['45HP Engine', '4WD', 'Power Steering'],
      image: 'https://images.unsplash.com/photo-1599932047669-a8e574986111?auto=format&fit=crop&q=80&w=1000' 
    },
    { 
      id: 2, 
      name: 'Mahindra 575', 
      price: '1200/day', 
      description: 'Versatile tractor for all farming needs',
      features: ['42HP Engine', 'Dual Clutch', 'LED Lights'],
      image: 'https://images.unsplash.com/photo-1530267981375-f08d50b02d6c?auto=format&fit=crop&q=80&w=1000' 
    }
  ],
  trucks: [
    { 
      id: 1, 
      name: 'Volvo FH16', 
      price: '3000/day', 
      description: 'Heavy-duty truck for long-distance transport',
      features: ['500HP', 'Sleeper Cabin', 'GPS Navigation'],
      image: 'https://images.unsplash.com/photo-1586191582056-b5d6b911f52b?auto=format&fit=crop&q=80&w=1000' 
    },
    { 
      id: 2, 
      name: 'Scania R500', 
      price: '2800/day', 
      description: 'Premium truck with advanced features',
      features: ['450HP', 'Air Suspension', 'Climate Control'],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000' 
    }
  ],
  cars: [
    { 
      id: 1, 
      name: 'Toyota Camry', 
      price: '800/day', 
      description: 'Comfortable sedan for family trips',
      features: ['Automatic', 'Leather Seats', 'Cruise Control'],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000' 
    },
    { 
      id: 2, 
      name: 'Honda Civic', 
      price: '700/day', 
      description: 'Efficient and reliable compact car',
      features: ['Fuel Efficient', 'Apple CarPlay', 'Safety Suite'],
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000' 
    }
  ],
  vans: [
    { 
      id: 1, 
      name: 'Mercedes Sprinter', 
      price: '1000/day', 
      description: 'Spacious van for cargo or passengers',
      features: ['12 Seats', 'High Roof', 'Backup Camera'],
      image: 'https://images.unsplash.com/photo-1558383331-f520f2888351?auto=format&fit=crop&q=80&w=1000' 
    },
    { 
      id: 2, 
      name: 'Ford Transit', 
      price: '900/day', 
      description: 'Versatile van for multiple purposes',
      features: ['10 Seats', 'Easy Loading', 'Advanced Safety'],
      image: 'https://images.unsplash.com/photo-1632933684089-c6bb35554a54?auto=format&fit=crop&q=80&w=1000' 
    }
  ]
};

function VehicleListPage() {
  const { vehicleType } = useParams();
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const vehicles = mockVehicles[vehicleType] || [];

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Categories
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
          Available {vehicleType}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleVehicleClick(vehicle)}
            >
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {vehicle.name}
                  </h3>
                  <p className="text-white/90">₹{vehicle.price}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button 
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add booking logic here
                    alert(`Booking ${vehicle.name}`);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedVehicle && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedVehicle.name}</h2>
                <button 
                  onClick={() => setSelectedVehicle(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-xl font-semibold mb-2">₹{selectedVehicle.price}</p>
              <p className="text-gray-600 mb-4">{selectedVehicle.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedVehicle.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <button 
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  alert(`Booking ${selectedVehicle.name}`);
                  setSelectedVehicle(null);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VehicleListPage;
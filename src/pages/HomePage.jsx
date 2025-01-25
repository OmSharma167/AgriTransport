import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tractor, Truck, Car, Bus, Search } from 'lucide-react';

const vehicleCategories = [
  {
    id: 'tractors',
    name: 'Tractors',
    icon: Tractor,
    description: 'Agricultural tractors for farming needs',
    image: 'https://cdn.agriland.ie/uploads/2018/10/20170916_1257580.jpg',
    color: 'bg-green-500'
  },
  {
    id: 'trucks',
    name: 'Trucks',
    icon: Truck,
    description: 'Heavy-duty trucks for transportation',
    image: 'http://upload.wikimedia.org/wikipedia/commons/a/ae/SEPT_17TH_LOS_ANGELES_INTERNATIONAL_TRUCK_PHOTO_PATRICE_RAUNET_HOLLYWOOD.jpg',
    color: 'bg-blue-500'
  },
  {
    id: 'cars',
    name: 'Cars',
    icon: Car,
    description: 'Comfortable cars for personal use',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-purple-500'
  },
  
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
            alt="Transport background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Vehicle
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Browse our wide selection of vehicles for rent. From tractors to vans, 
            we have everything you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Vehicle Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {vehicleCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => navigate(`/${category.id}`)}
                className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className={`${category.color} p-3 rounded-full w-fit`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-200">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Book your vehicle anytime</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Vehicles</h3>
              <p className="text-gray-600">Quality assured vehicles</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">Safe and secure payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
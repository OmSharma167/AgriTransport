import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function CarPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Cars</h1>
      
      {/* Placeholder content */}
      <div className="text-gray-600">
        Car listings will be displayed here
      </div>
    </div>
  );
}

export default CarPage;
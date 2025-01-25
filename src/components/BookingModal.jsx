import React, { useState } from 'react';
import { X } from 'lucide-react';

export const BookingModal = ({ tractor, onClose, onConfirm }) => {
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(hours, date);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Book {tractor.name}</h3>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Hours Needed</label>
            <input
              type="number"
              min="1"
              max="24"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <p className="text-lg font-semibold">
              Total Price: ₹{hours * tractor.hourlyRate}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Users, CreditCard } from "lucide-react";

export default function BookingWidget({ pricePerNight }: { pricePerNight: number }) {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);

  // Simple date diff calculation
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = Math.abs(outDate.getTime() - inDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  };

  const nights = calculateNights();
  const cleaningFee = 1500;
  const serviceFee = Math.round(pricePerNight * nights * 0.1);
  const total = (pricePerNight * nights) + cleaningFee + serviceFee;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xl shadow-forest/5 sticky top-28">
      <div className="flex justify-between items-baseline mb-6">
        <h3 className="font-serif text-3xl font-bold text-forest">₹{pricePerNight.toLocaleString()}</h3>
        <span className="text-charcoal/60">/ night</span>
      </div>

      <div className="border border-gray-300 rounded-xl mb-6 overflow-hidden">
        <div className="flex border-b border-gray-300">
          <div className="w-1/2 p-3 border-r border-gray-300">
            <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1">Check-in</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm outline-none text-charcoal bg-transparent" 
            />
          </div>
          <div className="w-1/2 p-3">
            <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1">Check-out</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm outline-none text-charcoal bg-transparent" 
            />
          </div>
        </div>
        <div className="p-3">
          <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1">Guests</label>
          <select 
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full text-sm outline-none text-charcoal bg-transparent"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="w-full py-4 bg-forest text-white font-bold rounded-xl hover:bg-forest/90 transition-colors shadow-lg mb-6">
        Reserve
      </button>

      <p className="text-center text-xs text-charcoal/60 mb-6">You won't be charged yet</p>

      {nights > 0 && (
        <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
          <div className="flex justify-between text-charcoal">
            <span className="underline">₹{pricePerNight.toLocaleString()} x {nights} nights</span>
            <span>₹{(pricePerNight * nights).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-charcoal">
            <span className="underline">Cleaning fee</span>
            <span>₹{cleaningFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-charcoal">
            <span className="underline">Service fee</span>
            <span>₹{serviceFee.toLocaleString()}</span>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center font-bold text-lg text-forest">
        <span>Total before taxes</span>
        <span>₹{nights > 0 ? total.toLocaleString() : "0"}</span>
      </div>
    </div>
  );
}

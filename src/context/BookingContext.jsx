// src/context/BookingContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Booking Context
const BookingContext = createContext();

// BookingProvider component to provide state and methods to other components
export function BookingProvider({ children }) {
  const [availability, setAvailability] = useState([
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
  ]);

  // Function to check if a slot's time has passed and mark it as unavailable
  const checkSlotTimes = () => {
    const currentTime = new Date(); // Get current time
    setAvailability((prevAvailability) =>
      prevAvailability.map((slot) => {
        const slotTime = new Date();
        const [hours, minutes] = slot.time.split(":");
        slotTime.setHours(hours, minutes.split(" ")[0], 0, 0); // Set slot time (ignoring AM/PM for simplicity)

        // If the slot time has passed, mark it as unavailable
        return currentTime > slotTime ? { ...slot, available: false } : slot;
      })
    );
  };

  // Use effect to check slot availability every minute
  useEffect(() => {
    const interval = setInterval(checkSlotTimes, 60000); // Check every minute
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const bookSlot = (time) => {
    setAvailability((prev) =>
      prev.map((slot) =>
        slot.time === time ? { ...slot, available: false } : slot
      )
    );
  };

  return (
    <BookingContext.Provider value={{ availability, setAvailability, bookSlot }}>
      {children}
    </BookingContext.Provider>
  );
}

// Custom hook to use the BookingContext
export const useBooking = () => useContext(BookingContext);

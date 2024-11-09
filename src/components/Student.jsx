// src/components/Student.jsx
import React, { useState } from "react";
import { useBooking } from "../context/BookingContext.jsx";

function Student() {
  const { availability, bookSlot } = useBooking();
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleBooking = () => {
    if (selectedSlot) {
      bookSlot(selectedSlot);
      alert(`Slot booked for ${selectedSlot}`);
    } else {
      alert("Please select a slot.");
    }
  };

  return (
    <div className="student-section">
      <h2>Student Booking:</h2>
      <select onChange={(e) => setSelectedSlot(e.target.value)} value={selectedSlot}>
        <option value="">Select a slot</option>
        {availability.map((slot, index) => (
          <option key={index} value={slot.time} disabled={!slot.available}>
            {slot.time} {slot.available ? "" : "(Booked)"}
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Book Slot</button>
    </div>
  );
}

export default Student;

// src/components/Instructor.jsx
import React, { useState } from "react";
import { useBooking } from "../context/BookingContext.jsx";

function Instructor() {
  const { availability, bookSlot, setAvailability } = useBooking();
  const [newSlot, setNewSlot] = useState(""); // To store new slot input

  // Function to handle adding a new slot
  const handleAddSlot = () => {
    if (newSlot && !availability.find((slot) => slot.time === newSlot)) {
      setAvailability((prevAvailability) => [
        ...prevAvailability,
        { time: newSlot, available: true },
      ]);
      setNewSlot(""); // Clear the input field
    } else {
      alert("Slot already exists or invalid input.");
    }
  };

  // Function to handle deleting a slot
  const handleDeleteSlot = (time) => {
    setAvailability((prevAvailability) =>
      prevAvailability.filter((slot) => slot.time !== time)
    );
  };

  return (
    <div className="instructor-section">
      <h2>Instructor Availability Management</h2>

      <div className="add-slot">
        <input
          type="text"
          value={newSlot}
          onChange={(e) => setNewSlot(e.target.value)}
          placeholder="Add new time slot (e.g., 3:00 PM)"
        />
        <button onClick={handleAddSlot}>Add Slot</button>
      </div>

      <h3>Available Slots:</h3>
      <div className="slots-list">
        {availability.map((slot, index) => (
          <div key={index} className="slot-item">
            <span>{slot.time}</span>
            <button onClick={() => bookSlot(slot.time)} disabled={!slot.available}>
              {slot.available ? "Book" : "Booked"}
            </button>
            <button onClick={() => handleDeleteSlot(slot.time)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructor;

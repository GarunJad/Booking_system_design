// src/App.jsx
import React, { useState } from "react";
import Instructor from "./components/Instructor.jsx";
import Student from "./components/Student.jsx";
import { BookingProvider } from "./context/BookingContext.jsx";
import "./App.css";  // Importing CSS file for styling

function App() {
  return (
    <BookingProvider>
      <div className="app-container">
        <h1>Welcome to the Booking System</h1>
        <p>Select a slot and book your appointment</p>

        <div className="availability-section">
          <Instructor />
          <Student />
        </div>
      </div>
    </BookingProvider>
  );
}

export default App;

# Booking System

This is a booking system where instructors can set their availability slots, and students can view and book available slots. The system uses **React.js** for the frontend, **Node.js** for the backend, and **Firebase** for data storage.

## Features
- **Instructor** can set and update their availability slots.
- **Student** can view available slots and book them.
- **Validation** is implemented to avoid double-booking.
- Firebase is used for storing availability and bookings.

---

## Table of Contents
1. [Installation](#installation)
2. [Setup Firebase](#setup-firebase)
3. [Running the Backend](#running-the-backend)
4. [Running the Frontend](#running-the-frontend)
5. [Tech Stack](#tech-stack)
6. [License](#license)

---

## Installation

Follow these steps to clone the repository and install all necessary dependencies.

1. **Clone the Repository**

   First, clone the repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   
2. **Install Backend and Frontend Dependencies**

   Since this project contains both frontend (React) and backend (Node.js), you'll need to install dependencies for both.

   For Backend (Node.js):
   If you have a separate backend folder, navigate to it and install dependencies.

```bash
cd server
npm install
```

   For Frontend (React):
   Go back to the root folder and install the frontend dependencies.

   
   ```bash
   cd ..
   npm install
   ```
   ---
## Setup Firebase


1. Go to the Firebase Console.

2. Create a new Firebase project (or use an existing one).

3. Under "Project settings" > "Your apps", select Web to get the Firebase config.

4. Copy the Firebase config object, which will look like this:


```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

5. Create a new file src/firebase-config.js and paste the config object into it.

```javascript
// src/firebase-config.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);

export default app;
```
6. Make sure you have Firebase authentication and Firestore set up in the Firebase console.

## Running the Backend
The backend is implemented using Node.js. If you have a backend server (e.g., index.js in a server folder), follow these steps to run it.

1. Open the terminal and navigate to the backend directory (if applicable):

```bash

cd server
Run the server with Node.js:
```
2. Start the server using the following command:

```bash
node index.js
```
Ensure your server is running on the correct port, typically http://localhost:5000 or another port you've specified.

## Running the Frontend
The frontend is built using React. To run the frontend:

Go back to the root directory (where package.json is located):

```bash
cd ..
```
Start the frontend using:
```bash
npm run dev
```
This will start the development server and make the app available at:
```arduino
http://localhost:3000
```
You can now open this URL in your browser to view the Booking System.

## Tech Stack
1. Frontend: React.js
2. Backend: Node.js (Express)
3. Database: Firebase (Firestore)
4. CSS Framework: Custom CSS (feel free to add libraries like Bootstrap or Tailwind)
5. State Management: React's useState and useEffect hooks

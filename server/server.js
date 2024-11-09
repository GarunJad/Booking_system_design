// server.js
const express = require('express');
const cors = require('cors');
const { getFirestore, doc, setDoc, getDoc, updateDoc } = require('firebase/firestore');
const { app } = require('./firebase-config'); // Firebase configuration
const db = getFirestore(app);

const appServer = express();
appServer.use(cors());
appServer.use(express.json());

// Route to set instructor availability
appServer.post('/setAvailability', async (req, res) => {
  const { instructorId, availability } = req.body;
  try {
    await setDoc(doc(db, 'instructors', instructorId), { availability });
    res.status(200).send('Availability set successfully');
  } catch (error) {
    res.status(500).send('Error setting availability');
  }
});

// Route to get instructor availability
appServer.get('/getAvailability/:instructorId', async (req, res) => {
  const { instructorId } = req.params;
  try {
    const docRef = doc(db, 'instructors', instructorId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      res.status(200).json(docSnap.data());
    } else {
      res.status(404).send('Instructor not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving availability');
  }
});

// Route for student to book a slot
appServer.post('/bookSlot', async (req, res) => {
  const { studentId, instructorId, slot } = req.body;
  try {
    const instructorRef = doc(db, 'instructors', instructorId);
    const instructorDoc = await getDoc(instructorRef);

    if (instructorDoc.exists()) {
      const currentAvailability = instructorDoc.data().availability;
      
      if (!currentAvailability.includes(slot)) {
        return res.status(400).send('Slot not available');
      }
      
      await setDoc(doc(db, 'students', studentId), { bookedSlot: slot });
      await updateDoc(instructorRef, { availability: currentAvailability.filter(s => s !== slot) });
      res.status(200).send('Slot booked successfully');
    } else {
      res.status(404).send('Instructor not found');
    }
  } catch (error) {
    res.status(500).send('Error booking slot');
  }
});

appServer.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});



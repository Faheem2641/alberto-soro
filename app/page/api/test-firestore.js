// pages/api/test-firestore.js
import { db } from '../../lib/firebase';  // Make sure this path is correct
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const docRef = await addDoc(collection(db, "testMessages"), {
      message: "Hello from Next.js!",
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Firestore Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}

import express from 'express';
import Feedback from '../models/feedback.js'; // Import the Feedback model

const router = express.Router();

// Route to handle feedback submission
router.post('/', async (req, res) => {
  const { name, email, phoneNumber, branch, rating, feedback } = req.body;

  try {
    const newFeedback = new Feedback({
      name,
      email,
      phoneNumber,
      branch,
      rating,
      feedback
    });

    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

export default router;

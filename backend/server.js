import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Lead from './models/Lead.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:5173',
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// ── MongoDB Connection ──────────────────────────────────
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Atlas connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ── Routes ──────────────────────────────────────────────

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Successmakerz API is running 🚀' });
});

// Submit lead form
app.post('/api/leads', async (req, res) => {
  try {
    const { fullName, phone, email, country, purpose, message } = req.body;

    // Basic validation
    if (!fullName || !phone || !email || !country || !purpose || !message) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be filled.',
      });
    }

    // Save to MongoDB
    const lead = new Lead({ fullName, phone, email, country, purpose, message });
    await lead.save();

    console.log(`📥 New lead: ${fullName} | ${country} | ${purpose} | ${phone}`);

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will contact you within 24 hours.',
    });

  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try WhatsApp instead.',
    });
  }
});

// ── Start Server ────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Successmakerz backend running on port ${PORT}`);
});

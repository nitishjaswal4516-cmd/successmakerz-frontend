import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Lead from './models/Lead.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────
const allowedOrigins = [
  'https://tour.nitish-devops.me',
  'https://go.nitish-devops.me',
  'http://localhost:3000'
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }

    if (
      allowedOrigins.includes(origin) ||
      origin.startsWith('http://192.168.') ||
      origin.startsWith('http://10.') ||
      origin.startsWith('http://172.')
    ) {
      return callback(null, true);
    }

    return callback(new Error(`CORS origin denied: ${origin}`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());
app.use(express.json());
// ── MongoDB Connection ──────────────────────────────────
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/successmakerz';

mongoose.connect(MONGODB_URI)
  .then(() => {
    const source = MONGODB_URI.includes('127.0.0.1') || MONGODB_URI.includes('localhost')
      ? 'local MongoDB'
      : 'MongoDB Atlas';
    console.log(`✅ ${source} connected successfully (${MONGODB_URI})`);
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message || err);
    process.exit(1);
  });

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

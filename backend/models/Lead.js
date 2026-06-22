import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  country: {
    type: String,
    required: true,
  },
 purpose: {
  type: String,
  required: true,
  enum: ['tourist', 'study', 'work', 'Tourist', 'Study', 'Work'],
},
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'new',
    enum: ['new', 'contacted', 'in-progress', 'closed'],
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Lead', leadSchema);

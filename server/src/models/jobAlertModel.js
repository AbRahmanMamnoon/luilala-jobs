import mongoose from 'mongoose';

const jobAlertSchema = new mongoose.Schema(
  {
    titleOrKeyword: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const JobAlert = mongoose.model('JobAlert', jobAlertSchema);
export default JobAlert;

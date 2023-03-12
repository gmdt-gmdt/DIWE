import mongoose from "mongoose";
const GuideSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  socialNetworks: {
    type: [String],
  },
});

export default mongoose.model("Guide", GuideSchema);

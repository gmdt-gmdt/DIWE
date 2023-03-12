import mongoose from "mongoose";
const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", ServiceSchema);

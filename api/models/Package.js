import mongoose from "mongoose";
const PackageSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    visitNumber: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    published: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Package", PackageSchema);

/*

[
    {
      "location": "Thailand",
      "duration": 13,
      "visitNumber": 2,
      "description": "A-Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!",
      "published": "21st may, 2021",
      "amount": 150,
      "image": "images/package-1.jpg"
    },
    {
      "location": "Indonesia",
      "duration": 7,
      "visitNumber": 10,
      "description": "B-Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!",
      "published": "11st may, 2021",
      "amount": 179,
      "image": "images/package-2.jpg"
    },
    {
      "location": "Malaysia",
      "duration": 15,
      "visitNumber": 7,
      "description": "C-Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!",
      "published": "01st may, 2021",
      "amount": 279,
      "image": "images/package-3.jpg"
    }
  ]
*/

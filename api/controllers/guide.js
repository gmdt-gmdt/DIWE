import Guide from "../models/Guide.js";

export const createGuide = async (req, res, next) => {
  const newGuide = new Guide(req.body);

  try {
    const savedGuide = await newGuide.save();
    res.status(200).json(savedGuide);
  } catch (err) {
    next(err);
  }
};
export const updateGuide = async (req, res, next) => {
  try {
    const updatedGuide = await Guide.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedGuide);
  } catch (err) {
    next(err);
  }
};
export const deleteGuide = async (req, res, next) => {
  try {
    await Guide.findByIdAndDelete(req.params.id);
    res.status(200).json("Guide has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getGuide = async (req, res, next) => {
  try {
    const guide = await Guide.findById(req.params.id);
    res.status(200).json(guide);
  } catch (err) {
    next(err);
  }
};
export const getGuides = async (req, res, next) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    next(err);
  }
};

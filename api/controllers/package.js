import Package from "../models/Package.js";

export const createPackage = async (req, res, next) => {
  const newPackage = new Package(req.body);
  try {
    const savedService = await newPackage.save();
    res.status(200).json(savedService);
  } catch (err) {
    next(err);
  }
};

export const updatePackage = async (req, res, next) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPackage);
  } catch (err) {
    next(err);
  }
};

export const deletePackage = async (req, res, next) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.status(200).json("Package has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getPackage = async (req, res, next) => {
  try {
    const packageFound = await Package.findById(req.params.id);
    res.status(200).json(packageFound);
  } catch (err) {
    next(err);
  }
};
export const getPackages = async (req, res, next) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    next(err);
  }
};

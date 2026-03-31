import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const {
      category,
      subCategory,
      title,
      description,
      images,
      price,
      location,
      cancellationPolicy,
      itemValue,
    } = req.body;

    // ✅ Basic validation
    if (
      !category ||
      !subCategory ||
      !title ||
      !description ||
      !price ||
      !location ||
      !cancellationPolicy ||
      !itemValue
    ) {
      return next(errorHandler(400, "All required fields must be filled"));
    }

    // ✅ Image validation
    if (images && images.length > 8) {
      return next(errorHandler(400, "Max 8 images allowed"));
    }

    // ✅ Create listing
    const listing = await Listing.create({
      user: userId,
      category,
      subCategory,
      title,
      description,
      images,
      price,
      location,
      cancellationPolicy,
      itemValue,
    });

    res.status(201).json({
      success: true,
      message: "Listing created successfully",
      listing,
    });
  } catch (error) {
    next(error);
  }
};
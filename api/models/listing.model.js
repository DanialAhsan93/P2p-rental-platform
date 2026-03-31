import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // CATEGORY
    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
    },

    // BASIC INFO
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    // IMAGES (MAX 8)
    images: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length <= 8;
        },
        message: "You can upload up to 8 images only",
      },
    },

    // PRICING
    price: {
      oneDay: {
        type: Number,
        required: true,
      },
      threeDays: {
        type: Number,
        required: true,
      },
      sevenDays: {
        type: Number,
        required: true,
      },
    },

    // LOCATION
    location: {
      type: String,
      required: true,
    },

    // CANCELLATION POLICY
    cancellationPolicy: {
      type: String,
      enum: ["flexible", "medium", "strict"],
      required: true,
    },

    // VALUE OF ITEM (for security/deposit logic later)
    itemValue: {
      type: Number,
      required: true,
    },

    // OPTIONAL
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
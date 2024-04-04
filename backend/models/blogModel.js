const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    blog_title: {
      type: String,
      required: true,
    },
    blog_description: {
      type: String,
      required: true,
    },
    like_count: {
      type: Number,
      default: 0,
    },
    liked_by: [
      {
        user_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        type: {
          type: String,
          enum: ["User", "Vendor"], // Specify the possible types
          required: true,
        },
      },
    ],
    author: {
      id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      type: {
        type: String,
        enum: ["User", "Vendor"], // Specify the possible types
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);

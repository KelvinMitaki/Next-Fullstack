const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    host: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    },
    city: {
      type: String,
      required: true
    },
    venue: {
      type: String,
      required: true
    },
    eventDate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;

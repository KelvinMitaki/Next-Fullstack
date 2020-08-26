const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    gender: {
      type: String
    },
    birthDate: {
      type: Date
    },
    homeTown: {
      type: String
    },
    status: {
      type: String
    },
    aboutMe: {
      type: String
    },
    hobbies: {
      type: [String]
    },
    occupation: {
      type: String
    },
    originCountry: {
      type: String
    },
    events: {
      type: [mongoose.Types.ObjectId]
    },
    following: {
      type: [mongoose.Types.ObjectId]
    },
    followers: {
      type: [mongoose.Types.ObjectId]
    },
    photos: {
      type: [String]
    },
    age: {
      type: Number
    },
    interests: {
      type: [String]
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

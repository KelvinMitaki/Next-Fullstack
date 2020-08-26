const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
      required: true
    },
    chat: {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
      },
      message: {
        type: String,
        required: true,
        replies: [
          {
            userReply: {
              type: mongoose.Types.ObjectId,
              ref: "User",
              required: true
            },
            message: {
              type: String,
              required: true
            }
          }
        ]
      }
    }
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;

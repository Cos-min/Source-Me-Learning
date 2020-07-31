const mongose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlenght: 3
    },
    password: String
  },
  {
    timestamp: true
  }
);

module.exports = User = mongoose.model("user", UserSchema);

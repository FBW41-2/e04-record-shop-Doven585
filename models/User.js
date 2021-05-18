const mongoose = require("mongoose");
const { Schema } = mongoose;
const Address = require("./Address");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    address: Address
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);
// bcrypt the password
UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  console.log("UserModel", this);
  next();
});

UserSchema.virtual("fullName").get(function() {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);

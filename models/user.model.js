import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://res.cloudinary.com/ddwxsev3x/image/upload/v1714827560/Image/ghjtxay4tpnnvwqeygfw.jpg"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

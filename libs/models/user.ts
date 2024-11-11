import { model, models, Schema } from "mongoose";


const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,

    },
})


const User = models?.User || model("User",userSchema)
export default User;


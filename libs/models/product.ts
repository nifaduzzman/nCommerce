import { model, models, Schema } from "mongoose";
import User from "./user";

const productSchema = new Schema({
  seller:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  title:String,
  description:String,
  category:String,
  tags:[
    {
      type:String,
      trim:true
    }
  ],
  price:String
})
const Product = models?.Product || model("Product",productSchema)

export default Product;
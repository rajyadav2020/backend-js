import mongoose from "mongoose";

const productschema = new mongoose.Schema( {
  description : {
    required : true,
    type : String,
  },

  name:{
    required : true,
    type : String,
  },

  productImage:{
    type: String,
    
    
  },
  price:{
    type : Number,
    default : 0,
  },

  Stock:{
    type:Number,
    default : 0,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },

  owner:{
    type:mongoose.Schema.Types.Objectid,
    ref:"user"
  }



},{timestamps:true})

export const product = mongoose.model("product",productschema)
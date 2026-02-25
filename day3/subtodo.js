import mongoose from "mongoose";

const subtodoschema = new mongoose.Schema( {
  content:{
    type: String,
    required:true
  },

  complete:{
    type:String,
    default : false
  },

  createdby:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true})

export const subtodo = mongoose.model("subtodo",subtodoschema)
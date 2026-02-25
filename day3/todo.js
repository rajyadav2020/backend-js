import mongoose from "mongoose"
import { User } from "./user.model"

const todoschema = new mongoose.Schema({
  content :{
    type:String,
    required:true,
    
  },

  complete:{
    type:false,
    default:false,


  },

  createdby: {
    type : mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  subtodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"subtodo"
    }
  ]

},{timestamps:true} )

export const todo = mongoose.model("todo",todoschema)
import mongoose, { mongo } from "mongoose"

const orderitemschema = new mongoose.Schema({
  productid : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product",
  },

  quantity:{
    type:Number,
    required:true
  }
})

const orderschema = new mongoose.Schema( {
  orderprice:{
    type:Number,
    required:true,
  },

  customer :{
    type : mongoose.Schema.Types.ObjectId,
    ref :"User"
  },

  orderitems:{
    type: [orderitemschema ]
  },

  address :{
    type : String,
    required:true
  },

  status :{
    type: String,
    enum : [ "PENDING", "CANCELLED","DELIVERED"],
    default : "PENDING"
  }

},{timestamps:true})


export const Order = mongoose.model("Order",orderschema)
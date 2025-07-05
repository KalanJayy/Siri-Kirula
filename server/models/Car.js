import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema.Types

const carSchema = new mongoose.Schema({
    owner: {type: ObjectId, ref: "user"},
    brand: {type: String, required: "true"},

    image: {type: String, required: "true"},

    category: {type: String, required: "true"},


  
    pricePerDay: {type: Number, required: "true"},
    location: {type: String, required: "true"},
    description: {type: String, required: "true"},
    isAvailable: {type: Boolean, default: "true"},
},{timestamps:true})

const Car = mongoose.model('Car', carSchema)

export default Car
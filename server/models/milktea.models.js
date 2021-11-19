//import mongoose
const mongoose = require('mongoose');

// define and create a Schema for author
const MilkteaSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name must at least 3 characters long "]        
    },
    imageURL:{
        type:String,
        required: [true, "Image is required"]
    },
    category:{
        type: String,
        required: [true, "Please choose a milktea"]
    },
    ice:{
        type: String,
        required: [true, "Please choose ice level"]
    },
    howSweet:{
        type: String,
        required: [true, "Please choose sweetness"]
    },
    topping:{
        type: String,
        required: [true, "Please choose a topping"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [0.01, "Price must greater than 0"]
    },
}, {timestamps: true})



// Register the Schema
const Milktea = mongoose.model("Milktea", MilkteaSchema);

module.exports = Milktea;
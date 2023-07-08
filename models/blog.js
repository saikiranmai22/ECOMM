const mongoose = require("mongoose")

// schema lets us define the structure of document -> 
const Schema = mongoose.Schema;
const blogSchema =  new Schema({
    title : {
        type: String,
        required: true 
    },
    snippet :{
        type: String,
        required: true
    },
    body: {
        type : String,
        required: true
    }
},
{ timestamps: true }
)

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog
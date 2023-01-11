const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://YashKudve:Yash%401906@cluster0.xetwf9e.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDB");
    })
}

module.exports = connectToMongo;
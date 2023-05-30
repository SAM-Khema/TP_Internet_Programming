const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/tp09',{
            autoIndex: true,
            serverSelectionTimeoutMS: 30000
        })
        console.log("Mongo connected sucessfully");
    } catch (err) {
        console.log("Mongoose: ",err);
    }
} 
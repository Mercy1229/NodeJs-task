const mongoose = require('mongoose');
exports.Car=mongoose.model('Car',{
    name:String,
    year:Number
})

// For Post method
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
const User = mongoose.model('User', userSchema);
module.exports=User;


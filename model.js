<<<<<<< HEAD
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

=======
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

>>>>>>> 4f1e70636c4f7f7c910f058b95e267015b3f29a3

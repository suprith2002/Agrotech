const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
      
        unique: true

    },

    // password:{
    //     type: String,
     

    // },

    date:{
        type: Date,
        default: Date.now

    },

    number1:{
        type:Number,
    }
    });
    const User = mongoose.model('user', UserSchema);
  
    module.exports = User;
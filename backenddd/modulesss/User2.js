const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema2 = new Schema({
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

    number2:{
        type:Number,
    }
    });
    const User2 = mongoose.model('user2', UserSchema2);
  
    module.exports = User2;
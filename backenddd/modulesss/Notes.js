const mongoose = require('mongoose');
const { Schema } = mongoose;



const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    user2:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user2",
        default:"63baa85c3cb11d1fa38b4e6c"
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
       

    },

    tag:{
        type: String,
        default: "Generalll"

    },

    date:{
        type: Date,
        default: Date.now

    },
    order:{
        type: String,
        default: "Hehe"
    },
    number3:{
        type: Number
    },
    location:{
        type: String
    },
    hour:{
        type: Number
    }
    });
    module.exports = mongoose.model('notes', NotesSchema);
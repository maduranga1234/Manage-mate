const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true 
    },
    address:{
        type:String,
        require:true 
    },
    age:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('customer',customerSchema);
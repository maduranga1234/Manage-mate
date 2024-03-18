const mongoos = require('mongoose');


const userSchema = new mongoos.Schema({



    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },

    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    conformPassword:{
        type:String,
        require:true
    }


});

module.exports = mongoos.model('user',userSchema);
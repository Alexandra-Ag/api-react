const mongoose = require("mongoose");

const carSchema = mongoose.Schema({

    Placa:{
        type:String,
        required:true,
    },

    Marca:{
        type:String,
        required:true,
    },
    
    Color: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('carro', carSchema);

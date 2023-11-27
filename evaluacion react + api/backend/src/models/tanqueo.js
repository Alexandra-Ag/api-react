const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const tanSchema = mongoose.Schema({

    idc:{
        type:String,
        required:true,
    },

    feche:{
        type: String,
        required:true,
    },
    
    Bomba: {
        type: String,
        required: true,
    },
    valortanqueo: {
        type: String,
        required: true,
    },
    Placa_Carro:{
        type:ObjectId,
        ref: 'carro',
        require:true,
    },
});

module.exports = mongoose.model('tanqueo', tanSchema);
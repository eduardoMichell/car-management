const mongoose = require('mongoose')
const Schema = mongoose.Schema


const carSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    yearFabrication:{
        type: Date,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    color:{
        type: String,
    },

},  {collection: 'Cars'})

module.exports = mongoose.model('Car', carSchema)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const potterSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    species:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    house:{
        type: String,
        required: false
    },
    dateOfBirth:{
        type: String,
        required: false
    },
    yearOfBirth:{
        type: Number,
        required: false
    },
    ancestry:{
        type: String,
        required: true
    },
    eyeColour:{
        type: String,
        required: false
    },
    hairColour:{
        type: String,
        required: false
    },
    wand:[{
        type: String,
        required: false
    }],
    patronus:{
        type: String,
        required: false
    },
    hogwartsStudent:{
        type: Boolean,
        required: true
    },
    hogwartsStaff:{
        type: Boolean,
        required: true
    },
    actor:{
        type: String,
        required: true
    },
    alive:{
        type: Boolean,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},
{ 
    collection: 'potter',
    versionKey: false
}
);

const potterCollection = mongoose.model('potter', potterSchema)

module.exports = {
    potterCollection
}
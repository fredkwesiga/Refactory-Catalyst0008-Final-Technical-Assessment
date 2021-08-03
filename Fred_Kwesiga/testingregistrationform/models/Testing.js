const mongoose = require('mongoose');

const testingSchema = new mongoose.Schema({
    firstname:{
        type: String,
        trim: true,
    },
    givenname:{
        type: String,
        trim: true,
    },
    dob:{
        type: Date,
        
    },
    job:{
        type: String,
        trim: true,
    },
    placeofresidence:{
        type: String,
        trim: true,
    },
    nationality:{
        type: String,
        trim: true,
    },
    gender:{
        type: String,
        trim: true,
    },
    field:{
        type:String,
        trim: true,
    }
})
//registers with mongoose to be accessed anywhere by our in our application.
module.exports = mongoose.model('Testing', testingSchema);
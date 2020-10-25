const { Schema, model } = require('mongoose');

const retiredSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,  // should say 'sold out'
        required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    // maybe instead of category it is 'status: unavailable'?
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Retired = model('Retired', retiredSchema)

module.exports = Retired;
// backend/models/Store.js
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    relatedMall: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mall',
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    openingDate: {
        type: String,
        required: true,
    },
    closingDate: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String, // Storing base64-encoded image
        required: true,
    },
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    approval: {
        type: Boolean,
        default: false,  
    },
}, {
    timestamps: true,
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
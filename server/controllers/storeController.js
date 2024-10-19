// backend/controllers/storeController.js
const Store = require('../models/Store');

const { imageToBase64, base64ToImage } = require('../utils/uploadHelper');

const cloudinary = require('cloudinary').v2;

const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Cloudinary Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'uploads/'; // Create this directory in your project
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Create a new store
const createStore = async (req, res) => {
    const { name, description, relatedMall, address, openingDate, closingDate } = req.body;
    
    // Check if file is uploaded
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    console.log('File information:', req.file); // Log file details

    let coverImage = '';
    if (req.file) {
        try {
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                public_id: `stores/${Date.now()}-${req.file.originalname}`,
            });
            coverImage = uploadResult.secure_url; // Get the secure URL of the uploaded image
            console.log('Cloudinary upload success:', uploadResult); // Log Cloudinary response
            
            // Optional: Comment out unlink to test if this is causing issues
            // fs.unlinkSync(req.file.path);
        } catch (error) {
            console.error('Cloudinary upload error:', error); // Log error in detail
            return res.status(500).json({ 
                message: 'Error uploading image to Cloudinary', 
                error: error.message || error,
                testingmessage: `Cloudinary credentials: Name: ${process.env.CLOUD_NAME} - Key: ${process.env.CLOUD_API_KEY} - Secret: ${process.env.CLOUDINARY_API_SECRET}`
            });
        }
    }

    const store = new Store({
        name,
        description,
        relatedMall,
        address,
        openingDate,
        closingDate,
        coverImage,
    });

    try {
        const createdStore = await store.save();
        res.status(201).json(createdStore);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Store', error });
    }
};

// Get all stores
const getStores = async (req, res) => {
    const stores = await Store.find({}).populate('relatedMall', 'name location');
    res.json(stores);
};

// Get a store by ID
const getStoreById = async (req, res) => {
    const store = await Store.findById(req.params.id).populate('relatedMall', 'name location');

    if (store) {
        res.json(store);
    } else {
        res.status(404).json({ message: 'Store not found' });
    }
};

// Update a store
const updateStore = async (req, res) => {
    const { name, description, relatedMall, address, openingDate, closingDate } = req.body;

    // Fetch the store to update
    const store = await Store.findById(req.params.id);

    if (!store) {
        return res.status(404).json({ message: 'Store not found' });
    }

    // Update fields if provided
    store.name = name || store.name;
    store.description = description || store.description;
    store.relatedMall = relatedMall || store.relatedMall;
    store.address = address || store.address;
    store.openingDate = openingDate || store.openingDate;
    store.closingDate = closingDate || store.closingDate;

    // Retain the existing `createdBy` field if not provided
    store.createdBy = store.createdBy || req.user._id; // Assuming req.user contains the authenticated user's data

    // If file exists, upload to Cloudinary
    if (req.file) {
        try {
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                public_id: `stores/${Date.now()}-${req.file.originalname}`,
            });
            store.coverImage = uploadResult.secure_url; // Get the secure URL of the uploaded image
            fs.unlinkSync(req.file.path); // Optional: delete the image after uploading
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading image to Cloudinary', error });
        }
    }

    // Save updated store
    try {
        const updatedStore = await store.save();
        res.json(updatedStore);
    } catch (error) {
        res.status(400).json({ message: 'Error updating Store', error });
    }
};

// Delete a store
const deleteStore = async (req, res) => {
    const store = await Store.findByIdAndDelete(req.params.id);

    if (store) {
        res.json({ message: 'Store removed' });
    } else {
        res.status(404).json({ message: 'Store not found' });
    }
};

// Fetch stores by mall ID
const getStoresByMall = async (req, res) => {
    const mallId = req.params.mallId; // Get mall ID from route parameters

    try {
        const stores = await Store.find({ relatedMall: mallId })
            .populate('relatedMall', 'name location') // Populate mall details if needed
            .populate('createdBy', 'name'); // Populate the creator details if needed

        if (stores.length > 0) {
            res.json(stores);
        } else {
            res.status(404).json({ message: 'No stores found for this mall' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stores for this mall', error });
    }
};

module.exports = {
    createStore,
    getStores,
    getStoreById,
    updateStore,
    deleteStore,
    getStoresByMall,
    upload,
};
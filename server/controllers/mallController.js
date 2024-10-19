const Mall = require('../models/Mall');

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

// Create a new mall
const createMall = async (req, res) => {
    const { name, location, address, openingDate, closingDate } = req.body;

    let coverImage = '';
    if (req.file) {
        try {
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                public_id: `malls/${Date.now()}-${req.file.originalname}`, // Optional: specify a public ID
            });
            coverImage = uploadResult.secure_url; // Get the secure URL of the uploaded image
            fs.unlinkSync(req.file.path); // Optional: delete the image after uploading
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading image to Cloudinary', error });
        }
    }

    const mall = new Mall({
        name,
        location,
        address,
        openingDate,
        closingDate,
        coverImage,
    });

    try {
        const createdMall = await mall.save();
        res.status(201).json(createdMall);
    } catch (error) {
        res.status(400).json({ message: 'Error creating mall', error });
    }
};


// Get all malls 
const getMalls = async (req, res) => {
    const malls = await Mall.find({});
    res.json(malls);
};

// Get a single mall by ID
const getMallById = async (req, res) => {
    const mall = await Mall.findById(req.params.id);

    if (mall) {
        res.json(mall);
    } else {
        res.status(404).json({ message: 'Mall not found' });
    }
};

// Update a mall
const updateMall = async (req, res) => {
    const { name, location, address, openingDate, closingDate } = req.body;

    // Fetch the mall to update
    const mall = await Mall.findById(req.params.id);

    if (!mall) {
        return res.status(404).json({ message: 'Mall not found' });
    }

    // Update fields if provided
    mall.name = name || mall.name;
    mall.location = location || mall.location;
    mall.address = address || mall.address;
    mall.openingDate = openingDate || mall.openingDate;
    mall.closingDate = closingDate || mall.closingDate;

    // Retain the existing `createdBy` field if not provided
    mall.createdBy = mall.createdBy || req.user._id; // Assuming req.user contains the authenticated user's data

    // If file exists, upload to Cloudinary
    if (req.file) {
        try {
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                public_id: `malls/${Date.now()}-${req.file.originalname}`,
            });
            mall.coverImage = uploadResult.secure_url; // Get the secure URL of the uploaded image
            fs.unlinkSync(req.file.path); // Optional: delete the image after uploading
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading image to Cloudinary', error });
        }
    }

    // Save updated mall
    try {
        const updatedMall = await mall.save();
        res.json(updatedMall);
    } catch (error) {
        res.status(400).json({ message: 'Error updating mall', error });
    }
};

// Delete a mall using findByIdAndDelete
const deleteMall = async (req, res) => {
    const mall = await Mall.findByIdAndDelete(req.params.id);

    if (mall) {
        res.json({ message: 'Mall removed' });
    } else {
        res.status(404).json({ message: 'Mall not found' });
    }
};


module.exports = {
    createMall,
    getMalls,
    getMallById,
    updateMall,
    deleteMall,
    upload,
};
const Product = require('../models/Product');

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
        const uploadPath = 'uploads/'; 
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Create a new product
const createProduct = async (req, res) => {
    const { name, description, relatedStore } = req.body;

    let coverImage = '';
    if (req.file) {
        try {
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                public_id: `products/${Date.now()}-${req.file.originalname}`, // specify a public ID
            });
            coverImage = uploadResult.secure_url; // Get the secure URL of the uploaded image
            fs.unlinkSync(req.file.path); // delete the image after uploading
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading image to Cloudinary', error });
        }
    }

    const product = new Product({
        name,
        description,
        relatedStore,
        coverImage,
        createdBy: req.user._id,
    });

    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};

// Get all products
const getProducts = async (req, res) => {
    const products = await Product.find({})
        .populate('relatedStore', 'name')
        .populate('createdBy', 'name');
    res.json(products);
};

// Get a product by ID
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
        .populate('relatedStore', 'name')
        .populate('createdBy', 'name');

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Update a product (only allow if the user is the creator or an admin)
const updateProduct = async (req, res) => {
    const { name, description, relatedStore } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        if (product.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to update this product' });
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.relatedStore = relatedStore || product.relatedStore;

        if (req.file) {
            try {
                const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                    public_id: `products/${Date.now()}-${req.file.originalname}`, // Optional: specify a public ID
                });
                product.coverImage = uploadResult.secure_url; // Get the secure URL of the uploaded image
                fs.unlinkSync(req.file.path); // Optional: delete the image after uploading
            } catch (error) {
                return res.status(500).json({ message: 'Error uploading image to Cloudinary', error });
            }
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Delete a product (only allow if the user is the creator or an admin)
const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (product) {
        if (product.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this product' });
        }
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Fetch products by store ID
const getProductsByStore = async (req, res) => {
    const storeId = req.params.storeId; // Get store ID from route parameters

    try {
        const products = await Product.find({ relatedStore: storeId })
            .populate('relatedStore', 'name') // Populate store details if needed
            .populate('createdBy', 'name'); // Populate the creator details if needed

        if (products.length > 0) {
            res.json(products);
        } else {
            res.status(404).json({ message: 'No products found for this store' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products for this store', error });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductsByStore,
    upload,
};
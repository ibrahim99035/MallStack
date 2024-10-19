// backend/routes/productRoutes.js
const express = require('express');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductsByStore,
    upload,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);
router.get('/store/:storeId', getProductsByStore);

// Protected routes for creating, updating, and deleting products
router.post('/', protect, authorizeRoles('admin', 'moderator'), upload.single('coverImage'), createProduct);
router.put('/:id', protect, authorizeRoles('admin', 'moderator'), upload.single('coverImage'), updateProduct);
router.delete('/:id', protect, authorizeRoles('admin', 'moderator'), deleteProduct);

module.exports = router;
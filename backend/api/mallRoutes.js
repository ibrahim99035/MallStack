// backend/routes/mallRoutes.js
const express = require('express');
const {
    createMall,
    getMalls,
    getMallById,
    updateMall,
    deleteMall,
} = require('../controllers/mallController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

// Public route to get all malls
router.get('/', getMalls);

// Public route to get a specific mall by ID
router.get('/:id', getMallById);

// Protected routes for admins
router.post('/', protect, authorizeRoles('admin'), createMall);
router.put('/:id', protect, authorizeRoles('admin'), updateMall);
router.delete('/:id', protect, authorizeRoles('admin'), deleteMall);

module.exports = router;
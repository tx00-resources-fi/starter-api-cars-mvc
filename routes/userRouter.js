const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');

// GET /users
router.get('/', getAllUsers);

// POST /users


// GET /users/:userId


// PUT /users/:userId


// DELETE /users/:userId

module.exports = router;

// Create web server

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Define routes

// Route to get all comments
router.get('/comments', commentController.getAllComments);

// Route to get a specific comment by ID
router.get('/comments/:id', commentController.getCommentById);

// Route to create a new comment
router.post('/comments', commentController.createComment);

// Route to update a comment by ID
router.put('/comments/:id', commentController.updateComment);

// Route to delete a comment by ID
router.delete('/comments/:id', commentController.deleteComment);

// Export the router
module.exports = router;
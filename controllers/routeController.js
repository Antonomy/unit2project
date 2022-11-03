const express = require('express')
const router = express.Router()
const promptDataController = require('./promptDataController')
const commentDataController = require('./commentDataController')
const viewController = require('./viewController')

// Routes
// Index
router.get('/', promptDataController.index, viewController.index)
// New
router.get('/new', viewController.newView)
// Delete
router.delete('/:id', promptDataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', promptDataController.update, viewController.redirectHome)
// Create Prompt
router.post('/', promptDataController.create, viewController.redirectHome)
// Edit
router.get('/:id/edit', promptDataController.show, viewController.edit)
// Show
router.get('/:id', promptDataController.show, viewController.show)

// Comments Routing

// Delete
router.delete('/:id/comment', commentDataController.destroy)
// Update
router.put('/:id/comment', commentDataController.update)
// Create
router.post('/:id/newcomment', commentDataController.create, viewController.redirectShow)

module.exports = router
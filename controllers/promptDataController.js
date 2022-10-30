const Prompt = require('../models/prompt')
const Comment = require('../models/comment')

const promptDataController = {
  // Index,
  index(req, res, next) {
    Prompt.find({}, (err, foundPrompts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.prompts = foundPrompts
        next()
      }
    }).sort({votes:-1})
  },
  // Destroy
  destroy(req, res, next) {
    Prompt.findByIdAndDelete(req.params.id, (err, deletedPrompt) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.prompt = deletedPrompt
        next()
      }
    })
  },
  // Update
  update(req, res, next) {
    Prompt.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPrompt) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.prompt = updatedPrompt
        next()
      }
    })
  },
  // Create
  create(req, res, next) {
    Prompt.create(req.body, (err, createdPrompt) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.prompt = createdPrompt
        next()
      }
    })
  },
  // Show
  show(req, res, next) {
    Prompt.findById(req.params.id, (err, foundPrompt) => {
      Comment.find({promptId: req.params.id}, (err, foundComment) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'Could not find a prompt with that ID'
          })
        } else {
          res.locals.data.prompt = { prompt: foundPrompt, comment: foundComment }
          next()
        }
      }).sort({votes:-1})
    }
    )
  }
}

module.exports = promptDataController

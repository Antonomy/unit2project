const Comment = require('../models/comment')

const commentDataController = {
  // Destroy
  destroy(req, res, next) {
    Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = deletedComment
        res.redirect(`/prompts/${deletedComment.promptId}`)
        // next()
      }
    })
  },
  // Update
  update(req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = updatedComment
        res.redirect(`/prompts/${updatedComment.promptId}`)
      }
    })
  },
  // Create
  create(req, res, next) {
    Comment.create(req.body, (err, createdComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = createdComment
        next()
      }
    })
  }
}

module.exports = commentDataController
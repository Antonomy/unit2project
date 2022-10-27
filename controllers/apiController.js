const apiController = {
    index(req, res, next){
      res.json(res.locals.data.comments)
    },
    show(req, res, next){
      res.json(res.locals.data.comment)
    }
  }
  
  // We only need Index and Show because we are currently only ever showing a list of comments
  // Or we are showing a single comment
  // Additional Routes will be added on Tuesday once we incorporate nuanced functionality
  module.exports = apiController
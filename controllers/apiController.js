const apiController = {
    index(req, res, next){
      res.json(res.locals.data.comments)
    },
    show(req, res, next){
      res.json(res.locals.data.comment)
    }
  }
  
  module.exports = apiController
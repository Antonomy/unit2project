const apiController = {
    index(req, res, next){
      res.json(res.locals.data.prompts)
    },
    show(req, res, next){
      res.json(res.locals.data.prompt)
    }
  }
  
  module.exports = apiController
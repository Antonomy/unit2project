const RESOURCE_PATH = '/prompts'

const viewController = {
  index (req, res, next) {
    res.render('prompts/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('prompts/New')
  },
  edit (req, res, next) {
    res.render('prompts/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('prompts/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.prompt.id}`)
  }

}

module.exports = viewController

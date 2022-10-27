const RESOURCE_PATH = '/comments'

const viewController = {
  index (req, res, next) {
    res.render('comments/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('comments/New')
  },
  edit (req, res, next) {
    res.render('comments/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('comments/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.comment.id}`)
  }

}

module.exports = viewController

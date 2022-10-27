const React = require('react')

class Default extends React.Component {
  render () {
    const { comment, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/comments'>Go to Home Page For Comments</a>
            <a href='/comments/new'>Create a New Comment</a>
            {comment ? <a href={`/comments/${comment._id}/edit`}> {comment.name} Edit Page </a> : ''}
            {comment ? <a href={`/comments/${comment._id}`}>{comment.name} Show Page</a> : ''}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default

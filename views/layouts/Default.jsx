const React = require('react')

class Default extends React.Component {
  render() {
    const { prompt, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <header>
          <nav>
            <a href='/prompts'>View All Prompts</a>
          </nav>
          <br />
          <h1>
            {title}
          </h1>
        </header>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default

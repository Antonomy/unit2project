const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { promptText, votes, _id } = this.props.prompt
    return (
      <Default title={`Prompt Show Page`} prompt={this.props.prompt}>
        <p>"{promptText}" has {votes} votes</p>
        <a href={`/prompts/${_id}/edit`}>Edit</a>
      </Default>
    )
  }
}

module.exports = Show

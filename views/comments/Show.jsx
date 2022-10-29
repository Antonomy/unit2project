const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { commentText, votes, _id } = this.props.comment
    return (
      <Default title={`Comment Show Page`} comment={this.props.comment}>
        <p>"{commentText}" has {votes} votes</p>
        <a href={`/comments/${_id}/edit`}>Edit</a>
      </Default>
    )
  }
}

module.exports = Show

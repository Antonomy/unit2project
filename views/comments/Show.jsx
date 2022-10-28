const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { commentText, votes } = this.props.comment
    return (
      <Default title={`Comment Show Page`} comment={this.props.comment}>
        <p>"{commentText}" has {votes} votes</p>
      </Default>
    )
  }
}

module.exports = Show

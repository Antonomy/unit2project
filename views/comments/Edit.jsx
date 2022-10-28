const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { commentText, _id, votes } = this.props.comment
    return (
      <Default title={`Comment Edit Page`} comment={this.props.comment}>
        <form method='POST' action={`/comments/${_id}?_method=PUT`}>
          Comment Text: <input type='text' name='commentText' defaultValue={commentText} /><br />
          <input type='submit' value='Edit Comment' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit

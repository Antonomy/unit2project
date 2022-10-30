const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { promptText, votes, _id } = this.props.prompt.prompt
    const [...comments] = this.props.prompt.comment
    return (
      <Default title={`Prompt Show Page`} prompt={this.props.prompt}>
        <p>"{promptText}" has {votes} votes</p>
        <a href={`/prompts/${_id}/edit`}>Edit</a>

        <ul>
          {
            comments.map((comment) => {
              const { commentText, votes} = comment
              return (
                <li key={comment._id}>
                  <span id="votes">
                    <form method='POST' action={`/prompts/${comment._id}/comment?_method=PUT`}>
                      <button type='submit' name='votes' value={votes + 1}>
                        ^
                      </button>
                      {votes}
                      <button type='submit' name='votes' value={votes - 1} id="upsidedown">
                        ^
                      </button>
                    </form>
                  </span>
                    {commentText}
                  <form method='POST' action={`/prompts/${comment._id}/comment?_method=DELETE`}>
                    <input type='submit' value={`X`} />
                  </form>
                </li>
              )
            })
          }
        </ul>

        <form method='POST' action={`/prompts/${_id}/newcomment`}>
          Add a Comment: <input type='text' name='commentText' placeholder='Comment Here' size="100"/><br />
          <input type="hidden" name="promptId" value={_id} />
          <input type='submit' value='Submit Comment'/>
        </form>


      </Default>
    )
  }
}

module.exports = Show
// 
const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render() {
    const { comments } = this.props
    return (
      <Default title='Suggestions Box'>
        <h2>
          Where do we want to go on vacation?
        </h2>

        <ul>
          {
            comments.map((comment) => {
              const { commentText, votes, _id } = comment
              return (
                <li key={_id}>
                  <span id="votes">
                    <form method='POST' action={`/comments/${_id}?_method=PUT`}>
                      <button type='submit' name='votes' value={votes + 1}>
                        ^
                      </button>
                      {votes}
                      <button type='submit' name='votes' value={votes - 1} id="upsidedown">
                        ^
                      </button>
                    </form>
                  </span>
                  <a href={`/comments/${_id}`}>
                    {commentText}
                  </a>
                  <form method='POST' action={`/comments/${_id}?_method=DELETE`}>
                    <input type='submit' value={`X`} />
                  </form>
                </li>
              )
            })
          }
        </ul>
        <br />
        <a href='/comments/new'>Add Comment</a>
      </Default>
    )
  }
}

module.exports = Index

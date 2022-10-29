const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render() {
    const { comments } = this.props
    return (
      <Default title='Comments Index Page'>
        <h2>
          What would you like to do today?
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

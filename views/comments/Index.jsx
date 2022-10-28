const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { comments } = this.props
    return (
      <Default title='Comments Index Page'>
        <ul>
          {
                        comments.map((comment) => {
                          const { commentText, votes, _id } = comment
                          return (
                            <li key={_id}>
                              <a href={`/comments/${_id}`}>
                                {commentText}
                              </a> has {votes}

                              <br />
                              <form method='POST' action={`/comments/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete comment with ${votes} votes`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index

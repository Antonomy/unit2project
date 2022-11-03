const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render() {
    const { prompts } = this.props
    return (
      <Default title='Suggestions Box'>
        <ul>
          {
            prompts.map((prompt) => {
              const { promptText, votes, _id } = prompt
              return (
                <li key={_id}>
                  <span id="votes">
                    <form method='POST' action={`/prompts/${_id}?_method=PUT`}>
                      <button type='submit' name='votes' value={votes + 1}>
                        <img class="voteButton" src="/images/upvote.png" />
                      </button>
                      {votes}
                      <button type='submit' name='votes' value={votes - 1}>
                        <img class="voteButton" src="/images/downvote.png" />
                      </button>
                    </form>
                  </span>
                  <a href={`/prompts/${_id}`}>
                    {promptText}
                  </a>
                  <form method='POST' action={`/prompts/${_id}?_method=DELETE`}>
                    <button type='submit'>
                      <img id="deleteimg" class="voteButton" src="/images/delete.png" />
                    </button>
                  </form>
                </li>
              )
            })
          }
        </ul>
        <br />
        <form method='POST' action='/prompts'>
          Add a new Prompt: <input type='text' name='promptText' placeholder='Prompt Here' size="100" /><br />
          <input type='submit' value='Submit Prompt' />
        </form>
      </Default>
    )
  }
}

module.exports = Index

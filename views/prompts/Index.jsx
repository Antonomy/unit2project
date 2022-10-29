const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render() {
    const { prompts } = this.props
    return (
      <Default title='Suggestions Box'>
        <h2>
          Where do we want to go on vacation?
        </h2>

        <ul>
          {
            prompts.map((prompt) => {
              const { promptText, votes, _id } = prompt
              return (
                <li key={_id}>
                  <span id="votes">
                    <form method='POST' action={`/prompts/${_id}?_method=PUT`}>
                      <button type='submit' name='votes' value={votes + 1}>
                        ^
                      </button>
                      {votes}
                      <button type='submit' name='votes' value={votes - 1} id="upsidedown">
                        ^
                      </button>
                    </form>
                  </span>
                  <a href={`/prompts/${_id}`}>
                    {promptText}
                  </a>
                  <form method='POST' action={`/prompts/${_id}?_method=DELETE`}>
                    <input type='submit' value={`X`} />
                  </form>
                </li>
              )
            })
          }
        </ul>
        <br />
        <a href='/prompts/new'>Add Prompt</a>
      </Default>
    )
  }
}

module.exports = Index

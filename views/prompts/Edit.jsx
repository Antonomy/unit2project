const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { promptText, _id, votes } = this.props.prompt.prompt
    return (
      <Default title={`Prompt Edit Page`} prompt={this.props.prompt}>
        <form method='POST' action={`/prompts/${_id}?_method=PUT`}>
          Prompt Text: <input type='text' name='promptText' size="100" defaultValue={promptText} /><br />
          <input type='submit' value='Edit Prompt' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit

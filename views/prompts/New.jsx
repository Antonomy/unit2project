const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Prompt'>
        <form method='POST' action='/prompts'>
          Prompt: <input type='text' name='promptText' placeholder='Prompt Here' size="100"/><br />
          <input type='submit' value='Submit Prompt'/>
        </form>
      </Default>
    )
  }
}

module.exports = New

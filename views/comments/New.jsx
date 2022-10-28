const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Comment'>
        <form method='POST' action='/comments'>
          Comment: <input type='text' name='commentText' placeholder='Comment Here' /><br />
          {/* Votes: <input type='number' name='votes' placeholder='0' /><br /> */}
          <input type='submit' value='Submit Comment' />
        </form>
      </Default>
    )
  }
}

module.exports = New

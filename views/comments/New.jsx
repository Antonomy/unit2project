const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Comment'>
        <form method='POST' action='/comments'>
          Name: <input type='text' name='name' placeholder='Name of Comment Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Comment Here' /><br />
          Is Ready To Eat: <input type='checkbox' name='readyToEat' /><br />
          <input type='submit' value='Submit Comment' />
        </form>
      </Default>
    )
  }
}

module.exports = New

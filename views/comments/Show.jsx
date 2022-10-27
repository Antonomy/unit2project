const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, readyToEat } = this.props.comment
    return (
      <Default title={`${name} Show Page`} comment={this.props.comment}>
        <p>{name} is {color} and {readyToEat ? 'it\'s ready to eat' : 'it\'s not ready to eat'}</p>
      </Default>
    )
  }
}

module.exports = Show

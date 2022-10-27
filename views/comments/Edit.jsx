const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, readyToEat } = this.props.comment
    return (
      <Default title={`${name} Edit Page`} comment={this.props.comment}>
        <form method='POST' action={`/comments/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Color: <input type='text' name='color' defaultValue={color} /><br />
          Is Ready To Eat: <input type='checkbox' name='readyToEat' defaultChecked={readyToEat} /> <br />
          <input type='submit' value='Edit Comment' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit

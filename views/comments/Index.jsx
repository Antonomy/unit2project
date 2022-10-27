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
                          const { name, color, readyToEat, _id } = comment
                          return (
                            <li key={_id}>
                              <a href={`/comments/${_id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        readyToEat
                                          ? 'It\'s ready to eat'
                                          : 'It\'s not ready to eat'
                                    }
                              <br />
                              <form method='POST' action={`/comments/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
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

const React = require('react')

const App = React.createClass({
  getInitialState: function() {
    return {
      persons: [{
        name: 'Tom',
        id: 1
      },
      {
        name: 'Trip',
        id: 2
      },
      {
        name: 'Derek',
        id: 3
      },
      {
        name: 'Kendra',
      id: 4
    },
      {
        name: 'Andrea',
      id: 5
    },
      {
        name: 'Jared',
      id: 6
    },
      {
        name: 'Joshua',
      id: 7
    },
      {
        name: 'Chris',
      id: 8
    },
      {
        name: 'Alex',
        id: 9
    },
      {
        name: 'Joe',
        id: 10
      },
      {
        name: 'Cameron',
        id: 11
      },
      {
        name: 'Matt',
        id: 12
      }],
      members: [{
        name: 'Tom',
        id: 1
      }, {
      name: 'Trip',
      id: 2
    }]
  }
},
  render() {
    return (
      <div>
        <div style={{float: 'left'}}>
          <h3>Persons</h3>
          <ul>
            {this.state.persons.map(p =>
              <li key={p.id}>{p.name}
                <button>Add Member</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h3>Team</h3>
          <ul>
            {this.state.members.map(m =>
              <li key ={m.id}>
                {m.name}
                <button>Remove</button>
            </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = App

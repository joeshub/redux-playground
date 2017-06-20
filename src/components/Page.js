import React, { PureComponent } from 'react'

export default class Page extends PureComponent {

  increment = () => {
    this.props.actions.incrementCounter(this.props.counter+1)
  }

  render () {
    return (
      <section>
        <h1>Simple Redux</h1>
        <button onClick={this.increment}>increment</button>
        <p>counter: { this.props.counter }</p>
        <button onClick={this.props.actions.getUsers}>get users</button>
        <div>{ this.props.error }</div>
        <ul>
        {this.props.users.map(user => {
          return <li key={user.email}>{ user.first_name } { user.last_name } - { user.email } </li>
        })}
        </ul>
      </section>
    )
  }
}


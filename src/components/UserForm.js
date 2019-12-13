import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer } from '../providers/UserProvider'

class UserForm extends React.Component {
  state = { username: this.props.username,  email: this.props.email, firstName: this.props.firstName, lastName: this.props.lastName}

  handleChange = (e, {name, value }) => this.setState({ [name]: value, })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateUser(this.state)
  }

  render() {
    const {username, email, firstName, lastName, } =this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
                  label="New Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange} 
                  />
                      <Form.Input
                  label="Email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange} 
                  />
                      <Form.Input
                  label="First Name"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange} 
                  />
                      <Form.Input
                  label="Last Name"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange} 
                  />
                   <Form.Button color="blue">Save</Form.Button>
      </Form>

    )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          { ...props }
          username={value.username}
          email={value.email}
          firstName={value.firstName}
          lastName={value.lastName}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;
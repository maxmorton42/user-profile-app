import React, { useContext, } from "react";
import { Card, } from 'semantic-ui-react'
import { UserContext, } from "../providers/UserProvider";


const User = () => {
  const usa = useContext(UserContext);
  return (
  <Card>
    <Card.Content>
      <Card.Header>{usa.username}</Card.Header>
      <Card.Meta>
       Email: {usa.email}
      </Card.Meta>
      <Card.Content>
        <p>{usa.firstName}</p>
        <p>{usa.lastName}</p>
      </Card.Content>
    </Card.Content>
  </Card>
)
  }
export default User;



import React from "react";
import PropTypes from 'prop-types';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = (props) => {
const link = props.link;
const bio = props.bio;
const profession = props.profession;
const handleName = () => {
  alert('I am Huh YunJin');
};

  return (
    <div>
       <Card style={{ width: "18rem" }}>
       <Card.Img variant="top" src={link}  />
       <Card.Body>
         <Card.Title>{bio}</Card.Title>
         <Card.Text>{profession}</Card.Text>
        
        <Button onClick={handleName}>Click me</Button>
      </Card.Body>
    </Card>
    </div>
  )
};

Profile.propTypes = {
link:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string,
 }

export default Profile;
import React from 'react'
import api from '../Data/api';
import Profile from './Profile';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ContainerSys = () => {
    return (
        <div>
<Container>
    <Row>
        {api.map(({link, bio, profession})=>
        <Col>
<Profile
link={link}
bio= {bio}
profession= {profession}
/> 
        </Col>
        )}
    </Row>
</Container>
        </div>
    )
}

export default ContainerSys

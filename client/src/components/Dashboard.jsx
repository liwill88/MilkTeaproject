import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import png11 from '/Users/will8088/Desktop/MERN_Project/client/src/assets/MT-images/1111.png'

const Dashboard = () => {

    const [allMilktea, setAllMilktea] = useState([]);
    const [submitted, setSubmitted] = useState(false)
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/api/milktea')
            .then(res => {
                setAllMilktea(res.data);
            })
            .catch(err => console.log(err))
    }, [submitted])


    return (
        <Container>
            <Row>
                <img src={png11} style={{width: "100%", height:"350px"}} />
            </Row>
            <div>
                <Col>
                    {allMilktea.map((milktea, index) => {
                        return (
                            <Card>
                                <Card.Header as="h5">{milktea.name}</Card.Header>
                                <Card.Body key={index}>
                                    <Card.Text style={{ display: 'flex' }}>
                                        <Col>
                                            <img src={milktea.imageURL} alt="milktea.jpg" style={{ width: 200, height: 200 }} />
                                        </Col>
                                        <Col sm={6} style={{ lineHeight: "70px" }}>
                                            <h5>Type: {milktea.category}</h5>
                                            <h5>Topping: {milktea.topping}</h5>
                                            <h5>Sweetness: {milktea.howSweet}</h5>
                                            <h5>Price: ${milktea.price}</h5>
                                            <Button variant="primary" onClick={() => history.push(`/milktea/${milktea._id}`)}>View</Button>
                                        </Col>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Col>
            </div>
        </Container >
    )
}

export default Dashboard

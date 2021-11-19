import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Navbar, Button, Card, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap'
import { useAuth } from "/Users/will8088/Desktop/MERN_Project/client/src/context/AuthContext.js"



const Detail = () => {

    const [milkTea, setMilkTea] = useState("")
    const history = useHistory()
    const { id } = useParams()
    const [submitted, setSubmitted] = useState(false)
    const { currentUser, logout } = useAuth()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/milktea/${id}`)
            .then(res => setMilkTea(res.data))
            .catch(err => console.log(err))
    }, [submitted])

    const deleteHandler = (milkteaID) => {
        axios.delete(`http://localhost:8000/api/milktea/${milkteaID}`)
            .then(res => {
                setSubmitted(!submitted)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    const handleLogout = e => {
        history.push("/login")
    }


    return (
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand >
                        <Button onClick={() => history.push('/')} variant="primary">Home</Button>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {currentUser.email} &nbsp;
                            <Button onClick={handleLogout} variant="primary">Log out</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Card style={{ width: '400px' }}>
                <Card.Img variant="top" src={milkTea.imageURL} />
                <Card.Body>
                    <Card.Title>{milkTea.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Category: {milkTea.category}</ListGroupItem>
                    <ListGroupItem>Ice: {milkTea.ice}</ListGroupItem>
                    <ListGroupItem>Sweetness: {milkTea.howSweet}</ListGroupItem>
                    <ListGroupItem>Topping: {milkTea.topping}</ListGroupItem>
                    <ListGroupItem>Price: ${milkTea.price}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => history.push(`/milktea/${milkTea._id}/edit`)} style={{ marginRight: 20 }} variant="primary">Edit</Button>
                    <Button onClick={() => { deleteHandler(milkTea._id) }} variant="primary">Delete</Button>
                </Card.Body>
            </Card>

            {/* <Container>
                <Card>
                    <Row>
                        <Col sm={4}>
                            <img src={milkTea.imageURL} alt="milkTea.jpg" style={{ width: "auto"}} />
                        </Col>
                        <Col sm={4}>
                            <Card.Body>
                                <Card.Text>
                                    <h2>{milkTea.name}</h2>
                                    <h5>Type: {milkTea.category}</h5>
                                    <h5>Ice: {milkTea.ice}</h5>
                                    <h5>Sweetness: {milkTea.howSweet}</h5>
                                    <h5>Topping: {milkTea.topping}</h5>
                                    <h5>Price: ${milkTea.price}</h5>
                                    <Button variant="primary" >View</Button>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col sm={4}>
                            <Card.Body>
                                <Card.Text>
                                    <h5>Type: </h5>
                                    <h5>Topping: </h5>
                                    <h5>Sweetness: </h5>
                                    <h5>Price: $</h5>
                                    <Button variant="primary" >View</Button>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container> */}

            {/* <div>
                <img src={milkTea.imageURL} alt="milkTea.jpg" style={{ width: 300, height: 300 }} /><br /><br />
                <h2>{milkTea.name}</h2>
                <h4>Category: {milkTea.category}</h4>
                <h4>Ice: {milkTea.ice}</h4>
                <h4>Sweetness: {milkTea.howSweet}</h4>
                <h4>Topping: {milkTea.topping}</h4>
                <h4>Price: ${milkTea.price}</h4><br />
                <button onClick={() => history.push(`/milktea/${milkTea._id}/edit`)} style={{ marginRight: 20 }}>Edit</button>
                <button onClick={() => { deleteHandler(milkTea._id) }}>Delete</button>
            </div> */}
        </Container>
    )
}

export default Detail


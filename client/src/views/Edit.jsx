import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Navbar, Button, Form, Alert } from 'react-bootstrap'

const Edit = () => {

    const [name, setName] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [category, setCategory] = useState("")
    const [ice, setIce] = useState("")
    const [howSweet, setHowSweet] = useState("")
    const [topping, setTopping] = useState("")
    const [price, setPrice] = useState("")

    const [errors, setErrors] = useState([])
    const history = useHistory();
    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/milktea/${id}`)
            .then(res => {
                setName(res.data.name)
                setImageURL(res.data.imageURL)
                setCategory(res.data.category)
                setIce(res.data.ice)
                setHowSweet(res.data.howSweet)
                setTopping(res.data.topping)
                setPrice(res.data.price)
                setErrors([])
            })
            .catch(err => console.log(err))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault()
        const postData = {
            name,
            imageURL,
            category,
            ice,
            howSweet,
            topping,
            price,
        }
        axios.put(`http://localhost:8000/api/milktea/${id}`, postData)
            .then(res => {
                console.log(res.data)
                setErrors([])
                history.push('/')

            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = [];

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }



    return (
        <Container>
            <Navbar>
                <Container>
                    <Navbar.Brand >
                        <Button onClick={() => history.push('/')} variant="primary">Home</Button>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>

            <Form onSubmit={updateHandler} className="w-50 mt-4">
                <h2 className="text-center mb-4">Update Your Selection</h2>
                {errors.map((err, index) => <Alert key={index} className="text-center mb-4">{err}</Alert>)}
                <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => setName(e.target.value)} value={name} />
                </Form.Group>

                <Form.Group id="imageURL">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" onChange={e => setImageURL(e.target.value)} value={imageURL} />
                </Form.Group>

                <Form.Group id="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example" value={category} onChange={e => setCategory(e.target.value)}>
                        <option>Open this select menu</option>
                        <option>Milktea</option>
                        <option>Fruit Tea</option>
                        <option>Sea Salt Creams</option>
                        <option>Slush</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group id="sweetness">
                    <Form.Label>Sweetness</Form.Label>
                    <Form.Select aria-label="Default select example" value={howSweet} onChange={e => setHowSweet(e.target.value)}>
                        <option>Open this select menu</option>
                        <option>100%</option>
                        <option>75%</option>
                        <option>50%</option>
                        <option>0%</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group id="ice">
                    <Form.Label>Ice Level</Form.Label>
                    <Form.Select aria-label="Default select example" value={ice} onChange={e => setIce(e.target.value)}>
                        <option>Open this select menu</option>
                        <option>No Ice</option>
                        <option>Less Ice</option>
                        <option>Normal Ice</option>
                        <option>Extra Ice</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group id="topping">
                    <Form.Label>Topping</Form.Label>
                    <Form.Select aria-label="Default select example" value={topping} onChange={e => setTopping(e.target.value)}>
                        <option>Open this select menu</option>
                        <option>No Topping</option>
                        <option>Tapioca (Boba)</option>
                        <option>Crystal Boba</option>
                        <option>Popping Boba</option>
                        <option>Egg Pudding</option>
                        <option>Lychee Jelly</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group id="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" min={0.01} step={0.01} onChange={e => setPrice(e.target.value)} value={price} />
                </Form.Group>
                <Button type="submit" className="w-50 mt-4">Update</Button>
            </Form>


            {/* <div>
            <h2 className="text-center mb-4">Edit Your Milktea</h2>
            {errors.map((err, index) => <p key={index} className="text-center mb-4">{err}</p>)}
            <form onSubmit={updateHandler} className="text-center mb-4">
                <label>Milktea Name: </label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
                <br/><br/>
                <label>Image URL: </label>                
                <input type="text" onChange={e => setImageURL(e.target.value)} value={imageURL} />
                <br/><br/>
                <label>Category: </label>
                <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option>Milktea</option>
                    <option>Fruit Tea</option>
                    <option>Sea Salt Creams</option>
                    <option>Slush</option>
                </select>
                <br/><br/>
                <label>Sweetness: </label>
                <select name="sweetness" value={howSweet} onChange={e => setHowSweet(e.target.value)}>
                    <option>100%</option>
                    <option>75%</option>
                    <option>50%</option>
                    <option>0%</option>
                </select>
                <br/><br/>
                <label>Ice: </label>
                <select name="ice" value={ice} onChange={e => setIce(e.target.value)}>
                    <option>No Ice</option>
                    <option>Less Ice</option>
                    <option>Normal Ice</option>
                    <option>Extra Ice</option>
                </select>
                <br/><br/>
                <label>Toppings: </label>
                <select name="topping" value={topping} onChange={e => setTopping(e.target.value)}>
                    <option>No Topping</option>
                    <option>Tapioca (Boba)</option>
                    <option>Crystal Boba</option>
                    <option>Popping Boba</option>
                    <option>Egg Pudding</option>
                    <option>Lychee Jelly</option>
                </select>
                <br/><br/>
                <label>Price: </label>
                <input type="number" min={0.01} step={0.01} onChange={e => setPrice(e.target.value)} value={price}/>
                <br/><br/>
                <button>Update</button>
            </form>
        </div> */}
        </Container>
    )
}

export default Edit

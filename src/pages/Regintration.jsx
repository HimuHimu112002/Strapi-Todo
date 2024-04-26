import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row,Form, Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Regintration = () => {
    
    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    let handleName = (e) =>{
        setName(e.target.value)
    }
    let handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    let handlepass = (e) =>{
        setPass(e.target.value)
    }
    let handleRegi = async() =>{
        axios.post("http://localhost:1337/api/auth/local/register", {
            username: username,
            email: email,
            password: password
            
        }).then((response) => {
            console.log(response);
        }); 
       
    }

  return (
    <Container>
        <Row className='dd d-flex justify-content-center align-items-center'>
            <Col className='m-auto shadow-sm' md="6">
                <h1 className='text-center my-4'>Regintration Here</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control onChange={handleName} type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlepass} type="password" placeholder="1234567890" />
                    </Form.Group>
                </Form>
                <Button onClick={handleRegi} className='my-3' variant="primary">SignUp</Button>
                <p>Click to <Link to="/login" className='text-read'>login</Link> page</p>
                <p>Click to <Link to="/" className='text-read'>home</Link> page</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Regintration
import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row,Form, Button  } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [error, setError] = useState("")
    
    let handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    let handlepass = (e) =>{
        setPass(e.target.value)
    }
    let handleRegi = async() =>{
        try{
            axios.post("http://localhost:1337/api/auth/local", {
                identifier: email,
                password: password
            }).then((response) => {
                navigate("/")
            })
        }catch(response){
            setError(response.data.error.message)
        }
        
       
    }
  return (
    <Container>
        <Row className='dd d-flex justify-content-center align-items-center'>
            <Col className='m-auto shadow-sm' md="6">
                <h1 className='text-center my-4'>Login Here</h1>
                {error}
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlepass} type="password" placeholder="1234567890" />
                    </Form.Group>
                </Form>
                <Button onClick={handleRegi} className='my-3' variant="primary">Login</Button>
                <p>Click to <Link to="/regi" className='text-read'>registration</Link> page</p>
                <p>Click to <Link to="/" className='text-read'>home</Link> page</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Login
import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    
    const [todotitle, setTitle] = useState([])
    const [todo, setTodo] = useState("")
    const [uptodo, setUpTodo] = useState("")

    // Start read todo list
    useEffect(()=>{
      async function todoTitle(){
        const data = await axios.get('http://localhost:1337/api/todos');
        setTitle(data.data.data)
      }
      todoTitle()
    },[])
    // end read todo list
  
    // =======================================================
  
  
    // Start Delete todo
    let handleDelete = async(id) =>{
      await axios.delete(`http://localhost:1337/api/todos/${id}`)
    }
    // End Delete todo
  
    // =======================================================
  
    // Start create todo
    let handleTitle = async (e)=>{
      setTodo(e.target.value)
    }
  
    let handleAdd = async ()=>{
      axios.post("http://localhost:1337/api/todos", {
        data: {
          Title: todo,
        },
      }).then((response) => {
        console.log(response);
      }); 
    }
    // end create todo
  
    // =======================================================
  
    // Start update todo
    let handleTodoUpdate = async (e)=>{
      setUpTodo(e.target.value)
    }
    let handleUpdate = async (id)=>{
      axios.put(`http://localhost:1337/api/todos/${id}`, {
        data: {
          Title: uptodo,
        },
      }).then((response) => {
        console.log(response);
      }); 
    }
    // end Update todo
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='d-flex justify-content-center'>
                <h1 className='text-center my-4'>Strapi Todo Application</h1>
                <Link to='/regi' className='mt-5 ms-4'>SignUp/Signin</Link>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Todo Title</Form.Label>
                <Form.Control onChange={handleTitle} type="text" placeholder="abc" />
                <Button onClick={()=>handleAdd()} className='my-3' variant="primary">add</Button>
              </Form.Group>
            </Form>

            <ListGroup>
              {todotitle.map((item, i)=>(
                <>

                  {/* ===============show todo list =============== */}
                  <ListGroup.Item key={i}>Title Name: - {item.attributes.Title}
                    <Button key={i} onClick={()=>handleDelete(item.id)} className='ms-5' variant="danger">Delete</Button>
                  </ListGroup.Item>

                  {/* =============== update todo list =============== */}
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Todo Update</Form.Label>
                      <Form.Control onChange={handleTodoUpdate} type="text" placeholder="Update Your Todo" />
                      <Button onClick={()=>handleUpdate(item.id)} className='my-3' variant="primary">Update</Button>
                    </Form.Group>
                  </Form>

                </>
              ))}
            </ListGroup>
            <Banner/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {

    const [bannerimg, setBaimg] = useState([])
    const [bannerContent, setBaContent] = useState([])
    useEffect(()=>{
        async function bannerimg(){
            const data = await axios.get('http://localhost:1337/api/abouts?populate=*');
            setBaimg(data.data.data[0].attributes.about_img.data.attributes.url)
        }
        bannerimg()
    },[])

    useEffect(()=>{
        async function bannerContent(){
            const data = await axios.get('http://localhost:1337/api/abouts');
            setBaContent(data.data.data[0].attributes)
        }
        bannerContent()
    },[])
  return (
    <Container>
        <Row>
            <Col md="6">
                <div className='bg_img'>
                    <img className='img-fluid w-100' src={`http://localhost:1337${bannerimg}`}/>
                </div>
            </Col>
            <Col md="6">
                <div className='bg_img'>
                    <h1>{bannerContent.about_heading}</h1>
                    <p>{bannerContent.about_des}</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner
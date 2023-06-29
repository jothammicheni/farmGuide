import React from 'react'
import '../styles/home.css'
import '../components/login'
import PropTypes from 'prop-types'
import {  useNavigate } from 'react-router-dom';
import MainImg from '../assets/mainImage.png'
import CattleImg from '../assets/cattle.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from  'react-bootstrap/Button'
//import Link from 'react-bootstrap/Link'
import Nav from 'react-bootstrap/Nav'
const Home = () => {
   const history=useNavigate();
   const moveToCattle=useNavigate();
       const clickbtn=()=>{
          history('./login')
       }
       const navigateToCattlePage=()=>{
         moveToCattle('./cattle') 
       }
  return (
    <Container className='fluid'>
       <Row className='mb-3   bg-green  align-start'>
        <Col className=''>
       <h1 className='page-desc    mt-5'>Farming Software</h1>
       <h1 className='page-desc'>and Tools for the</h1>
       <h1 className='farmer-desc text-success'>Modern Farmer</h1>
        <br/>
       <h4>
            Synnefa offers smart and comprehensive farming tools with a variety of products to help the modern farmer take the guesswork out of farming.
       </h4>
       <br/><br/>
       <button className=' text-white  more-btn' onClick={clickbtn}> Talk to a Consontant  →
       
       </button>

        </Col>
        <Col>
        <img src ={MainImg} class = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "auto" height = "auto"/>  
        </Col>
       </Row>
       <br/><br/><br/>
       <Row className='mt-3 align-center'>
         
          <h2>We build modern farming solutions</h2>
          <h2>that increase our crop farmers’</h2>
          <h2>efficiency & production.</h2>
          
         
       </Row>
       <br/><br/>
       <Row className='align-center'>
          <h6>Farmers are our primary source of inspiration to look for better solutions and</h6>
          <h6>innovate. We partner with farmers and stay to see them grow and succeed. Learn</h6>
          <h6>more about our mission to start a sustainable agriculture revolution.</h6>
          <br/>
          <Nav.Link href='#' className='text-success  mission'>Exprore FarmTech's mission</Nav.Link>
       </Row>
      <br/><br/><br/><br/>

      <Row className='bg-green p-5'>
         <Col className='align-start'>
          <h2>Protect your dairy cattle and</h2>
          <h2>increase your milk production with a</h2>
          <h2>dairy farming guide</h2>
          <br/>
          <h6>In our dairy farming guide we educate </h6>
          <h6>all our farmers on the best ways to  get</h6>
          <h6>the maximum profit from their cattle</h6>
          <h6>by step by step coaching</h6>
          <br/><br/>
          <button className=' text-white  more-btn' onClick={navigateToCattlePage} > Learn More  →</button>
        </Col>
        <Col>
        <img src ={CattleImg} class = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "auto" height = "auto"/>  

        </Col>

      </Row>
      <br/><br/><br/><br/>

<Row className='bg-green p-5'>
   <Col className='align-start'>
    <h2>Protect your dairy cattle and</h2>
    <h2>increase your milk production with a</h2>
    <h2>dairy farming guide</h2>
    <br/>
    <h6>In our dairy farming guide we educate </h6>
    <h6>all our farmers on the best ways to  get</h6>
    <h6>the maximum profit from their cattle</h6>
    <h6>by step by step coaching</h6>
    <br/><br/>
    <button className=' text-white  more-btn' > Learn More  →</button>
  </Col>
  <Col>
  <img src ={CattleImg} class = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "auto" height = "auto"/>  

  </Col>

</Row>
   <br/><br/><br/><br/>

<Row className='bg-green p-5'>
   <Col className='align-start'>
    <h2>Protect your dairy cattle and</h2>
    <h2>increase your milk production with a</h2>
    <h2>dairy farming guide</h2>
    <br/>
    <h6>In our dairy farming guide we educate </h6>
    <h6>all our farmers on the best ways to  get</h6>
    <h6>the maximum profit from their cattle</h6>
    <h6>by step by step coaching</h6>
    <br/><br/>
    <button className=' text-white  more-btn' > Learn More  →</button>
  </Col>
  <Col>
  <img src ={CattleImg} class = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "auto" height = "auto"/>  

  </Col>

</Row>
   <br/><br/><br/><br/>

<Row className='bg-green p-5'>
   <Col className='align-start'>
    <h2>Protect your dairy cattle and</h2>
    <h2>increase your milk production with a</h2>
    <h2>dairy farming guide</h2>
    <br/>
    <h6>In our dairy farming guide we educate </h6>
    <h6>all our farmers on the best ways to  get</h6>
    <h6>the maximum profit from their cattle</h6>
    <h6>by step by step coaching</h6>
    <br/><br/>
    <button className=' text-white  more-btn' > Learn More  →</button>
  </Col>
  <Col>
  <img src ={CattleImg} class = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "auto" height = "auto"/>  

  </Col>

</Row>
   <br/><br/><br/><br/>

<Row className='bg-green p-5'>
   <Col className='align-start'>
    <h2>Protect your dairy cattle and</h2>
    <h2>increase your milk production with a</h2>
    <h2>dairy farming guide</h2>
    <br/>
    <h6>In our dairy farming guide we educate </h6>
    <h6>all our farmers on the best ways to  get</h6>
    <h6>the maximum profit from their cattle</h6>
    <h6>by step by step coaching</h6>
    <br/><br/>
    <button className=' text-white  more-btn' > Learn More  →</button>
  </Col>
  <Col>
  <img src ={CattleImg} class = "mx-auto d-block mb-3 img-fluid" alt = "tech image" width = "auto" height = "auto"/>  

  </Col>

</Row>

     
    </Container>
  )
}



export default Home

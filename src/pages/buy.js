import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/buy.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Buy=({onBuyBtnClick}) =>{
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/farmguide/products.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleBuyBtnClick=(itemId)=>{
    return()=>{
       onBuyBtnClick(itemId)
    }
  }

  return (
    <Container className='buy-container'>
    {data.length > 0 ? (
      data.map((item, index) => (
        <React.Fragment key={item.id}>
          
            <Col>
              <p>Name: {item.item_name}</p>
              <div>
                <img
                  src={`data:image/png;base64, ${item.item_img}`}
                  alt="Product Image"
                  className="mx-auto d-block mb-3 img-fluid"
                  width="200px"
                  height="200px"
                />

              </div>
              <p>price :{item.price}</p>
             
              <p>Description :{item.description}</p>

              <div>
                  <Button onClick={handleBuyBtnClick(item.id)}>buy</Button>
              </div>
            </Col>
         
        </React.Fragment>
      ))
      ):(
        <p>No data available</p>
      )
      
      }
    
    
    </Container>
  );
}

export default Buy;

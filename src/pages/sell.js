import { useState } from 'react';
//import Data from './data';
//import './App.css';
import '../styles/sell.css'
import axios from 'axios';

const Buy=()=> {
  const [item, setItem] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send data to the API endpoint
      const fd = new FormData();
      fd.append('item', item);
      fd.append('file', file);
      fd.append('price', price);
      fd.append('desc',desc);
  
      axios.post('http://localhost/farmguide/products.php', fd)
        .then((response) => {
          console.log(response);
        });
  
      setItem('');
      setFile('');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
      <h1>ADD PRODUCTS</h1>
        <div>
        <label htmlFor='item'>Enter item name:</label>
          <input
          placeholder='samsang Tv'
          id='item'
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor='img'>Enter Item image:</label>
          <input
          id='img'
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept=".jpg,.jpeg,.png"
          />
        </div>

        <div>
        <label htmlFor='desc'>Enter item Description:</label>
          <input
          placeholder='android smart Tv...........'
          id='desc'
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor='prics'>Enter item price:</label>
          <input
          placeholder='Sh :700'
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>


        <div>
          <button className='btn-sell' type="submit">Submit</button>
        </div>
      </form>

      <br/><br/><br/><br/><br/><br/><br/>

      <hr/>

   
    </div>
  );
}

export default Buy;

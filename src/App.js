
import './App.css';
//import Table from 'react-bootstrap/Table';
import Navbars from './components/navbars'
import Home from './pages/home'
import FAQ from './pages/faq'
import About from './pages/about'
import Cart from './components/cart'
import Login from './components/login'
import Cattle from './components/cattle'
import Buy from './pages/buy'
import { items } from './components/Items';
import Sell from './pages/sell'
import Services from  './pages/services'
import Register from './components/register'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserProvider from './components/UserContext'
import useUser from './components/UserContext'

function App() {
   const[cart,setCart]=useState([])
   const[data,setData]=useState([])
   const[item,setItem]=useState([])
   const[price,setPrice]=useState([])
   const[file,setFile]=useState([])
   const[desc,setDesc]=useState([])
   useEffect(()=>{
    try{
      axios.get('http://localhost/farmguide/products.php')
       .then((response)=>{
         setData(response.data)
         console.log(data)
       })
      }catch{
      console.log('Error loading data')
      }
   },[])

   const onBuyBtnClick = (itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);
    if (selectedItem) {
       if (!cart.some((cartItem) => cartItem.id === itemId)) {
          setCart((prevCart) => [...prevCart, selectedItem]);
          
          console.log(item)
          console.log(price)

         
          setItem(selectedItem.item_name);
          setPrice(selectedItem.price);
          setFile(selectedItem.item_img);
          setDesc(selectedItem.description);
          const formData=new FormData()
          formData.append('item',item);
          formData.append('file', file);
          formData.append('price', price);
          formData.append('desc',desc);
          axios.post('http://localhost/farmguide/cart.php',formData)
          .then((response)=>{
            console.log(response)
          }) 
          .catch((error) => {
            console.log('Error adding items to cart:', error);
            // Handle error, show error message, etc.
          });

        

          alert('Item added to cart');
          console.log(cart);
       } else {
          alert('Item is already in the cart');
       }
    }
 };
   
 
  
  
  return (
    <div className="App">
    <UserProvider>
    <Router>
    <Navbars size={cart.length}/>
      <Routes>
        <Route  path='/' Component={Home}/>
        <Route  path='/faq' Component={FAQ}/>
        <Route  path='/buy' element={<Buy onBuyBtnClick={onBuyBtnClick}/>} />
        <Route  path='/sell' Component={Sell}  items={items}/>
        <Route  path='/about' Component={About}/>
        <Route  path='/register' Component={Register}/>
        <Route  path='/login' Component={Login}/>
        <Route  path='/cattle' Component={Cattle}/>
        <Route path='/cart' element={<Cart cart={cart} />}/>
        
        
      </Routes>
    </Router>
    </UserProvider>
    </div>
  );
}

export default App;

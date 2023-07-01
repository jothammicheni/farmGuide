
import './App.css';
//import Table from 'react-bootstrap/Table';
import Navbars from './components/navbars'
import Home from './pages/home'
import FAQ from './pages/faq'
import About from './pages/about'
import Login from './components/login'
import Cattle from './components/cattle'
import Buy from './pages/buy'
import { items } from './components/Items';
import Sell from './pages/sell'
import Services from  './pages/services'
import Register from './components/register'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbars/>
      <Routes>
        <Route  path='/' Component={Home}/>
        <Route  path='/faq' Component={FAQ}/>
        <Route  path='/buy' Component={Buy}/>
        <Route  path='/sell' Component={Sell}  items={items}/>
        <Route  path='/about' Component={About}/>
        <Route  path='/register' Component={Register}/>
        <Route  path='/login' Component={Login}/>
        <Route  path='/cattle' Component={Cattle}/>
        
        
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;

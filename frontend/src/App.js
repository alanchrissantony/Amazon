import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './ view/Users/Pages/home';
import Products from './ view/Users/Pages/products';
import ProductScreen from './ view/Users/Pages/productScreen';
import Cart from './ view/Users/Pages/cart';
import Login from './ view/Users/Pages/login';
import Signup from './ view/Users/Pages/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductScreen/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

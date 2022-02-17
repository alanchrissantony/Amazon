import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './ view/Users/Pages/home';
import Products from './ view/Users/Pages/products';
import ProductScreen from './ view/Users/Pages/productScreen';
import Cart from './ view/Users/Pages/cart';
import Login from './ view/Users/Pages/login';
import Signup from './ view/Users/Pages/signup';
import Address from './ view/Users/Pages/address'
import Payment from './ view/Users/Pages/payment'
import PlaceOrder from './ view/Users/Pages/placeOrder'
import Order from './ view/Users/Pages/order'
import OrderHistory from './ view/Users/Pages/orderHistory';
import AdminLogin from './ view/Admin/Pages/login';
import LogInSecurity from './ view/Users/Pages/Login&Security/logInSecurity';
import Name from './ view/Users/Pages/Login&Security/name';
import Email from './ view/Users/Pages/Login&Security/email';
import Password from './ view/Users/Pages/Login&Security/password';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductScreen/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/shipping' element={<Address/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/order/:id' element={<PlaceOrder/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/orderhistory' element={<OrderHistory/>}/>
          <Route path='/login&security' element={<LogInSecurity/>}/>
          <Route path='/changeName' element={<Name/>}/>
          <Route path='/changeEmail' element={<Email/>}/>
          <Route path='/changePassword' element={<Password/>}/>

          <Route path='/admin' element={<AdminLogin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

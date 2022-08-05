import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './ view/Users/Pages/home';
import Products from './ view/Users/Pages/products';
import Product from './ view/Users/Pages/product';
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
import PrivateRoute from './Components/PrivateRoute';
import AdminPanel from './ view/Admin/Pages/panel';
import ProductsView from './ view/Admin/Pages/products';
import AddProducts from './ view/Admin/Pages/AddProducts';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

import Container from "react-bootstrap/Container";
import EditProducts from './ view/Admin/Pages/EditProducts';
import OrderDetails from './ view/Admin/Pages/OrderDetails';
import Users from './ view/Admin/Pages/Users';
import Departments from './ view/Admin/Pages/Departments';


function App() {

  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
    <div className="App">
      <Container fluid>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/products/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/shipping' element={<Address />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/order/:id' element={<PlaceOrder />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/orderhistory' element={<OrderHistory />} />
            <Route path='/login&security' element={<PrivateRoute><LogInSecurity /></PrivateRoute>} />
            <Route path='/changeName' element={<PrivateRoute><Name /></PrivateRoute>} />
            <Route path='/changeEmail' element={<PrivateRoute><Email /></PrivateRoute>} />
            <Route path='/changePassword' element={<PrivateRoute><Password /></PrivateRoute>} />

            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/admin/products' element={<ProductsView />} />
            <Route path='/admin/addProducts' element={<AddProducts />} />
            <Route path='/admin/editProduct/:id' element={<EditProducts />} />
            <Route path='/admin/orders' element={<OrderDetails />} />
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/departments' element={<Departments />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

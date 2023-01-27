import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import CreateProduct from '../pages/product/CreateProduct'
import ListProducts from '../pages/product/ListProducts'
import EditProduct from '../pages/product/EditProduct'
import ListUser from '../pages/user/ListUser'
import CreateUSer from '../pages/user/CreateUser'
import UpdateUser from '../pages/user/UpdateUser'
import Login from '../pages/Login/Login'
import Register from '../pages/register/Register'
import ProductScreen from '../pages/product/ProductScreen'
import FinalizeOrder from '../pages/finalizeOrder/FinalizeOrderScreen'


 const Rotas = () => {
    return(
        <Routes>
          <Route path='/' index  element={<Home />} />
          <Route path='/home' index  element={<Home />} />
          <Route path='/products' element={<ListProducts />} />
          <Route path='/products/create' element={<CreateProduct />} />
          <Route path='/product/update/:id' element={<EditProduct />} />
          <Route path='/product/delete/:id' element={<EditProduct />} />
          <Route path='/users' element={<ListUser/>} />
          <Route path='/user/create' element={<CreateUSer/>} />
          <Route path='/user/update/:id' element={<UpdateUser/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/productScreen' element={<ProductScreen/>} />
          <Route path='/finalizeOrder' element={<FinalizeOrder/>} />
        </Routes>
    )
}
export default Rotas

 
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeScreen from '../pages/home/Home'
import CreateProduct from '../pages/product/CreateProduct'
import ListProducts from '../pages/product/ListProducts'
import EditProduct from '../pages/product/EditProduct'
import ListUser from '../pages/user/ListUser'
import CreateUSer from '../pages/user/CreateUser'
import UpdateUser from '../pages/user/UpdateUser'
import Login from '../pages/Login/Login'
import RegisterScreen from '../pages/register/Register'
import ProductScreen from '../pages/product/ProductScreen'
import FinalizeOrder from '../pages/finalizeOrder/FinalizeOrderScreen'
import RegisterComponents from '../components/RegisterComponents'
import NestPcOneSc from '../components/productsComponents/NestPcOne'

 const Rotas = () => {
    return(
        <Routes>
          <Route path='/' index  element={<HomeScreen />} />
          <Route path='/home' index  element={<HomeScreen />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<RegisterScreen/>} />
          <Route path='/productScreen' element={<ProductScreen/>} />
          <Route path='/finalizeOrder' element={<FinalizeOrder/>} />

          <Route path='/nestPcOne' element={<NestPcOneSc/>} />
          
          <Route path='/products' element={<ListProducts />} />
          <Route path='/product/create' element={<CreateProduct />} />
          <Route path='/createUser' element={<CreateUSer/>} />
          <Route path='/product/update/:id' element={<EditProduct />} />
          <Route path='/product/delete/:id' element={<EditProduct />} />
          <Route path='/users' element={<ListUser/>} />
          <Route path='/user/create' element={<RegisterComponents/>} />
          <Route path='/user/update/:id' element={<UpdateUser/>} />
        </Routes>
    )
}

export default Rotas

 
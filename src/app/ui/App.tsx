import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../../features/layout/Layout"
import Privacy from "../../pages/privacy/Privacy"
import Home from "../../pages/home/Home"
import Section from "../../pages/section/Section"
import Product from "../../pages/product/Product"
import Auth from "../../pages/auth/Auth"
import Cart from "../../pages/cart/Cart"


export default function App() {

  return <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />} > 
<Route index element={<Home />} />
<Route path="privacy" element={<Privacy />}  /> 
<Route path="home" element={<Home />}  /> 
<Route path='section/:slug' element={<Section />} />
<Route path='product/:slug' element={<Product />} />
<Route path="auth" element={<Auth />} />
<Route path="cart" element={<Cart />} />

</Route>
</Routes>
</BrowserRouter>
    </>
  
}



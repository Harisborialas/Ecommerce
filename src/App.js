import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Index';
import Home from './modules/Home/Home';
import Footer from './Components/Footer/Index';
import {Routes, Route} from 'react-router-dom'
import Product from './modules/Product/Index';
import Products from './modules/Products/Index';
import CategoryProducts from './modules/CategoryProducts/Index';
import Cart from './modules/Cart/Index';

function App() {
  return (
    <div >
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/categories/:name' element={<CategoryProducts/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='/categories/:name' element={<CategoryProducts/>} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

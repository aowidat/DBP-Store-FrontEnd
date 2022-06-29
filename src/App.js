import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CategoriesTree from './Components/CategoriesTree';
import Product from './Components/Product';
import Review from './Components/Review';
import User from './Components/User'
import ListOfProducts from './Components/ListOfProducts'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categoriestree" element={<CategoriesTree />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/review" element={<Review />} />
        <Route path="/user" element={<User />} />
        <Route path="/listofProduct/:pattern" element={<ListOfProducts />} />
      </Routes>
    </div>
  );
}

export default App;

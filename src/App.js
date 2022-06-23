import './App.css';
import Header from './Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import ProductList from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<>About</>}/>
        <Route path="product" element={<ProductList/>}/>
        <Route path="category" element={<>category</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



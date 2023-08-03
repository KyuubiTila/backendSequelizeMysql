import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './screens/AddProduct';
import EditProduct from './screens/EditProduct';
import ProductDetail from './screens/ProductDetail';
import ShowProduct from './screens/ShowProduct';
function App() {
  return (
    <>
      <Routes>
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="editProduct/:id" element={<EditProduct />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />

        <Route path="showProduct" element={<ShowProduct />} />
      </Routes>
    </>
  );
}

export default App;

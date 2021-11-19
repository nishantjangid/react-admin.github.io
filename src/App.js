import styled from "styled-components";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
const Container = styled.div`
  display:flex; 
  margin-top:10px;
`;

const Others = styled.div`
  flex:4;
  ${'' /* background-color:#ccc; */}
`;

function App() {
  return (
    <BrowserRouter>
    <Topbar />
      <Container>
        <Sidebar />
          <Others>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userid" element={<User/>} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productid" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct/>} />
          </Routes>
          </Others>
      </Container>
    </BrowserRouter>
  );
}

export default App;

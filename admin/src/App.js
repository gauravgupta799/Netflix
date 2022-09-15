import React, {useContext} from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/login";
import {AuthContext} from "./components/context/authContext/AuthContext"

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Topbar />
      <Switch>
       <Route  path="/login">
          { user ? <Redirect to="/" />:<Login/>}
          {/* <Login/> */}
       </Route> 
      
        {user && 
         <>
          <div className="container">
            <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:id">
                <Product />
              </Route>
              <Route path="/newMovie">
                <NewProduct />
              </Route>
          </div>
         </>
        }
      </Switch>
    </Router>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import { Link, BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

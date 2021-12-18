import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProtectedRoute from './Components/Auth';
import Main from './Components/Main';
import UserDetails from './Components/UserDetails'

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/" element={<ProtectedRoute elementToRender={<Main/>}/>} />
          <Route path="/me" element={<ProtectedRoute elementToRender={<UserDetails/>}/>} />
          
          {/* <Route path="/me" element={<UserDetails/>} /> */}
          {/* <ProtectedRoute path="/" exact element={<Main />} /> */}
          {/* <Route exact path="/">
            {user ? (element = <Main />) : <Navigate to="/login" />}
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

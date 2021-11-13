


import {
  BrowserRouter,
  Routes,
  Route,
  Switch

} from "react-router-dom";
import './App.css';
import Login from "./component/register/login/login";
import Register from './component/register/register';
import Home from "./pages/home/Home";
import PrivateRoute from "./ProtectedRoute";





function App() {
 



  return (
    <div >
    
      <BrowserRouter>
    
      <Switch>
     
      <Route exact path="/register" component={  Register } />
      <Route exact path="/login" component={ Login } />
      <PrivateRoute path="/"  >
        <Home />
        </PrivateRoute>

      </Switch>
   
      </BrowserRouter>
     

      
    </div>
  );
}




export default App;

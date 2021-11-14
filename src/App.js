import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./component/register/login/login";
import Register from "./component/register/register";
import { BillProvider } from "./Context/BillProvider";
import Home from "./pages/home/Home";
import PrivateRoute from "./ProtectedRoute";

function App() {
  const handleAuth = (email) => {
    window.localStorage.setItem("auth", JSON.stringify({ email: email }));
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleAuth={handleAuth} />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <BillProvider>
                  <Home />
                </BillProvider>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;

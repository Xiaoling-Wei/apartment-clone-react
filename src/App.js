import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassport from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/forget-password" element={<ForgotPassport/>}></Route>
          <Route path="/offers" element={<Offers/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";


export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" elements={<Home />} />
    <Route path="/sign-in" elements={<SignIn />} />
    <Route path="/sign-up" elements={<SignUp />} />
    <Route path="/about" elements={<About />} />
    <Route path="/profile" elements={<Profile />} />
  </Routes>
  </BrowserRouter>;
}

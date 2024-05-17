import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"

export default function App() {
  return ( 
  <BrowserRouter>
  <Routes>
    < Route path="/" element={<Home/>} />
    < Route path="/" element={<SignIn/>} />
    < Route path="/" element={<SignUp/>} />
    < Route path="/" element={<About/>} />
    < Route path="/" element={<Profile/>} />

  </Routes>
  </BrowserRouter>
  )
}

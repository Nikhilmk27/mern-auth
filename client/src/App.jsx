import React from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom" // Import Route instead of Routes
import HomePage from "./pages/HomePage.jsx"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
import Home from './pages/Home'

export default function App() {
  return (
    <>
    <AuthContextProvider>
     <Navbar />
     <Routes> 
     <Route path='/' element={<Home />} /> 
     </Routes>
    </AuthContextProvider>
    </>
  )
}
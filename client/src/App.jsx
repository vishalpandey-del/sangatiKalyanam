import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.jsx'
import Home from './pages/Home.jsx'
import Experts from './pages/Experts.jsx'
import Consultation from './pages/Consultation.jsx'
import Webinars from './pages/Webinars.jsx'
import Courses from './pages/Courses.jsx'
import Products from './pages/Products.jsx'
import Wallet from './pages/Wallet.jsx'
import Register from './pages/Register.jsx'
import About from './pages/About.jsx'
import Help from './pages/Help.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="experts" element={<Experts />} />
        <Route path="consultation" element={<Consultation />} />
        <Route path="webinars" element={<Webinars />} />
        <Route path="courses" element={<Courses />} />
        <Route path="products" element={<Products />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

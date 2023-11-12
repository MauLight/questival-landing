import { Route, Routes } from 'react-router-dom'
import { Landing } from './views/landing'
import { Cart } from './views/cart'
import { About } from './views/about'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Cart />} />
      <Route path="/checkout" element={<Cart />} />
    </Routes>
  )
}

export default App

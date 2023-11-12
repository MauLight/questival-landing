import { Route, Routes } from 'react-router-dom'
import { Landing } from './views/landing'
import { Cart } from './views/cart'
import { About } from './views/about'
import { Syllabus } from './views/Syllabus'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/checkout" element={<Cart />} />
    </Routes>
  )
}

export default App

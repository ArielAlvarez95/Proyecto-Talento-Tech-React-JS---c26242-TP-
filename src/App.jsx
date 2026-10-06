import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
      <>
      <Header />
      <main>  
      <Routes>
        <Route path="/" element={<h1>Hola, Mundo!</h1>} />
        <Route path="/cart" element={<h1>Carrito</h1>} />
      </Routes>
      </main>
      <Footer />
      </>
  );
}

export default App

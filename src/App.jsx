import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'

function App() {
  return (
      <>
      <Header />
      <main>  
      <Routes>
        <Route path="/" element={<h1>Hola, Mundo!</h1>} />
      </Routes>
      </main>
      </>
  );
}

export default App

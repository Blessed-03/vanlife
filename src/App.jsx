
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPageStructure from './pages/MainPageStructure/MainPageStructure'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPageStructure/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

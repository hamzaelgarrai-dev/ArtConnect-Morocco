
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'

import Footer from './components/Footer'
import Publier from './pages/Publier'
import Admin from './pages/Admin'

function App() {
  

  return (
    <>
     
    
     
     <BrowserRouter>

        <NavBar/>
     <Routes>

      <Route path='/Publier' element={<Publier/>}/>
      <Route path='/Admin' element={<Admin/>}/>

       
        


     </Routes>

        
      
        <Footer/>
     </BrowserRouter>
    
   
   
      
    </>
  )
}

export default App

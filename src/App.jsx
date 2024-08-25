import Congrats from './pages/Congrats'
import Countdown from './pages/Countdown'
import {Routes,Route } from 'react-router-dom'


function App() {

  return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <Routes>
          <Route path='/' element={<Countdown/>}/>
          <Route path='/congrats' element={<Congrats/>}/>   
        </Routes>
      </div>
    
  )
}

export default App

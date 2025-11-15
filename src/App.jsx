import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './index.css'
import { Home } from './Pages/Home'
import ScrollToTop from './components/ScrollToTop'
import {Toaster} from 'sonner'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<p className='mt-80 text-center'>Page Not Found</p>}/>
        </Routes>      
      </BrowserRouter>
      <Toaster
        position="top-center"
        richColors
        closeButton
        visibleToasts={1}
      />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'

function App() {

  return (
  <div className='main'>
    <Navbar
    site_name = "SOMETHING"
    />
    <Form/>
  </div>
  )
}

export default App

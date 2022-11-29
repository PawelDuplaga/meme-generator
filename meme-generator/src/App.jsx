import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'

function App() {

  return (
  <div className='main'>
    <Navbar
    site_name = "Meme generator"
    project_name = "by Pawel Duplaga"
    />
    <Form/>
  </div>
  )
}

export default App

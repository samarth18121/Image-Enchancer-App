import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'

function App() {
  

  return (
    <div>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-3' >
          AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>
          Upload your Image and Let AI enchance you image</p>
      </div>
      <Home/>
      <div className='text-sm text-gray-500 mt-6'>
        <p>Powered by @Sheryians_Coding_School</p>
      </div>
    </div> 
      
    </div>
  )
}

export default App

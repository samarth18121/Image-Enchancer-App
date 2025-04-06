import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800' >AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>Upload your Image and Let AI enchance you image</p>
      </div>

      <div>
        <p>Powered by @Sheryians Coding School</p>
      </div>
    </div>
  )
}

export default Home

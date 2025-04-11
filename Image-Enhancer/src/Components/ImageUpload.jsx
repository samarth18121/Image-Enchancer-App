import React from 'react'

const ImageUpload = () => {
  return (
    <div className='bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl'>
     <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 
     border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-600 transition-all'>
      <input type="file" id='fileInput' className='hidden'/>
      <span className='text-lg font-medium text-gray'>Click and drag to upload your file</span>
      
     </label>
    
    
    </div>
  )
}

export default ImageUpload

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-100-ns db vh-100 flex justify-center'>
     <h1 className='text-3xl font-bold underline'>Will you be my valentine?</h1>
     </div>
     
     <div className='flex justify-center pb-10'>
     <img src = "./src/assets/slingshot.gif" alt="slingshot" />
     </div>
     
     <div className='flex justify-center gap-2'>
      <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>
           Yes
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(0)}>
          No
        </button>
     </div>
    </>
  )
}

export default App

import { Outlet } from 'react-router'
import './App.css'
function App() {
  return (
    <div className='w-full min-h-screen m-auto flex flex-col gap-10'>
      <div className='flex justify-center w-full p-4 shadow-gray-400 shadow-md '>
        <img src="/logo.png" alt="" className='h-12' />
      </div>
      <Outlet/>
    </div>
  )
}

export default App

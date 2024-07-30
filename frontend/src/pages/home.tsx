import { useState } from 'react'
import { Header } from '../components/header'

export function Home() {

  const [bgColor, setBgColor] = useState('#38bdf8')

  function changeBgColor() {
    setBgColor(prevColor => prevColor === '#38bdf8' ? '#0c4a6e' : '#38bdf8')
  }

  return (
    <div 
    style={{ backgroundColor: bgColor }}
    className="font-[Poppins] relative h-[100dvh]">
      <Header changeBgColor={changeBgColor}/>
      <main>
        <div className='flex flex-col items-center justify-center   h-80'>
          <h1 className='flex text-white'>Home Page</h1>
          <button onClick={changeBgColor} className='mt-4 p-2 bg-white text-black rounded'>Change background color</button>
        </div>
      </main>
    </div>
  )
}
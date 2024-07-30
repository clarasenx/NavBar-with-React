import { Header } from '../components/header';
import { useState } from 'react'

export function Resources() {
  
  const [bgColor, setBgColor] = useState('#38bdf8')

  function changeBgColor() {
    setBgColor(prevColor => prevColor === '#38bdf8' ? '#0c4a6e' : '#38bdf8')
  }

  return (
    <div 
    style={{ backgroundColor: bgColor }}
    className="font-[Poppins] relative h-screen">
      <Header changeBgColor={changeBgColor}/>

      <div className='flex items-center justify-center h-80'>
        <h1 className='flex text-white'>Resources Page</h1>
      </div>
    </div>
  )
}
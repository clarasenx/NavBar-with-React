import { LuHeart } from 'react-icons/lu'

export function Footer() {
  return (
    <div className='fixed bottom-0 w-full bg-white flex items-center justify-center h-5 '>
      <p className='p-2'>Made by Clara</p>
      <LuHeart className='hover:text-[#0ea5e9]'/>
    </div>
  )  
}
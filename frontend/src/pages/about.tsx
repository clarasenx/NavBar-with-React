import { Header } from '../components/navBar';

export function About() {
  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#38bdf8] to-[#0c4a6e] relative h-screen">
      <Header/>

      <div className='flex items-center justify-center h-80'>
        <h1 className='flex text-white'>About Page</h1>
      </div>
    </div>
  )
}
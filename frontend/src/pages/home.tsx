import { Header } from '../components/header'

export function Home() {
  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#38bdf8] to-[#0c4a6e] relative h-[100dvh]">
      <Header/>
      <main>
        <div className='flex items-center justify-center   h-80'>
          <h1 className='flex text-white'>Home Page</h1>
        </div>
      </main>
    </div>
  )
}
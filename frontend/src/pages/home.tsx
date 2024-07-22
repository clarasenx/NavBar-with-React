import { Header } from '../components/header'

export function Home() {

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#38bdf8] to-[#0c4a6e] h-screen">
      <Header/>

      <main>
        <div className='flex items-center justify-center my-5   h-20'>
          <h1 className='flex text-white'>Home Page</h1>
        </div>
      </main>

    </div>
  )
}
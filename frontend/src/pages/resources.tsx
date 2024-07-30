import { Header } from '../components/header';

interface ResourcesProps {
  changeBgColor: () => void,
  bgColor: string
}

export function Resources({changeBgColor, bgColor} : ResourcesProps) {
  return (
    <div 
    style={{backgroundColor: bgColor}}
    className="font-[Poppins] relative h-screen">
      <Header changeBgColor={changeBgColor}/>

      <div className='flex items-center justify-center h-80'>
        <h1 className='flex text-white'>Resources Page</h1>
      </div>
    </div>
  )
}
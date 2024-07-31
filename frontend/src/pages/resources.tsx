interface ResourcesProps {
  isNavOpen: boolean;
}

export function Resources({ isNavOpen }: ResourcesProps) {
  return (
    <div className={`font-[Poppins] h-[100dvh] ${isNavOpen ? 'bg-[#0C4A6E]' : 'bg-[#0EA5E9]'}`}>
      <div className='flex items-center justify-center h-80'>
        <h1 className='flex text-white'>Resources Page</h1>
      </div>
    </div>
  )
}
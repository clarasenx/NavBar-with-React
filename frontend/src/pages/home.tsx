interface HomeProps {
  isNavOpen: boolean;
}

export function Home({ isNavOpen }: HomeProps) {
  return (
    <div className={`font-[Poppins] h-[100dvh] ${isNavOpen ? 'bg-[#0C4A6E]' : 'bg-[#0EA5E9]'}`}>
      <main>
        <div className='flex flex-col items-center justify-center h-80'>
          <h1 className='flex text-white'>Home Page</h1>
        </div>
      </main>
    </div>
  );
}

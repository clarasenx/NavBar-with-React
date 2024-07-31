import { Form } from '../components/form';

interface ProductsProps {
  isNavOpen: boolean;
}

export function Products({ isNavOpen }: ProductsProps) {
  return (
    <div className={`font-[Poppins] h-[100dvh] ${isNavOpen ? 'bg-[#0C4A6E]' : 'bg-[#0EA5E9]'}`}>
      <div className='flex flex-col items-center'>
        <h1 className='text-white py-8'>No products available yet</h1>
        <Form/>
      </div>
    </div>
  )
}
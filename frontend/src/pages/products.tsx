import { Form } from '../components/form';
import { Header } from '../components/header';

export function Products() {
  return (
    <div className="font-[Poppins] relative h-screen">
      <Header changeBgColor={changeBgColor}/>

      <div className='flex flex-col items-center gap-4 pt-16'>
        <h1 className='text-white py-2'>No products available yet</h1>
        <Form/>
      </div>
    </div>
  )
}
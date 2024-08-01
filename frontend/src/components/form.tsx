import { useEffect, useState } from 'react'
import { Button } from './button';
import { Input } from './input';

interface FormData {
  nome: string;
  email: string;
}

export function Form() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
  })

  const [peopleData, setPeopleData] = useState<FormData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setPeopleData((prevPeopleData) => [...prevPeopleData, formData]);
    setFormData({
      nome: '',
      email: '',
    });
  };

  useEffect(() => {
    console.log('Dados do formulário enviados:', peopleData);
  }, [peopleData]);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center bg-white p-4 rounded-lg max-w-52 sm:max-w-96 lg:w-1/4'>
      <h1
      className='w-full font-semibold text-lg text-zinc-700 items-start mb-3' 
      >Inscreva-se para não perder o lançamento</h1>
      <div className='flex flex-col mb-3 w-full'>
        <label 
          htmlFor="nome"
          >Nome:
        </label>
        <Input name='nome' value={`${formData.nome}`} onChange={handleChange} id='nome' type='text'/>
      </div>
      <div className='flex flex-col mb-3 w-full'>
        <label 
          htmlFor="email"
          >E-mail:
        </label>
        <Input name='email' value={`${formData.email}`} onChange={handleChange} id='email' type='text'/>
      </div>
      <div className='mb-3 flex items-center'>
        <Input name='termos' type="checkbox"
        id='termos' className='mr-1'/>
        <label 
        className='text-[12px] font-semibold'
        htmlFor="termos"
        >Aceito receber novidades e promoções por email</label>
      </div>
      <Button label='Inscreva-se'/>
    </form>
  )
}
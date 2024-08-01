import { useEffect, useState } from 'react'

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
          className=''
        >Nome:</label>
        <input 
          name='nome'
          id='nome'
          value={formData.nome}
          onChange={handleChange}
          autoComplete='on'
          type="text"
          className='border-solid border-zinc-400 border-[1px] p-1 px-2 rounded-md focus:'
          />
      </div>
      <div className='flex flex-col mb-3 w-full'>
        <label 
          htmlFor="email"
          className=''
        >E-mail:</label>
        <input 
          name='email' 
          type="text"
          id='email'
          value={formData.email}
          onChange={handleChange}
          autoComplete='on'
          required
          className='border-solid border-zinc-400 border-[1px] p-1 px-2 rounded-md'
          />
      </div>
      <div className='mb-3 flex items-center'>
        <input
        className='mr-1'
        type="checkbox"
        name='termos'
        onChange={handleChange}
        required/>
        <label 
        className='text-[12px] font-semibold'
        htmlFor="termos"
        >Aceito receber novidades e promoções por email</label>
      </div>
      <button
      className='hover:bg-[#0EA5E9] bg-[#0C4A6E] text-white py-2 px-4 rounded-full'
      >Inscreva-se</button>
    </form>
  )
}
export function Form() {
  return (
    <form className='flex flex-col items-center bg-white p-4 rounded-lg w-2/4'>
      <h1
      className='w-full font-semibold text-lg text-zinc-700 items-start mb-3' 
      >Inscreva-se para não perder o lançamento</h1>
      <div className='flex flex-col mb-3 w-full'>
        <label 
          htmlFor="name"
          className=''
        >Nome:</label>
        <input 
          name='name' 
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
        required/>
        <label 
        className='text-[12px] font-semibold'
        htmlFor="termos"
        >Aceito receber novidades e promoções por email</label>
      </div>
      <button
      className='bg-[#0EA5E9] text-white py-2 px-4 rounded-full'
      >Inscreva-se</button>
    </form>
  )
}
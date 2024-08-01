interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name: string;
}

export const Input = ({type, id, value, onChange, className, placeholder, name} : InputProps) => {
  return (
    <input 
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      autoComplete='on'
      placeholder={placeholder}
      type={type}
      required
      className={`${className} border-solid border-zinc-400 border-[1px] p-1 px-2 rounded-md`}
    />
  )
}
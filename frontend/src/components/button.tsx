interface ButtonProps {
  label: string
  className?: string
}

export const Button = ({label, className} : ButtonProps) => {
  return(
    <>
      <button 
        className={`hover:bg-[#0EA5E9] bg-[#0C4A6E] text-white px-4 py-2 rounded-full ${className}`}>{label}
      </button>
    </>
  )
}
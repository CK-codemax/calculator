'use client'

import { useCalculatorContext } from "../contexts/CalculatorContext"

export default function NumberButton({ number }) {

  const { handleChangeScreenNo } = useCalculatorContext()
   
  if(number === 0)return(
    <div onClick={() => handleChangeScreenNo(0)} className='text-white dark:text-black cursor-pointer col-span-2 xl:min-w-[80px] p-3 border flex items-center justify-start border-black bg-screenBrown/40 dark:bg-screenGray/40 dark:hover:bg-screenGray/20 hover:bg-screenBrown/20 transition-all duration-300 ease-in-out'>
    {number}
  </div>
  )
  return (
    <div onClick={() => handleChangeScreenNo(number)} className='text-white dark:text-black cursor-pointer p-3 z-20 border flex xl:min-w-[80px] items-center justify-center border-black bg-screenBrown/40 dark:bg-screenGray/40 dark:hover:bg-screenGray/20 hover:bg-screenBrown/20 transition-all duration-300 ease-out'>
      {number}
    </div>
  )
}
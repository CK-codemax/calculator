'use client'

import { useCalculatorContext } from "../contexts/CalculatorContext"
import ChangeTheme from "./ChangeTheme"

export default function CalculatorScreen() {
  const {num1, num2, operator} = useCalculatorContext()

  return (
    <div  className='bg-screenBrown dark:bg-screenGray w-full relative flex justify-end items-end h-[100px] px-2'>
      <p className='text-white text-[60px] font-thin'>{num1 !== null ? ` ${num1} ` : 0} {operator !== null && ` ${operator} `} {num2 !== null && ` ${num2} `}</p>
       <ChangeTheme />
    </div>
  )
}
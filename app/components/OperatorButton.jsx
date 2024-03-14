'use client'

import { useCalculatorContext } from "../contexts/CalculatorContext"




export default function OperatorButton({ operator }) {

  const { handleSubmit, handleChangeOperator, operator: arithmeticSign, num1, num2 } = useCalculatorContext()

  function handleAddOperator(sign){
    handleChangeOperator(sign)
  }

  function calculate(sign, a, b){
  
  
    if(sign === '+')return Number(a) + Number(b);
    if(sign === '-')return Number(a) - Number(b);
    if(sign === '×')return Number(a) * Number(b);
    if(sign === '÷')return Number(a) / Number(b);
   }

  function doArithMetic(){
    handleSubmit(calculate(arithmeticSign, num1, num2))
  }



  if(operator === '=')return(
    <div onClick={() => doArithMetic()}  className='text-white cursor-pointer p-3 border xl:min-w-[80px] flex items-center justify-center border-black dark:bg-[#cc0000] bg-[#ff9f0c]'>
    {operator}
       </div>
  )
  return (
    <div onClick={() => handleAddOperator(operator)}  className='text-white cursor-pointer p-3 border xl:min-w-[80px] flex items-center justify-center border-black bg-[#ff9f0c] dark:bg-[#cc0000] transition-all duration-300 ease-out'>
    {operator}
       </div>
  )
}
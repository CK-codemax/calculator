'use client'
import { useCalculatorContext } from '../contexts/CalculatorContext'
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'

const items = new Array(9).fill('_')
const operators = ['÷', '×', '-', '+', '=']

export default function NumberTab() {
   const { handleChangeScreenNo } = useCalculatorContext()

  return (<div className='flex items-center'>

    <div className='grid flex-grow grid-rows-3 grid-cols-3'>
         <div onClick={() => handleResetScreenNo()} className='text-white  cursor-pointer p-3 border flex items-center justify-center border-black bg-screenBrown/60 hover:bg-screenBrown/40 transition-all duration-300 ease-out'>
        AC
       </div>
       <div  className='text-white p-3 border flex items-center cursor-pointer justify-center border-black bg-screenBrown/60 hover:bg-screenBrown/40 transition-all duration-300 ease-out'>
      
       ±
       </div>
       <div onClick={() => handleChangeScreenNo('%')} className='text-white cursor-pointer p-3 border flex items-center justify-center border-black bg-screenBrown/60 hover:bg-screenBrown/40 transition-all duration-300 ease-out'>
   
        %
       </div>
        {items.map((el, i) => i + 1).reverse().map((item, i) => <NumberButton handleChangeScreenNo={handleChangeScreenNo} key={item + i} number={item} />)}
       <NumberButton number={0} />
       <div onClick={() => handleChangeScreenNo('.')} className='text-white cursor-pointer font-extrabold p-3 border flex items-center justify-center border-black bg-screenBrown/40 dark:bg-screenGray/40 hover:bg-screenBrown/20 dark:hover:bg-screenGray/20'>
        .
       </div>
    </div>
    <div className='grid grid-rows-5'>
 

       {operators.map((operator, i) => <OperatorButton key={operator} operator={operator} />)}


    </div>
  </div>
  )
}
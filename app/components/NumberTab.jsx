'use client'
import { useCalculatorContext } from '../contexts/CalculatorContext'
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'

const items = new Array(9).fill('_')
const operators = ['÷', '×', '-', '+', '=']

export default function NumberTab() {
   const { handleChangeScreenNo, handleResetScreenNo } = useCalculatorContext()

  return (<div className='flex items-center'>

    <div className='grid flex-grow grid-rows-5 grid-cols-4'>
         <div onClick={() => handleResetScreenNo()} className='text-white dark:text-black  cursor-pointer p-3 border flex items-center justify-center border-black bg-screenBrown/60 hover:bg-screenBrown/40 transition-all duration-300 ease-out'>
        AC
       </div>
       <div  className='text-white dark:text-black p-3 border flex items-center cursor-pointer justify-center border-black bg-screenBrown/60 hover:bg-screenBrown/40 transition-all duration-300 ease-out'>
      
       ±
       </div>
       <div className='text-white dark:text-black cursor-pointer p-3 border flex items-center justify-center border-black bg-screenBrown/60 hover:bg-screenBrown/40 transition-all duration-300 ease-out'>
   
        %
       </div>
       <OperatorButton operator={'÷'}/>
        {/* {items.map((el, i) => i + 1).reverse().map((item, i) => <NumberButton handleChangeScreenNo={handleChangeScreenNo} operator={item + i} number={item} />)} */}
        <NumberButton number={7} />
        <NumberButton number={8} />
        <NumberButton number={9} />
        <OperatorButton operator={'×'}/>
        <NumberButton number={4} />
        <NumberButton number={5} />
        <NumberButton number={6} />
        <OperatorButton operator={'-'}/>
        <NumberButton number={1} />
        <NumberButton number={2} />
        <NumberButton number={3} />
        <OperatorButton operator={'+'}/>
       <NumberButton number={0} />
       <div onClick={() => handleChangeScreenNo('.')} className='text-white dark:text-black cursor-pointer font-extrabold p-3 border flex items-center justify-center border-black bg-screenBrown/40 dark:bg-screenGray/40 hover:bg-screenBrown/20 dark:hover:bg-screenGray/20 transition-all duration-300 ease-in-out'>
        .
       </div>
       <OperatorButton operator={'='}/>
    </div>
    {/* <div className='grid grid-rows-5'>
 

       {operators.map((operator, i) => <OperatorButton key={operator} operator={operator} />)}


    </div> */}
  </div>
  )
}
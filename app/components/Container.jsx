import CalculatorScreen from './CalculatorScreen'
import NumberTab from './NumberTab'

export default function Container() {
  return (
    <div className='w-[90%] sm:w-[50%] lg:w-[350px] flex flex-col border overflow-hidden border-black rounded-sm shadow-xl shadow-screenBrown dark:shadow-screenGray'>
        <CalculatorScreen number={0} />
        <NumberTab />
    </div>
  )
}
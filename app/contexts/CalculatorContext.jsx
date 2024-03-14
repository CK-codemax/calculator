
'use client'
  import { createContext, useReducer, useContext } from 'react';

const initialState = {
num1 : null,
num2 : null,
operator : null,

}

function changeNum1(numbers){
    console.log('changing num1')
return {type : 'num1/change', payload : numbers}
}

function changeNum2(numbers){
    console.log('changing num2')
return {type : 'num2/change', payload : numbers}
}

function resetScreenNo(){
    console.log('resetting screen')
  return {type : 'calc/reset'}
}

function setOperator(sign){
    console.log('setting operator')
  return {type : 'operator/set', payload : sign}
}


function getAnswer(answer){
    console.log('getting answer')
    return {type : 'get/answer', payload : answer}
  }

  
function reducer(state, action){
  switch(action.type){
    case 'num1/change' :
    return {...state, num1 : state.num1 === null ? action.payload : `${state.num1}${action.payload}`, num2 : null,}
    case 'num2/change' :
    return {...state, num2 : state.num2 === null ? action.payload : `${state.num2}${action.payload}`,}
      case 'calc/reset' :
    return {num1 : null, num2 : null, operator : null,}
      case 'get/answer' :
        return {
          num1: action.payload, num2: null, operator : null,
        }
        case 'operator/set' :
            return {
               ...state, operator : action.payload,
            }
          
      
      default :
    throw new Error('Invalid action type')
}
}


const CalculatorContext = createContext();
function CalculatorProvider({ children }){

const [ { num1, num2, operator }, dispatch ] = useReducer(reducer, initialState)

const handleChangeScreenNo = function( newNumbers ){
    if(!operator){

        dispatch(changeNum1(newNumbers))
    }else{
        dispatch(changeNum2(newNumbers))
    }
 console.log('testing')
}

  const handleResetScreenNo = function(){
    dispatch(resetScreenNo())
  }
  
const handleSubmit = function(newAnswer){
    if(!num2 === null || operator === null)return
    dispatch(getAnswer(newAnswer))
}

const handleChangeOperator = function(operator){
    if(num1 === null)return
    dispatch(setOperator(operator))
}


return(
<CalculatorContext.Provider 
value={{
num1,
num2,
operator,
handleChangeScreenNo,
handleResetScreenNo,
handleSubmit,
handleChangeOperator,
}}
>
{children}
</CalculatorContext.Provider>
)
}

function useCalculatorContext(){
  
const context = useContext(CalculatorContext);
  
if(context === undefined) throw new Error
  ('CalculatorContext was used outside of CalculatorProvider')
return context
}

export { CalculatorProvider, useCalculatorContext, }
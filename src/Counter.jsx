import { useState } from "react"
import counterSlice, { decrement, increment } from "./counterSlice"
import { useDispatch, useSelector } from "react-redux"
import { useCounterStore } from "./useCounterStore"



// state - local / global
// prop-drilling
// state manager - менеджер состояний

// Redux Toolkit

// Store - хранилище глобальных состояний
// внтури стора состояние color: 'red'  ; type: CHANGE_COLOR
// Action - действие. { type:  }     - 2 ключа: первый обязательный, второй нет
// type - тип действия, например поменять цвет type: 'CHANGE_COLOR'
// Reducer - чистая функция, которая достает из хранилище состояние и действие,
// читает действие и возвращает новое состояние, удаляя старое
// Provider - доступ к хранилищу ; 3 props - store (обязательный), serverState (необяз), stabilityCheck(необяз)
// slice файл - внутри которого будем писать логику глобального состояния
// state - объект, внутри множество других состояний
// initialState - первоначальный state; первое состояние - текущее состояние
// dispatch - для того, чтобы вызывать действия


const Counter = () => {

    // const [count, setCount] = useState(0)

    // const count = useSelector(state => state.counterSlice.count)

    // const dispatch = useDispatch() 

    const {count, increment, decrement, reset} = useCounterStore()


  return (
    <>
        <button onClick={() => increment()}>+1</button>
        
        <p>{count}</p>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => reset()}>reset</button>
        {/* <button onClick={() => dispatch(increment())}>+1</button> */}
        {/* <button onClick={() => setCount(count - 1)}>-1</button> */}
    </>
  )
}

export default Counter
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())} >Add</button>
        <button onClick={() => dispatch(decrement())} >Subtract</button>
    </div>
  )
}

export default Counter
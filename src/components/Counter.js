import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './counter.css'
const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='box' >
            <p className='count'><span>Count: </span>{count}</p>
            <div className=' btn ' >
                <button onClick={() => dispatch(increment())} >Add</button>
                <button onClick={() => dispatch(decrement())} >Subtract</button>
            </div>
        </div>
    )
}

export default Counter
import React, {useState} from 'react'
import Button from "../Button/Button"
import '../../App.css'

const Counter = () => {

    const [count, setCount] = useState(0)

    const maxValue = 5

    let inc = () => {
        if(maxValue === count) {
            return
        }
        setCount(count + 1)
    }
    let reset = () => setCount(0)

    return (
        <div>
            <div className='border'>
                <div className='container border count'>{count}</div>
                <div className='border'>
                <Button title='Inc' func={inc} maxValue={maxValue} />
                <Button title='Reset' func={reset} maxValue={maxValue} />
                </div>
            </div>
        </div>
    )
}

export default Counter
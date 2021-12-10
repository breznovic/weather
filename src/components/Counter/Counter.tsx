import React, {useState} from 'react'
import Button from "../Button/Button"
import '../../App.css'

const Counter = () => {

    const [count, setCount] = useState(0)

    let inc = () => {
        console.log(count)
        setCount(count + 1)
    }
    let reset = () => setCount(0)

    return (
        <div>
            <div className='border'>
                <div>{count}</div>
                <Button title='Inc' func={inc}/>
                <Button title='Reset' func={reset}/>
            </div>
        </div>
    )
}

export default Counter
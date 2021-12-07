import React, {useState} from 'react'
import Button from "../Button/Button"
import '../../App.css'

type FuncType = {
    inc: () => void
    reset: () => void
}

const Counter = (props: FuncType) => {

    const [count, setCount] = useState(0)

    let inc = () => {setCount(count + 1)}
    let reset = () => {setCount(0)}

    return (
        <div>
            <div className='border'>
                <div>{count}</div>
                <Button title='Inc' func={props.inc}/>
                <Button title='Reset' func={props.reset}/>
            </div>
        </div>
    )
}

export default Counter
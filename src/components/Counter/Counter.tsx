import React, {useState} from 'react'
import Button from "../Button/Button"
import '../../App.css'
import Settings from "../Settings/Settings";
import {useNavigate} from "react-router-dom";

export const maxValue = 5

const Counter = () => {

    const Navigate = useNavigate()

    const [count, setCount] = useState(0)

    let inc = () => {
        if (maxValue === count) {
            return
        }
        setCount(count + 1)
    }
    let reset = () => setCount(0)

    let settings = () => Navigate('/settings')

    return (
        <div>
            <div className='border'>
                <div
                    className={count < maxValue ? 'container border count' : 'container border count limit'}>{count}</div>
                <div className='border'>
                    <Button disabled={count === maxValue} title='Inc' func={inc} maxValue={maxValue}/>
                    <Button disabled={count === 0} title='Reset' func={reset} maxValue={maxValue}/>
                    <Button disabled={false} title='Set' func={settings} maxValue={maxValue}/>
                </div>
            </div>
        </div>
    )
}

export default Counter
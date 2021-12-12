import React, {useState} from 'react'
import '../../App.css'

type PropsType = {
    title: string
    func: () => void
    maxValue: number
    disabled: boolean
}

const Button = (props: PropsType) => {

    return (
    <button onClick={props.func} disabled={props.disabled} className='btn'>{props.title}</button>
    )
}

export default Button


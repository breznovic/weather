import React, {useState} from 'react'

type PropsType = {
    title: string
    func: () => void
    maxValue: number
}

const Button = (props: PropsType) => {

    return (
    <button onClick={props.func}>{props.title}</button>
    )
}

export default Button


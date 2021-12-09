import React from 'react'

type FuncType = {
    inc: (setCount: number) => void
    reset: (setCount: number) => void
}

type PropsType = {
    title: string
    func: FuncType
}

const Button = (props: PropsType) => {
    return (
    <button onClick={props.func}>{props.title}</button>
    )
}

export default Button


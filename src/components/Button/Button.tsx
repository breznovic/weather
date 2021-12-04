import React from 'react'

type FuncType = {
    inc: () => void
    reset: () => void
}

type PropsType = {
    title: string
    func: FuncType
}

const Button = (props: PropsType) => {
    return (
    <button>{props.title}</button>
    )
}

export default Button


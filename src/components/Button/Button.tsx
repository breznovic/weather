import React from 'react'

type PropsType = {
    title: string
    func: 'inc' | 'reset'
}

const Button = (props: PropsType) => {
    return (
    <button onClick={() => props.func}>{props.title}</button>
    )
}

export default Button


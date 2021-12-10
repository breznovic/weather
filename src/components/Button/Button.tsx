import React from 'react'

type PropsType = {
    title: string
    func: () => void
}

const Button = (props: PropsType) => {
    return (
    <button onClick={props.func}>{props.title}</button>
    )
}

export default Button


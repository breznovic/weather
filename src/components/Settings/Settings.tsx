import React from 'react'
import Button from "../Button/Button"
import '../../App.css'
import {useNavigate} from "react-router-dom";

export const maxValue = 5
const minValue = 0

const Settings = () => {

    const Navigate = useNavigate()

    let lid = () => Navigate('/counter')

    return (
        <div>
            <div className='border'>
                <div className='border'>
                    <div>Max value<input type='number' min={maxValue} /></div>
                    <div>Start value<input type='number' min={minValue} /></div>
                </div>
                <div className='container border'>
                    <Button disabled={false} title='Set' func={lid} maxValue={maxValue}/>
                </div>
            </div>
        </div>
    )
}

export default Settings
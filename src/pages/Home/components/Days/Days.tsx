import React from 'react'
import { Card } from './Card'

import s from './Days.module.scss'
import { Tabs } from './Tabs'

interface Props {}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Today',
            day_info: '28 aug',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Tomorrow',
            day_info: '29 aug',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'small rain and sun',
        },
        {
            day: 'Wed',
            day_info: '30 aug',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'small rain',
        },
        {
            day: 'Thu',
            day_info: '31 aug',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Fri',
            day_info: '01 sep',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Sat',
            day_info: '02 sep',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Sun',
            day_info: '03 sep',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
    ]
    return (
        <>
            <Tabs />
            <div className={s.days}>
                {days.map((day: Day) => (
                    <Card day={day} key={day.day} />
                ))}
            </div>
        </>
    )
}
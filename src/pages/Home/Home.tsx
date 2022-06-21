import React, { useEffect } from 'react'

interface Props {}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch()
    const { weather } = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'))
    }, [])
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather} />
                <ThisDayInfo />
            </div>
            <Days />
        </div>
    )
}

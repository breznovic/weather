import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import s from './Popup.module.scss';

interface Props {}

export const Popup = ({}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Temperature',
            value: '20° - feels like 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Pressure',
            value: '765 мм mercury column - normal',
        },
        {
            icon_id: 'precipitation',
            name: 'Precipitation',
            value: 'Without precipitation',
        },
        {
            icon_id: 'wind',
            name: 'Wind',
            value: '3 m/s south-west - light wind',
        },
    ]
    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>20°</div>
                    <div className={s.day__name}>Wednesday</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id="sun" />
                    </div>
                    <div className={s.day__time}>
                        Время: <span>21:54</span>
                    </div>
                    <div className={s.day__city}>
                        Time: <span>Saint-Petersburg</span>
                    </div>
                </div>
                <div className={s.this__day_info_items}>
                    {items.map((item: Item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    )
}
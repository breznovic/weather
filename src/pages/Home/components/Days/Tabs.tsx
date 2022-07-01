import React from 'react';

import s from './Days.module.scss';

interface Props {}

export const Tabs = (props: Props) => {
    const tabs = [
        {
            value: 'Week',
        },
        {
            value: '10 days',
        },
        {
            value: 'Month',
        },
    ]
    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={s.cancel}>Cancel</div>
        </div>
    )
}
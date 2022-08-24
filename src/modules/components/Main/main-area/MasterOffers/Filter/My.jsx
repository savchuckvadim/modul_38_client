import { useState } from 'react';
import RedButton from '../../../../Elements/Button/Button';
import style from './My.module.css'

const My = (props) => {
    const active = 'red';
    const color = 'grey'
    const textColor = 'rgba(244, 72, 72, 1)'

    const [my, setDayStyle] = useState(color)
    const [notmy, setMonthStyle] = useState(color)
    const [all, setYearStyle] = useState(color)
    const actions = [
        {
            name: 'my',
            color: my
        },
        {
            name: 'not my',
            color: notmy
        },
        {
            name: 'all',
            color: all
        },
        ]
    const onButtonClick = (index) => {
        if (index === 1) {
            setDayStyle(active)
            setMonthStyle(color)
            setYearStyle(color)
        } else if (index === 2) {
            setDayStyle(color)
            setMonthStyle(active)
            setYearStyle(color)
        } else if (index === 3) {
            setDayStyle(color)
            setMonthStyle(color)
            setYearStyle(active)
        }
        props.getOffers()
    }

    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                {actions.map((action, index) => (
                    <li className={style.item}>{<RedButton
                        name={action.name}
                        color={action.color}
                        textColor={textColor}
                        border={12}
                        onClick={() => { onButtonClick(index+1) }}
                        disabled={false}
                    />}</li>
                ))}
            </ul>


        </div>
    )
}

export default My
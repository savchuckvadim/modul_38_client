import { useState } from 'react'
import style from './Period.module.css'

const Period = (props) => {
    const active = 'purple';
    const color = 'rgba(244, 72, 72, 1)'

    const [day, setDayStyle] = useState(color)
    const [month, setMonthStyle] = useState(color)
    const [year, setYearStyle] = useState(color)

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
        props.getFinance(index)
    }
    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                <li style={{ 'color': day }} onClick={() => { onButtonClick(1) }} className={style.item}>День</li>
                <li style={{ 'color': month }} onClick={() => { onButtonClick(2) }} className={style.item}>Месяц</li>
                <li style={{ 'color': year }} onClick={() => { onButtonClick(3) }} className={style.item}>Год</li>
            </ul>


        </div>
    )
}

export default Period
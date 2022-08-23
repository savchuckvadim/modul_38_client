import style from './Period.module.css'

const Period = () => {

    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                <li className={style.item}>День</li>
                <li className={style.item}>Месяц</li>
                <li className={style.item}>Год</li>
            </ul>


        </div>
    )
}

export default Period
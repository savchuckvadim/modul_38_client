import style from './My.module.css'

const My = () => {

    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                <li className={style.item}>My</li>
                <li className={style.item}>Not My</li>
                <li className={style.item}>All</li>
            </ul>


        </div>
    )
}

export default My
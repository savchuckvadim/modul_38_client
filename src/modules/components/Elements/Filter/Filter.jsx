import style from './Filter.module.css'

const Filter = (props) => {
    let alignItems = 'flex-end';
    if(props.align === 'left'){
        alignItems = 'flex-start';
    }
    return (
        <div className={style.frame}
        style={{
            alignItems: alignItems
        }}
        >

            <div className={style.functions}
            
            >
            {props.children}
            </div>
        </div>
    )

}

export default Filter
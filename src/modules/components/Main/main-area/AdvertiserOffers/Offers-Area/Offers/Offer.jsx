
import style from './Offer.module.css';
import dots from '../../../../../../../assets/imgs/posts/dots-menu.svg'
import OfferTitle from './Offer-Title/Offer-Title';

const Offer = (props) => {

    return (

        <div className={style.wrapper}>
            <div className={style.header}>
                <OfferTitle {...props} size={56} />

                <div className={style.functions}>
                    <img className={style.dots} src={dots} alt='dots'></img>
                </div>
            </div>
            <div className={style.body}>
                <div className={style.message__wrapper}>
                    <p className={style.message}>URL: {props.url}</p>
                    <p className={style.message}>Price: {` ${props.price} р.`}</p>

                    <p className={style.message}>Description: {props.description}</p>



                </div>
                {/* <div className={style.img__container}>
                    <img className={style.post__img} src={props.postsImg} alt="postsImg" />
                </div> */}
                {/* {postsImg} */}
            </div>
            <div className={style.footer}>
                <div className={style.actions__wrapper}>
                    <button className={style.action_button}
                        onClick={() => { props.delete(props.id) }}
                    >
                      
                        <p>Delete</p>
                    </button>


                </div>
                <div className={style.views}>
                    <p className={style.message}>Followers: {props.followers}</p>
                    <p>Transitions</p>
                    {/* <img className={style.icon} src={eye} alt="eye" /> */}


                    <p className={style.quantity}>420</p>
                </div>
            </div>
        </div>

    )
}

export default Offer
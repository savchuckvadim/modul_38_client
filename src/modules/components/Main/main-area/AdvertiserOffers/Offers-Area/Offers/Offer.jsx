
import style from './Offer.module.css';
import knife from '../../../../../../../assets/imgs/posts/knife.svg';
import knifeActive from '../../../../../../../assets/imgs/posts/knife-active.svg';

import repost from '../../../../../../../assets/imgs/posts/reply-share-circle.svg';
import eye from '../../../../../../../assets/imgs/posts/eye.svg';
import dots from '../../../../../../../assets/imgs/posts/dots-menu.svg'
import Author from '../../../../../Elements/Author/Author';
import OfferTitle from './Offer-Title/Offer-Title';
// let img = `https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80`
// let postsImg = `https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`

const Offer = (props) => {
    
    // let postsImg = null
    // let dislike = knife
    // let likesCount = null
    // if (props.postsImg) {
    //     postsImg = <div key={`post-img-container`} className={style.img__wrapper}>
    //         <img  key={'post-img-container'} className={style.post__img} src={props.postsImg} alt="postsImg" />
    //     </div>
    // }

    // if(props.isAuthUserLikes){
    //     dislike = knifeActive
    // }

    // if(props.likesCount){
    //     likesCount = props.likesCount
    // }
    

    return (

        <div className={style.wrapper}>
            <div className={style.header}>
                <OfferTitle {...props} size={56}/>

                <div className={style.functions}>
                    <img className={style.dots} src={dots} alt='dots'></img>
                </div>
            </div>
            <div className={style.body}>
                <div className={style.message__wrapper}>
                    <p className={style.message}>Description: {props.description}</p>
                    <p className={style.message}>Price: {` ${props.price} р.`}</p>
                    <p className={style.message}>URL: {props.url}</p>
                    <p className={style.message}>Followers: {props.followers}</p>

                </div>
                {/* <div className={style.img__container}>
                    <img className={style.post__img} src={props.postsImg} alt="postsImg" />
                </div> */}
                {/* {postsImg} */}
            </div>
            <div className={style.footer}>
                <div className={style.actions__wrapper}>
                    <button className={style.action_button}
                    onClick={()=>{props.delete(props.id)}}
                    >
                        {/* <img 
                        className={style.action} 
                        src={knife} 
                        alt="delete" 
                        
                        /> */}
                        <p>Delete</p>
                    </button>
                   

                </div>
                <div className={style.views}>
                   <p>Transitions</p>
                    <img className={style.icon} src={eye} alt="eye" />
                 
                    
                    <p className={style.quantity}>420</p>
                </div>
            </div>
        </div>

    )
}

export default Offer
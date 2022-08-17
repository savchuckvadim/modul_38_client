import Post from "./Offers/Offer";
import nopost from '../../../../../../assets/imgs/posts/nopost.svg';
import style from './Posts-Area.module.css'
import Offer from "./Offers/Offer";

const OffersArea = (props) => {

    let offersArea =  null
    
    if (props.offers.length > 0) {
        offersArea = props.offers.map((offer, index) => {

            return <Offer
               
                key={`post-${index}`}
                {...offer}
                delete={props.delete}
            />
        })
    }else{
        offersArea = <img className={style.nopost} src={nopost} alt='no posts'></img>
    }
    return offersArea

}

export default OffersArea
import { useState } from 'react'
import style from './Offer-Statistics.module.css'
import StatisticsItem from './Item/Statistics-Item'

const OfferStatistics = (props) => {
const followers = props.offer.followers
 
const mastersProfit = props.offer.mastersProfit || 0
const statistics =
    [
        {
            name: 'transitions',
            quantity: 0
        },
        {
            name: 'followers',
            quantity: followers
        },
        {
            name: 'profit',
            quantity: mastersProfit
        }
    ]

let items = statistics.map((item, index) => (<StatisticsItem key={index} name={item.name} quantity={item.quantity}/>))
    return (
        <div className={style.wrapper}>
            {items}
        </div>
    )
}

export default OfferStatistics
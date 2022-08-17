
export const followUnfollow = (offers, offerId, bool) => {
    let result = []
    if (offers.length > 0) {
        result = offers.map(offer => { //перебирает массив offers
            if (offer.id === offerId) {      //если находит в массиве offer с id таким же как передали из AC
                offer.isFollowing = bool //ставит true в  isFollowing
                if (bool === 1) {
                    offer.followers += 1
                } else {
                    offer.followers -= 1
                }

                return offer
            } else {
                return offer
            }
        })
    }

    return result;
};
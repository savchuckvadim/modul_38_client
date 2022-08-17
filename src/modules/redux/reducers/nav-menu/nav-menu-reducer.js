

let initialState = [
    // {
    //     name: 'Profile',
    //     link: 'profile',

    // },
    // {
    //     name: 'Messages',
    //     link: 'messages',

    // },
    {
        name: 'Users',
        link: 'users',
        forRole: ['Admin']
       

    },
    {
        name: 'My Offers',
        link: 'advertiserOffers',
        forRole: ['Admin', 'Advertiser']
       

    },
    {
        name: 'Offers',
        link: 'masterOffers',
        forRole: ['Admin', 'Master']
       

    }


]


const navMenuReducer = (state = initialState, action) => {
    return  state


};

export default navMenuReducer;
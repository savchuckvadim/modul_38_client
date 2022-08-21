

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
        forRole: ['Advertiser']
       

    },
    {
        name: 'Offers',
        link: 'masterOffers',
        forRole: ['Master']
       

    },
    {
        name: 'Finance',
        link: 'finance',
        forRole: ['Admin', 'Master', 'Advertiser']
       

    }


]


const navMenuReducer = (state = initialState, action) => {
    return  state


};

export default navMenuReducer;
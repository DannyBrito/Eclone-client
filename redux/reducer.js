import {FETCH_LISTINGS,CHANGE_DISPLAY_LISTING,SET_CURRENT_USER,FETCH_OWN_LISTINGS,ADD_TO_OWN_LISTINGS,ADD_TO_FETCH_LISTINGS,SETTING_LIKED_LISTINGS,FETCH_OUT_STOCK_LISTINGS,FETCH_IN_CART_LISTINGS,DELETE_LISTING_FROM_CART_TOTAL,ADD_TO_CART,BUY_IN_CART,RESTATE} from './action_type'

const defaultState = {
    // fetched_listings refering to all avalible listings
    fetched_listings:[],
    currentUser:{},
    listing_display:{},
    own_listings:[],
    liked_listings:[],
    out_stock_listings:[],
    user_in_cart_listings:[],
    cart_total:0
}

function reducer(prevState = defaultState,{type,payload,offset,adjust}){

    switch(type){
        case FETCH_LISTINGS:

            return {...prevState,fetched_listings:payload}

        case CHANGE_DISPLAY_LISTING:

            return{...prevState,listing_display:payload}

        case SET_CURRENT_USER:

            return{...prevState,currentUser:payload}

        case FETCH_OWN_LISTINGS:

            return{...prevState,own_listings:payload}

        case ADD_TO_OWN_LISTINGS:

            return{...prevState,own_listings:[...prevState.own_listings,payload]}
            
        case ADD_TO_FETCH_LISTINGS:

            return{...prevState,fetched_listings:[...prevState.fetched_listings,payload]}

        case SETTING_LIKED_LISTINGS:

            return{...prevState,liked_listings:payload}

        case FETCH_OUT_STOCK_LISTINGS:

            return{...prevState,out_stock_listings:payload}
        
        case FETCH_IN_CART_LISTINGS:

            return{...prevState,user_in_cart_listings:payload,cart_total:offset}

        case DELETE_LISTING_FROM_CART_TOTAL:
            
            const user_in_cart_listings = prevState.user_in_cart_listings.filter(listing => listing.cart_id !== payload)
            return{...prevState,user_in_cart_listings,cart_total:offset}

        case ADD_TO_CART:
            return{...prevState,user_in_cart_listings:[...prevState.user_in_cart_listings,payload],cart_total:offset}

        case BUY_IN_CART:
            return{...prevState,user_in_cart_listings:[],cart_total:0,fetched_listings:payload,own_listings:offset,liked_listings:adjust}
        
        case RESTATE:
            return {...defaultState}

        default:

        return prevState
    }

}

export default reducer
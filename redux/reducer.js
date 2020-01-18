import {FETCH_LISTINGS,CHANGE_DISPLAY_LISTING,SET_CURRENT_USER,FETCH_OWN_LISTINGS,ADD_TO_OWN_LISTINGS,ADD_TO_FETCH_LISTINGS,SETTING_LIKED_LISTINGS,FETCH_OUT_STOCK_LISTINGS} from './action_type'

const defaultState = {
    hello:'poop',
    fetched_listings:[],
    currentUser:{},
    listing_display:{},
    own_listings:[],
    liked_listings:[],
    out_stock_listings:[]
}

function reducer(prevState = defaultState,{type,payload}){

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

        default:

            return prevState
    }

}

export default reducer
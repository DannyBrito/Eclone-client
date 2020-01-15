const defaultState = {
    hello:'poop',
    data:[],
    currentUser:{},
    listing_display_id:null
}

function reducer(prevState = defaultState,{type,payload}){

    switch(type){
        case "TEST":
            return {...prevState,hello:'nevermind'}
        case 'FETCH_LISTINGS':
            return {...prevState,data:payload}
        case 'CHANGE_DISPLAY_LISTING_ID':
            return{...prevState,listing_display_id:payload}
        case 'SET_CURRENT_USER':
            return{...prevState,currentUser:payload}
        default:
            return prevState
    }

}

export default reducer
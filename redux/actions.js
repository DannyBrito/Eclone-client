import {FETCH_LISTINGS,CHANGE_DISPLAY_LISTING,SET_CURRENT_USER,FETCH_OWN_LISTINGS,ADD_TO_OWN_LISTINGS,ADD_TO_FETCH_LISTINGS,SETTING_LIKED_LISTINGS} from './action_type'
import {URL_BASE} from '../constants/links'
import { Alert } from 'react-native'

export function FetchListings(listings){
    return{
        type: FETCH_LISTINGS,
        payload:listings
    }
}

export function ownlistings (listings){
    return{
        type:FETCH_OWN_LISTINGS,
        payload:listings
    }
}

export function userOwnListingsFetch(id){
    return(dispatch,getState) =>{

    fetch(URL_BASE+`/users/${id}/ownlistings`)
        .then(res => res.json())
        .then(res => {dispatch(ownlistings(res))})
        .catch(console.log)
    }
}
export function likedListings (listings){
    return{
        type:SETTING_LIKED_LISTINGS,
        payload:listings
    }
}

export function userLikedListingFetch(id){
    return(dispatch,getState) =>{

        fetch(URL_BASE+`/users/${id}/favorites`)
        .then(res => res.json())
        .then(res => {dispatch(likedListings(res))})
        .catch(console.log)
        
    }
}



// Add to userOwnListings
export function addToOwnListings(listing){
    return{
        type:ADD_TO_OWN_LISTINGS,
        payload:listing
    }
}

export function addToFetchListings(listing){
    return{
        type:ADD_TO_FETCH_LISTINGS,
        payload:listing
    }
}

export function autoFetchListings(){
    return (dispatch, getState) => {
        fetch(URL_BASE+`listings`)
            .then(res => res.json())
            .then(res =>{
                dispatch(FetchListings(res))
            })
            .catch(console.log)
    }
}

export function ChangeDisplayListing(listing){
    return{
        type: CHANGE_DISPLAY_LISTING,
        payload:listing
    }
}

export function SetCurrentUser(user){
    return{
        type: SET_CURRENT_USER,
        payload:user
    }
}



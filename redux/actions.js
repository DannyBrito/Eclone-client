import {FETCH_LISTINGS,CHANGE_DISPLAY_LISTING,SET_CURRENT_USER,FETCH_OWN_LISTINGS,ADD_TO_OWN_LISTINGS,ADD_TO_FETCH_LISTINGS,SETTING_LIKED_LISTINGS,FETCH_OUT_STOCK_LISTINGS,FETCH_IN_CART_LISTINGS,DELETE_LISTING_FROM_CART_TOTAL,ADD_TO_CART,BUY_IN_CART,RESTATE} from './action_type'
import {URL_BASE,DELETE_FETCH, POST_FETCH} from '../constants/links'
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

export function fetchOutStockListings(listings){
    return{
        type:FETCH_OUT_STOCK_LISTINGS,
        payload:listings
    }
}
export function outStockListingsFetch(){  
    return(dispatch,getState) =>{
        fetch(URL_BASE+'listings_out_stock')
        .then(res=>res.json())
        .then(res => {
            dispatch(fetchOutStockListings(res))
        })
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


export function fetchInCartListings(listings,total){
    return{
        type:FETCH_IN_CART_LISTINGS,
        payload:listings,
        offset:total
    }
}

export function fetchCartListingsAction(id){
    return (dispatch, getState) => {
        fetch(URL_BASE+`users/${id}/in_cart`)
            .then(res => res.json())
            .then(res =>{
                dispatch(fetchInCartListings(res.items,res.total))
            })
            .catch(console.log)
    }
}

export function deleteListingFromCartAction(id){
    return (dispatch, getState) => {
        DELETE_FETCH(`carts/${id}`)
            .then(res =>{
                dispatch(deleteListingFromCart(res.cart_id,res.total))
            })
            .catch(console.log)
    }
}

export function deleteListingFromCart(listings,total){
    return {
       type:DELETE_LISTING_FROM_CART_TOTAL,
       payload:listings,
       offset:total
    }
}

export function addListingToCart(listing,total){
    return{
        type:ADD_TO_CART,
        payload:listing,
        offset:total
    }
}

export function addListingToCartAction(user_id,listing_id){
    return (dispatch, getState) => {
        POST_FETCH('carts',{user_id:user_id,listing_id:listing_id})
            .then(res =>{
                dispatch(addListingToCart(res.cart_listing,res.cart_total))
            })
            .catch(console.log)
    }
}

export function buyInCart(updatedListings,updatedOwnListings,favListings){
    return{
        type:BUY_IN_CART,
        payload:updatedListings,
        offset:updatedOwnListings,
        adjust:favListings
    }
}

export function buyInCartAction(user_id){
    return (dispatch, getState) => {
        return POST_FETCH(`users/${user_id}/adquired`)
            .then(res =>{
                dispatch(buyInCart(res.avalible_listings,res.own_listings,res.fav_listings))
                return res
            })
    }
}

export function logOutRestState(){
    return{
        type:RESTATE,
    }
}
export function logOutRestStateAction(){
    return (dispatch, getState) => {
        dispatch(logOutRestState())
    }
}


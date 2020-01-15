const defaultState = {
    hello:'poop'
}

function reducer(prevState = defaultState,action){

    switch(action.type){
        case "TEST":
            return {...prevState,hello:'nevermind'}
        default:
            return prevState
    }

}

export default reducer
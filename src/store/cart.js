//import produceData from '../mockData/produce.json';

const ADD_PRODUCE = 'cart/ADD_PRODUCE';

export function addProduce(id) {
    return {
        type: ADD_PRODUCE,
        payload: id
    }
}



export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case (ADD_PRODUCE): {
            let id = action.payload
            if (state[id]) {
                state[id].count += 1;
                return state;
            } else {
                const newState = {...state, [id]: {id, count: 1}}
                return newState;
            }
        }
        default: return state;
    }
}
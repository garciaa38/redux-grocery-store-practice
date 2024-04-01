//import produceData from '../mockData/produce.json';

const ADD_PRODUCE = 'cart/ADD_PRODUCE';
const REMOVE_PRODUCE = 'cart/REMOVE_PRODUCE';
const ADD_ONE = 'cart/ADD_ONE';
const REMOVE_ONE = 'cart/REMOVE_ONE'
const PURCHASE_CART = 'cart/PURCHASE_CART'

export function addProduce(id) {
    return {
        type: ADD_PRODUCE,
        payload: id
    }
}

export function removeProduce(id) {
    return {
        type: REMOVE_PRODUCE,
        payload: id
    }
}

export function addOne(id) {
    return {
        type: ADD_ONE,
        payload: id
    }
}

export function removeOne(id) {
    return {
        type: REMOVE_ONE,
        payload: id
    }
}

export function purchaseCart() {
    return {
        type: PURCHASE_CART
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

        case (REMOVE_PRODUCE): {
            let id = action.payload
            delete state[id];
            return state;
        }

        case (ADD_ONE): {
            let id = action.payload
            state[id].count += 1;
            return state;
        }

        case (REMOVE_ONE): {
            let id = action.payload
            if (state[id].count === 1) {
                delete state[id];
                return state
            } else {
                state[id].count -= 1;
                return state;
            }
        }

        case (PURCHASE_CART): {
            state = {};
            return state;
        }

        default: return state;
    }
}
import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

export function populateProduce() {
    return {
        type: POPULATE,
        payload: produceData
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case (POPULATE): {
            const newState = {};
            action.payload.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState;
        }
        default: return state;
    }
}
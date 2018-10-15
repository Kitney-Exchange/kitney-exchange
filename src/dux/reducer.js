import axios from 'axios';

const initialState = {
    profile: [],
    hospitals: []
}

const GET_PROFILES = 'GET_PROFILES'

export default function reducer(state = initialState, action) {
    switch(action.type){
        case `${GET_PROFILES}`:
        return {
            ...state,
        }
    default: return {...state};
    }
}
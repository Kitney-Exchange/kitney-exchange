import axios from 'axios';

const initialState = {
    profile: [],
    files: [],
    hospitals: [],
    matched: [],
    isLoading: false
}

const GET_PROFILES = 'GET_PROFILES'
const GET_FILES = 'GET_FILES'
const GET_HOSPITALS = 'GET_HOSPITALS'
const GET_MATCHED = 'GET_MATCHED'

export const getProfiles = () => {
    return {
        type: GET_PROFILES,
        payload: axios.get('/api/profile')
        .then(response => {return response.data})
        .catch(err => console.log(err))
    }
}

export const getFiles = () => {
    return {
        type: GET_FILES,
        payload: axios.get('/api/files')
        .then(response => {return response.data})
        .catch( err=> console.log(err))
    }
}

export const getHospitals = () => {
    return {
        type: GET_HOSPITALS,
        payload: axios.get('/api/hospitals')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const getMatched = () => {
    return {
        type: GET_MATCHED,
        payload: axios.get('/api/hospitals')
        .then(response => {return response.data})
        .catch(err => console.log(err))
    }
}



export default function reducer(state = initialState, action) {
    switch(action.type){
        case `${GET_PROFILES}_PENDING`:
        return {
            ...state,
            isLoading: true
        }

        case `${GET_PROFILES}_FULFILLED`:
        return {
            ...state,
            profile: action.payload,
            isLoading: false
        }

        case `${GET_PROFILES}_REJECTED`:
        return {
            ...state,
            isLoading: false
        }

        case `${GET_FILES}_PENDING`:
        return {
            ...state,
            isLoading: true
        }

        case `${GET_FILES}_FULFILLED`:
        return {
            ...state,
            files: action.payload,
            isLoading: false
        }

        case `${GET_FILES}_REJECTED`:
        return {
            ...state,
            isLoading: false
        }

        case `${GET_HOSPITALS}_PENDING`:
        return {
            ...state,
            isLoading: true
        }

        case `${GET_HOSPITALS}_FULFILLED`:
        return {
            ...state,
            hospitals: action.payload,
            isLoading: false
        }

        case `${GET_HOSPITALS}_REJECTED`:
        return {
            ...state,
            isLoading: false
        }

        case `${GET_MATCHED}_PENDING`:
        return {
            ...state,
            isLoading: true
        }

        case `${GET_MATCHED}_FULFILLED`:
        return {
            ...state,
            matched: action.payload,
            isLoading: false
        }

        case `${GET_MATCHED}_REJECTED`:
        return {
            ...state,
            isLoading: false
        }
    default: return {...state};
    }
}
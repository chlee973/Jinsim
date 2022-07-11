import { SET_NICKNAME, SET_PROFILE_IMAGE } from "./actions"

const initialState = {
    nickname: '',
    profile_image: '',
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NICKNAME:
            return {...state, nickname: action.payload}
        case SET_PROFILE_IMAGE:
            return {...state, profile_image: action.payload}
        default:
            return state
    }
}

export default userReducer
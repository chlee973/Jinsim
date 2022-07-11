import { SET_NICKNAME, SET_PROFILE_IMAGE, SET_IS_SIGNED_IN } from "./actions";

const userInitialState = {
    nickname: "",
    profile_image: "",
};

const signInInitialState = {
    is_signed_in: false,
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case SET_NICKNAME:
            return { ...state, nickname: action.payload };
        case SET_PROFILE_IMAGE:
            return { ...state, profile_image: action.payload };
        default:
            return state;
    }
};

const signInReducer = (state = signInInitialState, action) => {
    switch (action.type) {
        case SET_IS_SIGNED_IN:
            return { ...state, is_signed_in: action.payload };
        default:
            return state;
    }
};

export { userReducer, signInReducer };

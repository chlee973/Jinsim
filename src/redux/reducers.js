import {
    SET_USER_ID,
    SET_NICKNAME,
    SET_PROFILE_IMAGE,
    SET_IS_SIGNED_IN,
    SET_CHANNEL,
    SET_ROOM,
    SET_LOVE,
    SET_HATE,
} from "./actions";

const userInitialState = {
    user_id: "",
    nickname: "",
    profile_image: "",
    is_signed_in: false,
    current_channel: null,
    current_room: null,
    love: "",
    hate: "",
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case SET_USER_ID:
            return { ...state, user_id: action.payload };
        case SET_NICKNAME:
            return { ...state, nickname: action.payload };
        case SET_PROFILE_IMAGE:
            return { ...state, profile_image: action.payload };
        case SET_IS_SIGNED_IN:
            return { ...state, is_signed_in: action.payload };
        case SET_CHANNEL:
            return { ...state, current_channel: action.payload };
        case SET_ROOM:
            return { ...state, current_room: action.payload };
        case SET_LOVE:
            return { ...state, love: action.payload };
        case SET_HATE:
            return { ...state, hate: action.payload };
        default:
            return state;
    }
};

export { userReducer };

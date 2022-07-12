export const SET_USER_ID = "SET_USER_ID";
export const SET_NICKNAME = "SET_NICKNAME";
export const SET_PROFILE_IMAGE = "SET_PROFILE_IMAGE";
export const SET_IS_SIGNED_IN = "SET_IS_SIGNED_IN";
export const SET_CHANNEL = "SET_CHANNEL";
export const SET_ROOM = "SET_ROOM";
export const SET_LOVE = "SET_LOVE";
export const SET_HATE = "SET_HATE";

export const setUserId = (user_id) => (dispatch) => {
    dispatch({
        type: SET_USER_ID,
        payload: user_id,
    });
};

export const setNickname = (nickname) => (dispatch) => {
    dispatch({
        type: SET_NICKNAME,
        payload: nickname,
    });
};

export const setProfileImage = (profile_image) => (dispatch) => {
    dispatch({
        type: SET_PROFILE_IMAGE,
        payload: profile_image,
    });
};
export const setLove = (love) => (dispatch) => {
    dispatch({
        type: SET_LOVE,
        payload: love,
    });
};
export const setHate = (hate) => (dispatch) => {
    dispatch({
        type: SET_HATE,
        payload: hate,
    });
};

export const setIsSignedIn = (is_signed_in) => (dispatch) => {
    dispatch({
        type: SET_IS_SIGNED_IN,
        payload: is_signed_in,
    });
};

export const setChannel = (channel) => (dispatch) => {
    dispatch({
        type: SET_CHANNEL,
        payload: channel,
    });
};

export const setRoom = (room) => (dispatch) => {
    dispatch({
        type: SET_ROOM,
        payload: room,
    });
};

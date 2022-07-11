export const SET_NICKNAME = 'SET_NICKNAME'
export const SET_PROFILE_IMAGE = 'SET_PROFILE_IMAGE'

export const setNickname = nickname => dispatch => {
    dispatch({
        type: SET_NICKNAME,
        payload: nickname
    })
}

export const setProfileImage = profile_image => dispatch => {
    dispatch({
        type: SET_PROFILE_IMAGE,
        payload: profile_image
    })
}
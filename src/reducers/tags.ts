import {
    SET_TAG,
    SET_SELECTED_TAGS
} from '../constants/actionTypes';

const INITIAL_STATE = {
    tags: {},
    current: []
};

type Action = {
    type: string,
    payload: any
}

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case SET_SELECTED_TAGS:
            return {
                ...state,
                current: action.payload
            }
        case SET_TAG:
            return {
                ...state,
                current: action.payload.current,
                tags: action.payload.tags_data
            }
        default: return state;
    }
}

import {
    ActionsJobs,
    JobsState
} from './interfaces';
import {
    LOADED_JOBS,
    REQUEST_JOBS
} from '../constants/actionTypes';




const INITIAL_STATE: JobsState = {
    jobs: [],
    currentPage: 0,
    count: 0,
    totalPages: 0,
    job: {},
    request: false
}

export default (state = INITIAL_STATE, action: ActionsJobs) => {
    switch (action.type) {
        case LOADED_JOBS:
            return {
                ...state,
                ...action.payload
            };
        case REQUEST_JOBS:
            return {
                ...state,
                request: true
            }
        default: return state;
    }
}
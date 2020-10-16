import {
    ActionsJobs,
    JobsState
} from './interfaces';
import {
    LOADED_JOBS,
    LOADED_JOB_DETAIL,
    REQUEST_JOBS
} from '../constants/actionTypes';




const INITIAL_STATE: JobsState = {
    jobs: [],
    similar: [],
    currentPage: 0,
    count: 0,
    totalPages: 0,
    jobDetail: null,
    request: false
}

export default (state = INITIAL_STATE, action: ActionsJobs): JobsState => {
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
        case LOADED_JOB_DETAIL:
            return {
                ...state,
                jobDetail: action.payload.jobDetail,
                similar: action.payload.similar,
                request: false
            }
        default: return state;
    }
}
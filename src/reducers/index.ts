import { combineReducers } from 'redux';
import tagsReducer from './tags';
import jobsReducer from './jobs';

const rootReducer = combineReducers({
    tags: tagsReducer,
    jobs: jobsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

import { combineReducers, } from 'redux';

export const initialState = {
};

const appReducers = combineReducers({

});

export const reducers = (state, action) => {
    if (action.type === "CLEAR_STATE") {
        state = initialState;
    }
    return appReducers(state, action);
};

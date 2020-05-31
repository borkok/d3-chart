import * as actionTypes from './actions';
import {initialState} from "./initialState";

const reducer = (oldState = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD:
            return {"data": action.payload.data, "project": action.payload.project};
        default:
            return oldState;
    }
};

export default reducer;
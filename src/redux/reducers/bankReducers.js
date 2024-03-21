import { ActionTypes } from "../constants/action-types"

export const bankReducer = (state = { amount: 0 }, action) => {
    if (action.type == ActionTypes.DEBIT)
        return { amount: state.amount - action.payload };
    else if (action.type == ActionTypes.CREDIT)
        return { amount: state.amount + action.payload };
    else if (action.type == ActionTypes.RESET)
        return { amount: 0 };
    else
        return state;
}
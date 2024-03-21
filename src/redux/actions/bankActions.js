import { ActionTypes } from "../constants/action-types";

export const debitBankAction=(amount)=>{
    return {
        type:ActionTypes.DEBIT,
        payload:amount
    }
}

export const creditBankAction=(amount)=>{
    return {
        type:ActionTypes.CREDIT,
        payload:amount
    }
}

export const resetBankAction=(amount)=>{
    return {
        type:ActionTypes.RESET
        
    }
}
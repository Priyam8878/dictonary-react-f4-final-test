import { STORE_HISTORY } from "../actions/actionType";
const inatialData=[]
export const store_historyReducer=(state=inatialData,action)=>{
    switch(action.type){
        case STORE_HISTORY:return [...state,action.data]
        default :return state
    }

}
import { counter_decrement, counter_increment } from "./action.types";

export const reducer  = (state , action) => {
    
    switch(action.type){
        case counter_increment:{
            {state.count++}
            return {...state}
        }
        case counter_decrement:{
            state.count--;
            return {...state}
        }
        default:{
            return {...state}
        }
    }
}
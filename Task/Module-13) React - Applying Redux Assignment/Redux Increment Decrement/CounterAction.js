export const add = "INCREMENT"
export const minus = "DECREMENT"
export const addCounter = ()=>{
    return {
        // type:"INCREMENT"
        type:add
    }
}
export const minusCounter = ()=>{
    return {
        // type:"DECREMENT"
        type:minus
    }
}
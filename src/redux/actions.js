export const setAuth = (user)=>{
    return {
        type: "SET_AUTH",
        authObj: user
    }
}

export const increment = (num)=>{
    return {
        type: "INCREMENT",
        amount: num
    }
}
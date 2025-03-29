import { useEffect, useReducer } from "react"


const initialState = {
    question: [],
    status: 'loading',
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'dataReceived':
            return {...state, question: action.payload, status: 'ready'}
    }
}




export default function UseReducerEX03(){
    const [state, dispatch] = useReducer(reducer, initialState)
    

    useEffect(()=>{
        async function getData () {
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/users')
                const response = await data.json();
                dispatch({type: 'dataReceived', payload: response})
            }catch(err){
                console.err(err)
                dispatch({type: 'FailedToLoad', payload: err })
            }
        }
        getData();
    }, [])
    return(
        <>
        </>
    )
}
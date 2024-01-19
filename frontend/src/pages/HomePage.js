import React, { useReducer } from "react";

const initialState = { shoes: [] };

const reducer = (state, action) => {
    switch(action.type){
        case'SHOES_LOADED':
            return{...state, shoes: action.payload };
        default:
            return state;
    }
}
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { shoes } = state;

    useEffect(() => {
        getAll().then(foods => dispatch ({ type: 'SHOES_LOADED', payload: foods }))
    }, [])
    return <div>HomePage</div>
}
import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
            }
        default:
            return state;
    }
}

// this component will wrap the entire app
// and provide the context to all the components
export const WorkoutsContextProvider = ({ children }) => {

    // reducer function for updating the state 
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null,
    })

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}
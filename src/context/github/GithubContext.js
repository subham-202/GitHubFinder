import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()


export const GithubProvider=({children})=>{
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false 
    }
    const [state,dispatch]=useReducer(githubReducer,initialState)
    //Clear Users from State
    const handleClearResults = () => {
        dispatch({
            type:'CLEAR_USERS'
        })
        // searchhUsers('')
    }
    return(
    <GithubContext.Provider value={{
        ...state,
        dispatch,
        handleClearResults,
        // getUser,
        // getUserRepos
        }}>
            {children}
    </GithubContext.Provider>   
    )
}
export default GithubContext;
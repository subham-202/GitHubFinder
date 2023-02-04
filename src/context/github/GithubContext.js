import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider=({children})=>{
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);
    const initialState={
        users:[],
        loading:false 
    }
    const [state,dispatch]=useReducer(githubReducer,initialState)
    //Get Search Users
    const searchhUsers = async (text) => {
        setLoading()
        const params= new URLSearchParams({
            q:text,
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                // Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        // const data = await response.json()
        const {items} = await response.json()
        // setUsers(data);
        // setLoading(false);
        dispatch({
            type:'GET_USERS',
            payload:items 
        }
        )}
        // console.log(users)
        const setLoading=()=>dispatch({type:
            'SET_LOADING'})
    return<GithubContext.Provider value={{users:state.users,
    loading:state.loading,searchhUsers}}>
        {children}
    </GithubContext.Provider>   
}
export default GithubContext;
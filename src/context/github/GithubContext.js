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
        user:{},
        repos:[],
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
        ) 
    }

    //Get Single User
    const getUser = async (login) => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users/${login} `, {
            headers: {
                // Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        if(response.status===404){
          window.location='/notfound'
        } else{
            // const data = await response.json()
            const data = await response.json()
            // setUsers(data);
            // setLoading(false);
            dispatch({
                type: 'GET_USER',
                payload: data
            }
            )    
        }
    }
    //Get  User Repo
    const getUserRepos = async (login) => {
        setLoading()

        const params = new URLSearchParams({
            sort: 'created',
            per_page:10 
        })

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                // Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
    
        const  data = await response.json()
        console.log("</>",data);
        dispatch({
            type: 'GET_REPOS',
            payload: data
        }
        )
    }

    //Clear Users from State
    const handleClearResults = () => {
        dispatch({
            type:'CLEAR_USERS'
        })
        // searchhUsers('')
    }
        // console.log(users)
    const setLoading=()=>dispatch({type:'SET_LOADING'})
    return(
    <GithubContext.Provider value={{
        users:state.users,
        loading: state.loading, 
        user: state.user, 
        repos:state.repos,
        searchhUsers, 
        handleClearResults,
        getUser,
        getUserRepos
        }}>
            {children}
    </GithubContext.Provider>   
    )
}
export default GithubContext;
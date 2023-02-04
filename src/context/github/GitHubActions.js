const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
//Get Search Users
    export const searchhUsers = async (text) => {
    // setLoading()
    const params = new URLSearchParams({
        q: text,
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            // Authorization: `token ${GITHUB_TOKEN}`,
        },
    })
    // const data = await response.json()
    const  { items}  = await response.json()
    // setUsers(data);
    // setLoading(false);
    // dispatch({
    //     type: 'GET_USERS',
    //     payload: items
    // }
    // )
    return items;
}
//Get Single User
export const getUser = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login} `, {
        headers: {
            // Authorization: `token ${GITHUB_TOKEN}`,
        },
    })
    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        // const data = await response.json()
        const data = await response.json()
        // setUsers(data);
        // setLoading(false);
        return data;
    }
}
//Get  User Repo
export const getUserRepos = async (login) => {

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
            // Authorization: `token ${GITHUB_TOKEN}`,
        },
    })

    const data = await response.json()
    console.log("</>", data);
    return data;
}


export const postReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.posts
        case "CREATE":
            return [...state, action.post]
        default:
            return state
    }
}
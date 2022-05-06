export const projectAction = (projects) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_PROJECTS',
            payload: projects
        })
    }
}


// Create Redux action types
export const SAVE_USER_DETAILS = 'SAVE_USER_DETAILS'

export const saveUserDetails = data => ({
    type: SAVE_USER_DETAILS,
    payload: data
})

// Combine them all in an asynchronous thunk
export function saveUserData(data) {
    return async (dispatch) => {
        console.log("login actions.." + JSON.stringify(data))
        try {
            dispatch(saveUserDetails(data))
          } catch (error) {
              console.log("saveUserData: " + error)
          }
    }
}
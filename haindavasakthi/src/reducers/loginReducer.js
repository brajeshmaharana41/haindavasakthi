import * as actions from '../actions/loginActions'

export const initialState = {
  userData: {},
  user: {
    name: 'Test User'
  }
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_USER_DETAILS:
      console.log("action.payload...................! " + JSON.stringify(action.payload))
      return { ...state, userData: action.payload }
    default:
      return state
  }
}
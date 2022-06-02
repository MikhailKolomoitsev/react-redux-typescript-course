const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

interface IUserState {
  users: any[]
  loading: boolean
  error: null | boolean
}

interface IUserAction{
    type: string,
    payload?:any
}

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (state = initialState, action:IUserAction): IUserState => {
  switch (action.type) {
    case FETCH_USERS:
      return { loading: true, error: null, users: [] }
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload}
    case FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] }
    default:
      return state
  }
}

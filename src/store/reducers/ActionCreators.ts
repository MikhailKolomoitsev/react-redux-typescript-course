import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from 'models/IUser'
import { AppDispatch } from 'store/store'
import { userSlice } from './UserSlice'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const res = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users',
//     )
//     dispatch(userSlice.actions.usersFetchingSuccess(res.data))
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError(e.message))
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users',
      )
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Data download error')
    }
  },
)

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { userSlice } from 'store/reducers/UserSlice';
import './App.css'
import { fetchUsers } from 'store/reducers/ActionCreators';
import PostContainer from 'components/PostContainer';
import PostContainer2 from 'components/PostContainer2';

const App = () => {
    // const dispatch = useAppDispatch()
    // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])


    return (
        <div className='App'>
            {/* {isLoading && <h1>Data is loading...</h1>}
            {error && <h1>{error}</h1>}
            {!isLoading && users.map(user => {
                return <div key={user.id}>{user.name}</div>
            })} */}

            <div style={{ display: 'flex' }}>
                {/* //2 the same requests in different components +
                possible to cash data from requests with diff query-params*/}
                <PostContainer />
                <PostContainer2 />
            </div>
        </div>
    );
};

export default App;

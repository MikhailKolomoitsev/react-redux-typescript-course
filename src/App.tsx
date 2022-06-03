import React from 'react';
import TodoList from './components/TodoLIst';
import UserList from "./components/UserList";

const App = () => {
    return (
        <div>
            <UserList />
            <hr />
            <TodoList/>
        </div>
    );
};

export default App;

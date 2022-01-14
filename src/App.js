import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {
    const [userList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    name: userName,
                    age: userAge,
                    id: Math.round(Math.random() * 100).toString()
                }
            ]
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={userList} />
        </div>
    );
}

export default App;

import Card from "../UI/Card";
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(null)

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            })
            return;
        }
        console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className="my-8 p-4 mx-auto w-11/12 max-w-160" >
                <form onSubmit={addUserHandler}>
                    <label
                        className="block font-bold mt-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="block w-full border border-solid border-gray-300 p-1 mb-2 focus:outline-0 focus:border-purple-900"
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />

                    <label
                        className="block font-bold mt-2"
                        htmlFor="age"
                    >
                        Age (Years)
                    </label>
                    <input
                        type="number"
                        id="age"
                        className="block w-full border border-solid border-gray-300 p-1 mb-2 focus:outline-0 focus:border-purple-900"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />

                    <Button
                        type="submit"
                    >
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;
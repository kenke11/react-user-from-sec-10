import Card from "../UI/Card";

const UsersList = (props) => {
    return (
        <Card className="my-8 mx-auto w-11/12 max-w-160">
            <ul className="list-none p-4">
                {
                    props.users.map(user => (
                        <li key={user.id} className="border border-solid p-2 border-gray-500 mt-1">{user.name} ({user.age} years old)</li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default UsersList;
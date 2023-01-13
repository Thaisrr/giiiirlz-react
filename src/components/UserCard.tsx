import {User} from "../types/User";

type UserProps = {user: User};
function UserCard(props: UserProps) {
    const user = props.user;
   // const {user} = props;

    return (
        <div className='Card'>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username : {user.username}</p>
        </div>
    )
}

export default UserCard;


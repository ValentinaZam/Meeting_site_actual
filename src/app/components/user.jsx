import React, { useState } from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualities";
import api from "../api";


const User = ({ id, name, profession, completedMeetings, rate }) => {
    const [users, setUsers] = useState(api.users.fetchAll());
    // const handleDelete = (userId) => {
    //     setUsers(users.filter((user) => user._id !== userId));
    // };
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>
                {users.map(user =>
                    user.qualities.map((item) => (<Qualities key={item._id} color={item.color} id={item._id} name={item.name} />)))}
                {/* {user.qualities.map((item) => (
                    <span className={"badge m-1 bg-" + item.color} key={item._id}>
                        {item.name}
                    </span>
                ))} */}
            </td>
            <td>{profession}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>


            {/* <td>
                <button onClick={() => handleDelete(id)} className="btn btn-danger">
                    delete
                </button>
            </td> */}
        </tr>
    )
}


export default User
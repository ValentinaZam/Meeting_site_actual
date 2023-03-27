import React, { useState } from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualities";

const User = ({ user, onDelete, handleToggle }) => {
    return (
        <tr key={user._id}>
            <td scope="row">{user.name}</td>

            <td>
                {user.qualities.map((elem) => (<Qualities key={elem._id} color={elem.color} id={elem._id} name={elem.name} />))}
            </td>

            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{`${user.rate} / 5`}</td>
            <td>
                <Bookmark key={user._id} status={user.bookmark} onClick={handleToggle} id={user._id} />
            </td>
            <td><button className='btn btn-danger' onClick={() => onDelete(user._id)}>delete</button></td>
        </tr>
    )
}
export default User
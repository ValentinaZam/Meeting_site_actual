import React, { useState, useEffect } from "react"
import api from "../../api"
import PropTypes from "prop-types"
import QualitiesList from "./qualitiesList"
import { useHistory } from "react-router-dom"
const UserPage = ({ match }) => {
    const userId = match.params.userId
    const [userInfo, setUserInfo] = useState()
    useEffect(() => {
        api.users.getById(userId).then((res) => setUserInfo(res))
    }, [userId])
    const history = useHistory()
    const handleReturn = () => {
        history.push("/users")
    }

    return <>{userInfo && (<>
        <h1>{userInfo.name}</h1>
        <h2>Профессия: {userInfo.profession.name}</h2>
        <span><QualitiesList qualities={userInfo.qualities} /></span>
        <div>completedMeeting: {userInfo.completedMeetings}</div>
        <h2>Rate: {userInfo.rate}</h2>
        <button onClick={handleReturn}>Все пользователи</button>
    </>
    )}
    </>
}
UserPage.propTypes = {
    match: PropTypes.object.isRequired
}

export default UserPage

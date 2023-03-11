import React, { useState } from 'react'
import api from "../api"

const Users = () => {
   
    const [users, setUsers] = useState(api.users.fetchAll());

    const changeColorSpan = (number) => {
        let badge = "badge m-2 "
        return badge += number === 0? "bg-danger" : "bg-primary"
    }

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(tag => tag !== userId))
    };

    const renderPhrase = (number) => {
        //Чтобы Сергей не ругался:) При увеличении количества users вставить функцию с большим количеством фильтров для number с проверкой на 22, 23 )
        return number === 0? "Никто с тобой не тусанёт" : (number<5 && number>1) ? `${number} человека тусанёт с тобой сегодня`: `${number} человек тусанёт с тобой сегодня`
    };

    if(users.length === 0){
        return <h2><span className={changeColorSpan(users.length)}>{renderPhrase(users.length)}</span></h2>
    }
    return(
        <>
        <h2><span className={changeColorSpan(users.length)}>{renderPhrase(users.length)}</span></h2>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился раз</th>
      <th scope="col">Оценка</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
        {
            users.map((item) => (<tr key={item._id}>
                <td scope="row">{item.name}</td>

                <td>
                {item.qualities.map((elem) => (
                    <div key={elem._id} className={"badge m-1 bg-" + elem.color}> {elem.name} </div>
                ))}
                </td>

                <td>{item.profession.name}</td>
                <td>{item.completedMeetings}</td>
                <td>{`${item.rate} / 5`}</td>
                <td><button className='btn btn-danger' onClick={() => handleDelete(item)}>delete</button></td>
            </tr>))
        }
  </tbody>
</table>
        </>
    );
}

export default Users
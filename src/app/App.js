import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "../api";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <>
      <SearchStatus length={users.length} />

      {users.length > 0 && <Users />}
    </>
  );
}

export default App;

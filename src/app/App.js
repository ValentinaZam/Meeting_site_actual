import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "../api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    const newUsers = users.map((user) => {
      const statusBookmark = { ...user };
      if (statusBookmark._id === id) {
        if (!statusBookmark.bookmark) {
          statusBookmark.bookmark = true;
        } else {
          statusBookmark.bookmark = false;
        }

        return statusBookmark;
      } else {
        return statusBookmark;
      }
    });
    setUsers(newUsers);

    const statusBookmark = { ...users };

    const star = "bi bi-star";
    if (statusBookmark._id === id) {
      return <i className="bi bi-star-fill"></i>;
    } else {
      return <i className="bi bi-star"></i>;
    }
  };

  return (
    <div>
      <SearchStatus length={users.length} />

      <Users users={users} onDelete={handleDelete} onClick={handleToggleBookMark} />
    </div>
  );
}

export default App;

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
import React, { useState } from "react";
function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge , id:Math.random().toString()}];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;

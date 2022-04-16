import React, { useState } from "react";
import NewUserForm from "./User/NewUserForm";
import UserList from "./User/UserList";

function App() {
  const DUMMY = [
    { id: 1, userName: "Bob", age: 20 },
    { id: 2, userName: "Alex", age: 33 },
    { id: 3, userName: "Sarge", age: 19 },
  ];

  const [users, setUsers] = useState(DUMMY);

  const addUserHandler = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [
        { userName: userName, age: userAge, id: Math.random().toString() },
        ,
        ...prevUsers,
      ];
    });
  };

  return (
    <div>
      <NewUserForm onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;

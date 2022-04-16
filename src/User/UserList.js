import React from "react";
import Card from "../UI/Card";
import css from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={css.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

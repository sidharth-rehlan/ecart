import React from "react";
import classes from "./Users.module.css";
import AddUser from "./AddUser";
import UserList from "./UsersList";

function Users() {
  return (
    <div className={classes.usersPage}>
      <AddUser></AddUser>
      <UserList></UserList>
    </div>
  );
}

export default Users;

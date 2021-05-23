import React, { useState } from "react";
import UserRow from "./UserRow";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    <div className={classes.userlist}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.usersdata.map((user) => {
            return (
              <UserRow
                id={user.id[0]}
                key={user.id[0]}
                firstname={user.firstname}
                lastname={user.lastname}
                age={user.age}
                location={user.location}
                updateUserList={props.updateUserList}
                onEditHandler={props.onEditHandler}
              ></UserRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;

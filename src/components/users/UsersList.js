import React from "react";
import UserRow from "./UserRow";
import classes from "./UsersList.module.css";
const usersdata = [
  {
    id: 1,
    firstname: "sidharth",
    lastname: "rehlan",
    age: 34,
    location: "chandigarh",
  },
  {
    id: 2,
    firstname: "ram",
    lastname: "rehlan",
    age: 34,
    location: "chandigarh",
  },
  {
    id: 3,
    firstname: "karan",
    lastname: "rehlan",
    age: 34,
    location: "chandigarh",
  },
  {
    id: 4,
    firstname: "nitin",
    lastname: "rehlan",
    age: 34,
    location: "chandigarh",
  },
];

function UsersList() {
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
          {usersdata.map((user) => {
            return (
              <UserRow
                key={user.id}
                firstname={user.firstname}
                lastname={user.lastname}
                age={user.age}
                location={user.location}
              ></UserRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;

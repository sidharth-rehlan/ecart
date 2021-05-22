import React, { useEffect, useState } from "react";
import classes from "./Users.module.css";
import AddUser from "./AddUser";
import UserList from "./UsersList";

const manuplateData = (data) => {
  let userData = [],
    id;
  let keys = Object.keys(data);
  keys.forEach((key) => {
    id = Object.keys(data[key]);
    userData.push({ ...data[key][id], id: id });
  });
  return userData;
};

function Users() {
  const [users, setUsers] = useState([]);
  const [isUserAdded, setIsUserAdded] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ecart-c1e4a-default-rtdb.firebaseio.com/users.json"
      );
      const userData = await response.json();
      const parsedData = manuplateData(userData);
      //console.log(userData);
      setUsers(parsedData);
    };
    fetchData();
  }, [isUserAdded]);

  const onUserAddedHandler = (id) => {
    setIsUserAdded(id);
  };

  return (
    <div className={classes.usersPage}>
      <AddUser onUserAdded={onUserAddedHandler}></AddUser>
      <UserList usersdata={users}></UserList>
    </div>
  );
}

export default Users;

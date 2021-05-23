import React, { useEffect, useState } from "react";
import classes from "./Users.module.css";
import AddUser from "./AddUser";
import UserList from "./UsersList";
import httpConfig from "../../configs/httpsConfig";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "35%",
    left: "35%",
  },
}));

function Users() {
  console.log("...........Users.......");

  const [users, setUsers] = useState([]);
  const [isUserAdded, setIsUserAdded] = useState(null);
  const [updateRequired, setUpdateRequired] = useState(0);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${httpConfig.baseUrl}/users.json`);
      const userData = await response.json();
      const parsedData = manuplateData(userData);

      setUsers(parsedData);
    };
    fetchData();
  }, [isUserAdded, updateRequired]);

  const onUserAddedHandler = (id) => {
    setIsUserAdded(id);
  };

  const updateUserList = () => {
    setUpdateRequired((previousValue) => previousValue + 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = useStyles();

  const openUserEditModal = (userInfo) => {
    setOpen(true);
    setUserData(userInfo);
  };

  return (
    <div className={classes.usersPage}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={styles.paper}>
          <AddUser
            onUserUpdate={onUserAddedHandler}
            userData={userData}
          ></AddUser>
        </div>
      </Modal>
      <AddUser onUserAdded={onUserAddedHandler}></AddUser>
      <UserList
        usersdata={users}
        updateUserList={updateUserList}
        onEditHandler={openUserEditModal}
      ></UserList>
    </div>
  );
}

export default Users;

import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import httpConfig from "../../configs/httpsConfig";

function UserRow(props) {
  const { firstname, lastname, age, location, id } = props;

  const clickDeleteUser = async () => {
    const response = await axios.delete(
      `${httpConfig.baseUrl}/users/${firstname}.json`
    );
    if (response.statusText === "OK") {
      props.updateUserList();
    }
  };

  const clickEditUser = () => {
    props.onEditHandler({
      id,
      firstname,
      lastname,
      age,
      location,
    });
  };

  return (
    <>
      <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{age}</td>
        <td>{location}</td>
        <td>
          <span
            className="editIcon"
            onClick={clickEditUser}
            style={{ cursor: "pointer" }}
          >
            <EditIcon fontSize="large"></EditIcon>
          </span>
          <span className="deleteIcon">
            <DeleteIcon
              fontSize="large"
              onClick={clickDeleteUser}
              style={{ cursor: "pointer" }}
            ></DeleteIcon>
          </span>
        </td>
      </tr>
    </>
  );
}

export default UserRow;

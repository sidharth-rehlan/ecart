import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function UserRow(props) {
  const { firstname, lastname, age, location } = props;
  return (
    <>
      <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{age}</td>
        <td>{location}</td>
        <td>
          <span className="editIcon">
            <EditIcon fontSize="large"></EditIcon>
          </span>
          <span className="deleteIcon">
            <DeleteIcon fontSize="large"></DeleteIcon>
          </span>
        </td>
      </tr>
    </>
  );
}

export default UserRow;

import React from "react";
import { Button } from "@material-ui/core";
import classes from "./AddUser.module.css";

function AddUser() {
  return (
    <div className={classes.addUser}>
      <form action="">
        <div>
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select name="location" id="location">
            <option value="chandigarh">chandigarh</option>
            <option value="newdelhi">New Delhi</option>
            <option value="karnal">Karnal</option>
            <option value="sonepat">Sonepat</option>
          </select>
        </div>
        <div>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;

import React, { useState } from "react";
import { Button } from "@material-ui/core";
import classes from "./AddUser.module.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function AddUser(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState({});
  const [status, setStatus] = useState({});

  const reInitializeForm = () => {
    setFirstname("");
    setLastname("");
    setAge("");
    setLocation("");
  };

  const saveUser = async (data) => {
    try {
      setStatus({});
      const response = await fetch(
        `https://ecart-c1e4a-default-rtdb.firebaseio.com/users/${data.firstname}.json`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.ok !== true) {
        throw new Error("Some issue has occured");
      }

      const userID = await response.json();
      if (typeof userID !== "string") {
        reInitializeForm();
        setStatus({ type: "success", msg: "Form submitted successfully" });
        props.onUserAdded(userID);
      }
    } catch (e) {
      setStatus({ type: "error", msg: e.toString() });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    saveUser({ firstname, lastname, age, location });
  };

  const validateFirstname = (e) => {
    if (e.target.value === "") {
      setError({ ...error, firstname: "Firstname is required" });
    } else if (e.target.value.length > 15) {
      setError({ ...error, firstname: "Firstname is too long" });
    } else if (e.target.value !== "") {
      setError({ ...error, firstname: null });
    }
  };

  const validateLastname = (e) => {
    if (e.target.value === "") {
      setError({ ...error, lastname: "Lastname is required" });
    } else if (e.target.value.length > 15) {
      setError({ ...error, lastname: "Lastname is too long" });
    } else if (e.target.value !== "") {
      setError({ ...error, lastname: null });
    }
  };

  const validateAge = (e) => {
    if (e.target.value === "") {
      setError({ ...error, age: "age is required" });
    } else if (isNaN(parseInt(e.target.value))) {
      setError({ ...error, age: "age must be number" });
    } else if (e.target.value !== "") {
      setError({ ...error, age: null });
    }
  };

  const fieldChangeHandler = (e) => {
    //setFirstname(e.target.value);
    const fieldName = e.target.name;
    switch (fieldName) {
      case "firstname":
        setFirstname(e.target.value);
        validateFirstname(e);
        break;
      case "lastname":
        setLastname(e.target.value);
        validateLastname(e);
        break;
      case "age":
        setAge(e.target.value);
        validateAge(e);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      default:
    }
  };

  const fieldBlurHandler = (e) => {
    const fieldName = e.target.name;
    switch (fieldName) {
      case "firstname":
        validateFirstname(e);
        break;
      case "lastname":
        validateLastname(e);
        break;
      case "age":
        validateAge(e);
        break;
      case "location":
        if (e.target.value === "") {
          setError({ ...error, location: "location is required" });
        } else if (e.target.value !== "") {
          setError({ ...error, location: null });
        }
        break;
      default:
    }
  };

  let statusMsg = "";
  if (status.type === "error") {
    statusMsg = (
      <p className={classes.error}>
        <ErrorOutlineIcon />
        {status.msg}
      </p>
    );
  } else if (status.type === "success") {
    statusMsg = (
      <p className={classes.success}>
        <CheckCircleOutlineIcon />
        {status.msg}
      </p>
    );
  }

  return (
    <div className={classes.addUser}>
      {statusMsg}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstname">
            First Name
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={fieldChangeHandler}
              onBlur={fieldBlurHandler}
            />
          </label>
          {error.firstname && (
            <span className={classes.error}>
              <ErrorOutlineIcon />
              {error.firstname}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={fieldChangeHandler}
            onBlur={fieldBlurHandler}
          />
          {error.lastname && (
            <span className={classes.error}>
              {" "}
              <ErrorOutlineIcon />
              {error.lastname}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={fieldChangeHandler}
            onBlur={fieldBlurHandler}
          />
          {error.age && (
            <span className={classes.error}>
              {" "}
              <ErrorOutlineIcon />
              {error.age}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            value={location}
            onChange={fieldChangeHandler}
            onBlur={fieldBlurHandler}
          >
            <option value="chandigarh">chandigarh</option>
            <option value="newdelhi">New Delhi</option>
            <option value="karnal">Karnal</option>
            <option value="sonepat">Sonepat</option>
          </select>
          {error.location && (
            <span className={classes.error}>
              {" "}
              <ErrorOutlineIcon />
              {error.location}
            </span>
          )}
        </div>
        <div>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            type="submit"
            disabled={
              !(
                firstname.length > 0 &&
                lastname.length > 0 &&
                age.length > 0 &&
                location.length > 0
              )
            }
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;

import React from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import classes from "./MyAccount.module.css";

const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Must be 15 character or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 character long";
  }
  if (!values.emailId) {
    errors.emailId = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)) {
    errors.emailId = "Invalid Email id";
  }
  return errors;
};

function MyAccount() {
  const formik = useFormik({
    initialValues: {
      emailId: "",
      password: "",
      firstname: "",
    },
    validate,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  const isEmpty = (object) =>{
    return Object.keys(object).length === 0
  } 
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
        />
      </div>
      {formik.touched.firstname && formik.errors.firstname ? (
        <div className={classes.error}>{formik.errors.firstname}</div>
      ) : null}
      <div>
        <label htmlFor="emailId">Email</label>
        <input
          type="email"
          name="emailId"
          placeholder="Email Id"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.emailId}
        />
      </div>
      {formik.touched.emailId &&  formik.errors.emailId  ? (
        <div className={classes.error}>{formik.errors.emailId}</div>
      ) : null}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className={classes.error}>{formik.errors.password}</div>
      ) : null}

      <Button disabled={isEmpty(formik.errors) ? false: true} type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default MyAccount;

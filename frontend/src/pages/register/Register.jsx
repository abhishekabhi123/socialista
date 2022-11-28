import { Button, Grid, Paper, TextField } from "@mui/material/";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
import { isRegisterFormValid } from "../../config/validation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: {
      value: "",
      error: true,
      error_msg: "",
    },
    fullname: {
      value: "",
      error: true,
      error_msg: "",
    },
    gender: {
      value: "",
      error: true,
      error_msg: "",
    },
    email: {
      value: "",
      error: true,
      error_msg: "",
    },
    password: {
      value: "",
      error: true,
      error_msg: "",
    },
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    //keyof GlobalEventHandlersEventMap
    console.log(values);
    e.target.value = e.target.value;

    let validateObj = {
      username:
        e.target.name === "username" ? e.target.value : values.username.value,
      fullname:
        e.target.name === "fullname" ? e.target.value : values.fullname.value,
      email: e.target.name === "email" ? e.target.value : values.email.value,
      password:
        e.target.name === "password" ? e.target.value : values.password.value,
      gender: e.target.name === "gender" ? e.target.value : values.gender.value,
    };
    isRegisterFormValid(validateObj)
      .then(() => {
        setValues({
          ...values,
          [e.target.name]: { value: e.target.value, error: false },
        });
      })
      .catch((err) => {
        err = err.filter((er) => {
          if (er.path[0] === e.target.name) {
            return er;
          }
        });
        if (err.length > 0) {
          console.log("`````", err);
          setValues({
            ...values,
            [e.target.name]: {
              value: e.target.value,
              error: true,
              error_msg: err[0].message,
            },
          });
        } else {
          setValues({
            ...values,
            [e.target.name]: { value: e.target.value, error: false },
          });
        }
      });
  };
  const handleSubmit = () => {
    let data = {
      username: values.username.value,
      fullname: values.fullname.value,
      gender: values.gender.value,
      email: values.email.value,
      password: values.password.value,
    };
    // if(values.name.error || values.email.error || values.password.error) return;
    axios
      .post("http://localhost:5000/api/register", data)
      .then((result) => {
        // console.log("success : ", result);
        navigate("/login");
      })
      .catch((error) => {
        console.error("error : ", error.response.data);
        setError(
          error.response.data[0]
            ? "Please fill out this fields"
            : error.response.data.msg
        );
      });
  };
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
        className="register-page"
      >
        <Paper elevation={10} className="form_container">
          <TextField
            name="username"
            id="outlined-error-helper-text"
            label="Username"
            // placeholder="abhi"
            fullWidth
            sx={{ margin: "10px 0px" }}
            onChange={handleChange}
            error={values.username.error_msg ? true : false}
            helperText={
              values.username.error ? values.username.error_msg : null
            }
          />
          <TextField
            name="fullname"
            id="outlined-error-helper-text"
            label="Fullname"
            // placeholder="abhi"
            fullWidth
            sx={{ margin: "10px 0px" }}
            onChange={handleChange}
            error={values.fullname.error_msg ? true : false}
            helperText={
              values.fullname.error ? values.fullname.error_msg : null
            }
          />
          <TextField
            name="email"
            id="outlined-error-helper-text"
            label="Email"
            placeholder="jojit@gmail.com"
            fullWidth
            sx={{ margin: "10px 0px" }}
            onChange={handleChange}
            error={values.email.error_msg ? true : false}
            helperText={values.email.error ? values.email.error_msg : null}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            name="password"
            id="outlined-error-helper-text"
            label="Password"
            placeholder="asdfasdf"
            fullWidth
            type="password"
            sx={{ margin: "10px 0px" }}
            onChange={handleChange}
            error={values.password.error_msg ? true : false}
            helperText={
              values.password.error ? values.password.error_msg : null
            }
          />
          <span className="error-txt">{error ? error : null}</span>
          <Grid container direction="row-reverse">
            <Button onClick={handleSubmit} variant="contained">
              Register
            </Button>
          </Grid>
          <Grid container justifyContent="center" className="hyperlink">
            Already Registered? <Link to="/login">Login</Link>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Register;

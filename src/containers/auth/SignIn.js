import React, { useState } from "react";
import { Container, Wrapper, Title } from "./AuthElements";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
  Box,

  Alert,
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/auth/authSlice";
import { motion } from "framer-motion"


function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };




  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {error.length > 0 && (
        <Alert
          // open={open}
          icon={false}
          style={{ backgroundColor: "red", color: "white", fontSize: "20px" }}
          sx={{ width: "60%", mt: 4, mb: 2 }}
        >{error}</Alert>
      )}

      <Paper elevation={10}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            auth
              .signInWithEmailAndPassword(values.email, values.password)
              .then((auth) => {
                dispatch(updateUser(auth));
                return navigate("/");
              }).catch((error) => {


                if (error.code === "auth/user-not-found") {
                  setError("No user record found.")
                } else if (error.code === "auth/wrong-passwod") {


                  setError("Password is incorrect")
                }
                else {
                  setError("Something wrong occur.Please try again later.")
                }


              });

            setTimeout(() => {
              resetForm();
              setSubmitting(false);
              setError("")
            }, 3000);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required")
              .matches(/([^\s@]+@[^\s@]+\.[^\s@]{2,})/, "Invalid email format"),
            password: Yup.string()
              .required("Required")
              .min(8, "Password must be 8 characters long.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
          })}
        >
          {(props) => {
            const {
              errors,
              isValid,
              touched,
              dirty,
              handleSubmit,
              handleChange,
            } = props;
            return (
              <Form onSubmit={handleSubmit}>
                <Wrapper>
                  <Title>Sign In</Title>
                  <Field
                    placeholder="email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    as={TextField}
                    onChange={handleChange}
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}

                    required
                  />
                  <Box sx={{ width: 100, height: 20 }} />
                  <Field
                    placeholder="password"
                    label="Password"
                    name="password"
                    variant="outlined"
                    type="password"
                    as={TextField}
                    name="password"
                    error={Boolean(errors.password) && Boolean(touched.password)}
                    helperText={Boolean(touched.password) && errors.password}


                  />
                  <Box sx={{ width: 100, height: 20 }} />
                  <FormControlLabel
                    control={<Checkbox name="checked" color="primary" />}
                    label="Rememeber me"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={!dirty || !isValid}
                  >
                    Sign in
                  </Button>
                  <Box sx={{ width: 100, height: 20 }} />
                  <Typography>
                    <Link to="/forgotpassword">Forgot password ?</Link>
                  </Typography>
                  <Typography>
                    {" "}
                    Do you have an account ?
                    <Link to="/signup">
                      <span style={{ paddingLeft: "10px", color: "blue" }}>
                        Sign Up
                      </span>
                    </Link>
                  </Typography>
                </Wrapper>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </Container >
  );
}

export default SignIn;

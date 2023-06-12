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


function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("")
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };


  return (
    <Container as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Paper elevation={10}>
        {message.length > 0 && (
          <Alert
            severity="error"
            style={{ backgroundColor: "red", color: "white", fontSize: "20px" }}
            sx={{ mt: 1, position: "absolute" }}
          >
            {message}


          </Alert>
        )}


        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            auth
              .createUserWithEmailAndPassword(values.email, values.password)
              .then((authUser) => {
                navigate("/");
                setSubmitting(false);
                dispatch(updateUser(authUser));
              }).catch(error => {
                setMessage("Email address is already in use. ")
                setTimeout(() => setMessage(""), 3000)
              })
            resetForm();
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
                  <Title>Sign Up</Title>
                  <Field
                    placeholder="Name"
                    label="Name"
                    variant="outlined"
                    fullwidth
                    name="name"
                    type="text"
                    as={TextField}
                    onChange={handleChange}
                    required
                  />
                  <Box sx={{ width: 100, height: 20 }} />
                  <Field
                    placeholder="email"
                    label="Email"
                    variant="outlined"
                    fullwidth
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
                    fullwidth
                    name="password"
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
                    Sign up
                  </Button>
                  <Box sx={{ width: 100, height: 20 }} />

                  <Typography>
                    {" "}
                    Do you have already an account ?
                    <Link to="/signin">
                      <span style={{ paddingLeft: "10px", color: "blue" }}>
                        Sign In
                      </span>
                    </Link>
                  </Typography>
                </Wrapper>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </Container>
  );
}

export default SignUp;

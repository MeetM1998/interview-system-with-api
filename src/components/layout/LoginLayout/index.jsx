import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, ErrorMessage } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginSchema from "../../../Validation/LoginSchema";
import { useDispatch } from "react-redux";
import authActions from "../../../Redux/Auth/action";

const theme = createTheme();

const LoginLayout = () => {
  const dispatch = useDispatch();

  const initialValue = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(authActions.loginRequest(values));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Login
          </Typography>
          <Formik
            enableReinitialize={true}
            initialValues={{
              ...initialValue,
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validationSchema={LoginSchema}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isValid,
              touched,
              values,
            }) => (
              <form
                autoComplete="on"
                method="POST"
                noValidate
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      value={values?.email || ""}
                      sx={{ width: "100%", mr: 2 }}
                      type="email"
                      name="email"
                      label="Email "
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.email && errors.email)}
                      variant="outlined"
                      required
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      value={values?.password || ""}
                      sx={{ width: "100%", mr: 2 }}
                      type="password"
                      name="password"
                      label="Password "
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.password && errors.password)}
                      variant="outlined"
                      required
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </Grid>
                </Grid>
                <Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      flexDirection: "row",
                      pt: 3,
                    }}
                  >
                    <Button
                      sx={{ width: "100%" }}
                      color="primary"
                      disabled={Boolean(!isValid)}
                      type="submit"
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginLayout;

import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import formdata from "to-formdata";
import schema from "../../Validation/UserFormSchema";
import userActions from "../../Redux/Users/actions";
import roleAction from "../../Redux/Role/actions";

const UserForm = () => {
  const { UsersDetails } = useSelector((state) => state.users);

  const roleData = useSelector((state) => state.roles.Roles);

  const [images, setImages] = useState({});

  const history = useHistory();

  const dispatch = useDispatch();

  const { id } = useParams();

  let initialValue = {
    image: {},
    first_name: UsersDetails.first_name || "",
    last_name: UsersDetails.last_name || "",
    email: UsersDetails.email || "",
    dateOfBirth: UsersDetails?.dateOfBirth?.slice(0, 10) || "",
    password: UsersDetails.password || "",
    role: UsersDetails.role || "",
  };

  useEffect(() => {
    dispatch(roleAction.getRoleRequest());
  }, []);

  const handleImageChange = (e) => {
    setImages(e.target.files[0]);
  };

  const exitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.singleRemoveUsersRequest());
    history.push("/users-list");
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 5,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        mb: 4,
        mx: 5,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        {id ? "Edit User" : "Add User"}
      </Typography>
      <Formik
        enableReinitialize={true}
        initialValues={{
          ...initialValue,
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          let newData = {
            ...values,
            image: images?.name,
          };
          if (id) {
            dispatch(userActions.updateUsersDetail(formdata(newData), id));
          } else {
            dispatch(userActions.createUsersReport(formdata(newData)));
          }
        }}
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
            autoComplete="off"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid sx={{ mb: 4 }}>
              <Grid item md={6} xs={12}>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  multiple
                  accept="image/*"
                />
                <ErrorMessage
                  component="div"
                  name="image"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid sx={{ mb: 2 }} item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="first_name"
                  label="First Name"
                  value={values.first_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.first_name && errors.first_name)}
                  variant="outlined"
                  required
                />
                <ErrorMessage
                  component="div"
                  name="first_name"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid sx={{ mb: 3 }} item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="last_name"
                  label="Last Name"
                  value={values.last_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.last_name && errors.last_name)}
                  variant="outlined"
                  required
                />
                <ErrorMessage
                  component="div"
                  name="last_name"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid sx={{ mb: 3 }} item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  type="email"
                  name="email"
                  label="Email Id"
                  value={values.email}
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
              <Grid sx={{ mb: 3 }} item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  type="date"
                  name="dateOfBirth"
                  label="Birth Date"
                  value={values.dateOfBirth}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="dateOfBirth"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid sx={{ mb: 4 }} item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  type="password"
                  name="password"
                  label="Password"
                  value={values.password}
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
              <Grid sx={{ mb: 4 }} item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="role"
                    label="role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    error={Boolean(touched.role && errors.role)}
                    fullWidth
                    required
                  >
                    {roleData.map((row) => (
                      <MenuItem value={row._id} key={`${row._id}`}>
                        {row.roleType}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                pt: 3,
                mx: "1rem",
              }}
            >
              <Button
                variant="outlined"
                onClick={exitHandler}
                sx={{
                  mr: 1,
                  borderColor: "error.main",
                  borderRadius: 2,
                  color: "#e30909",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "error.main",
                    bgcolor: "#e30909",
                    color: "#fff",
                  },
                }}
              >
                Exit
              </Button>
              <Button
                sx={{ borderRadius: 2 }}
                color="primary"
                type="submit"
                disabled={Boolean(!isValid)}
                variant="contained"
              >
                {id ? "Update" : "Submit"}
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Paper>
  );
};
export default UserForm;

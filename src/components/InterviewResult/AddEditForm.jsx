import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import {
  FormControl,
  InputLabel,
  Typography,
  MenuItem,
  Grid,
  Select,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import schema from "../../Validation/InterviewFormSchema";
import interviewResultActions from "../../Redux/InterviewResult/action";

const InterviewResultForm = () => {
  const { id } = useParams();

  const { InterviewResultDetails, action, Interviewer, Technology } =
    useSelector((state) => state.interviewResult);

  const history = useHistory();

  const dispatch = useDispatch();

  let initialValue = {
    date: InterviewResultDetails.date || "",
    name: InterviewResultDetails.name || "",
    interviewer: InterviewResultDetails.interviewer || [],
    technology: InterviewResultDetails.technology || [],
    experience: InterviewResultDetails.experience || "",
    rounds: InterviewResultDetails.rounds || "",
    communication: InterviewResultDetails.communication || "",
    practicalCompletion: InterviewResultDetails.practicalCompletion || "",
    codingStandard: InterviewResultDetails.codingStandard || "",
    technicalRound: InterviewResultDetails.technicalRound || "",
    notes: InterviewResultDetails.notes || "",
  };

  const exitHandler = (e) => {
    e.preventDefault();
    dispatch(interviewResultActions.singleRemoveResultRequest());
    history.push("/interview-result");
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
        {id ? "Update Result Form" : "Add Result Form"}
      </Typography>

      <Formik
        initialValues={{
          ...initialValue,
        }}
        validationSchema={schema}
        enableReinitialize={true}
        onSubmit={(values) => {
          if (action === "GET_SINGLE_INTERVIEW_RESULT_SUCCESS") {
            dispatch(interviewResultActions.updateInterviewResult(values, id));
          } else {
            dispatch(interviewResultActions.createInterviewReport(values));
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
            autoComplete="on"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid sx={{ mb: 2 }}>
              <TextField
                sx={{ width: "100%" }}
                type="date"
                name="date"
                label="Date Of Interview"
                value={values.date}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.date && errors.date)}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <ErrorMessage
                component="div"
                name="date"
                className="invalid-feedback"
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="name"
                  label="Candidate Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.name && errors.name)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="name"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Interviewer Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="interviewer"
                    label="Interviewer Name"
                    value={values.interviewer}
                    multiple
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    error={Boolean(touched.interviewer && errors.interviewer)}
                    fullWidth
                    required
                  >
                    {Interviewer.map((row) => (
                      <MenuItem key={row.id} value={row.interviwer}>
                        {row.interviwer}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="interviewer"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Technology
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="technology"
                    label="Technology"
                    onBlur={handleBlur}
                    multiple
                    sx={{ textAlign: "left" }}
                    value={values.technology}
                    onChange={handleChange}
                    error={Boolean(touched.technology && errors.technology)}
                    fullWidth
                    required
                  >
                    {Technology.map((row) => (
                      <MenuItem key={row.id} value={row.technology}>
                        {row.technology}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="technology"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="experience"
                  label="Experience"
                  onBlur={handleBlur}
                  value={values.experience}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.experience && errors.experience)}
                  required
                  fullWidth
                />
                <ErrorMessage
                  component="div"
                  name="experience"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">Round</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="rounds"
                    label="Round"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.rounds}
                    onChange={handleChange}
                    error={Boolean(touched.rounds && errors.rounds)}
                    fullWidth
                    required
                  >
                    <MenuItem value="Practical">Practical</MenuItem>
                    <MenuItem value="Technical">Technical</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="rounds"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Communication
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="communication"
                    label="Communication"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.communication}
                    onChange={handleChange}
                    error={Boolean(
                      touched.communication && errors.communication
                    )}
                    fullWidth
                    required
                  >
                    <MenuItem value="Good">Good</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Poor</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="communication"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="practicalCompletion"
                  label="Practical Completion (0-100)%"
                  value={values.practicalCompletion}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(
                    touched.practicalCompletion && errors.practicalCompletion
                  )}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="practicalCompletion"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="codingStandard"
                  label="Coding Standard (0-100)%"
                  value={values.codingStandard}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(
                    touched.codingStandard && errors.codingStandard
                  )}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="codingStandard"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="technicalRound"
                  label="Technical Completion (0-100)%"
                  value={values.technicalRound}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(
                    touched.technicalRound && errors.technicalRound
                  )}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="technicalRound"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="notes"
                  label="Notes"
                  value={values.notes}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.notes && errors.notes)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="notes"
                  className="invalid-feedback"
                />
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
                disabled={Boolean(!isValid)}
                type="submit"
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

export default InterviewResultForm;

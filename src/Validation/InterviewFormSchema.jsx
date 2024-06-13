import * as Yup from "yup";

const InterviewFormSchema = Yup.object().shape({
  date: Yup.date().nullable().required("Please Select Date!"),

  name: Yup.string()
    .min(4, "Name at least 4 character required!")
    .required("Please Enter Candidate Name!"),

  interviewer: Yup.array()
    .min(1, "Select Atleast One Interviewer")
    .required("Please Select Interviewer Name!"),

  technology: Yup.array()
    .min(1, "Select Atleast One Technology")
    .required("Please Select Technology!"),

  experience: Yup.number()
    .integer()
    .typeError("Please Enter Experience!")
    .required("Please Enter experience !"),

  rounds: Yup.string().optional().required("Please Select Round!"),

  communication: Yup.string().when("rounds", {
    is: (rounds) => rounds === "Technical",
    then: Yup.string().required("Please Select Communication level!"),
  }),

  practicalCompletion: Yup.number().when("rounds", {
    is: (rounds) => rounds === "Practical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Practical Completion!"),
  }),

  codingStandard: Yup.number().when("rounds", {
    is: (rounds) => rounds === "Practical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Coding Standard!"),
  }),

  technicalRound: Yup.number().when("rounds", {
    is: (rounds) => rounds === "Technical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Technical Completion!"),
  }),

  notes: Yup.string().required("Please Write Feedback Of Interview!"),
});

export default InterviewFormSchema;

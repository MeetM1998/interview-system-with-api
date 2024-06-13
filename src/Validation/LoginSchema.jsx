import * as Yup from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Must be a valid email!")
    .required("Please Enter Email!"),

  password: Yup.string().required("Please Enter Password!"),
});

export default LoginSchema;

import * as Yup from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const UserFormSchema = Yup.object().shape({
  image: Yup.mixed().required("Please Upload Image!"),

  first_name: Yup.string()
    .min(4, "FirstName at least 4 character required!")
    .required("Please Enter FirstName!"),

  last_name: Yup.string()
    .min(4, "LastName at least 4 character required!")
    .required("Please Enter LastName!"),

  email: Yup.string()
    .matches(emailRegex, "Must be a valid email!")
    .required("Please Enter Email!"),

  dateOfBirth: Yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Please Select Date! "),

  password: Yup.string()
    .matches(
      passwordRegex,
      "one lowercase, uppercase, number, special character required!"
    )
    .min(8, "Minimun 8 Character Required!")
    .required("Please Enter Password!"),
});

export default UserFormSchema;

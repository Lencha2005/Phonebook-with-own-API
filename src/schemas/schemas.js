import * as Yup from "yup";

const numberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const registrationFormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short!').max(20, 'Too long!').required('Field is required!'),
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password length must be at least 8 characters")
    .required("Password is required"),
  });


export const loginFormSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
  });


export const contactFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').max(20, 'Too long!').required('Field is required!'),
  number: Yup.string().matches(numberRegex, "Invalid phone number. Phone must be +380XXXXXXXXX").required('Field is required!'),
});
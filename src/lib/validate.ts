interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues extends LoginValues {
  username: string;
  cpassword: string;
}

export default function loginValidate(values: LoginValues) {
  const errors: Partial<LoginValues> = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
}

export function registerValidate(values: RegisterValues) {
  const errors: Partial<RegisterValues> = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid Username...!";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required";
  }

  // validate confirm password
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Password Not Match...!";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "Invalid Confirm Password";
  }

  return errors;
}

export const passwordValidator = (password) => {
  let errorMsg;
  const expected =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password) && password.length >= 8;
  if (!expected) {
    return (errorMsg =
      "Password must have uppercase,lowercase, number and must be greater than 8");
  }
  return errorMsg;
};

export const isEmail = (value) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );
};

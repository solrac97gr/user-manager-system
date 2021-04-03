import { app, db } from "../firebase/index";
import { passwordValidator, isEmail } from "../validators";
import Cookies from 'js-cookie';
export const register = async ({ email, password, confirmPassword }) => {
  let user, errorCode, errorMessage;
  //Validate Info
  if (!isEmail(email)) {
    errorMessage = "The email it's not valid";
    errorCode = "generic";
    return [errorCode, errorMessage, user];
  }
  if (!email || !password || !confirmPassword) {
    errorMessage = "All the fields are required";
    errorCode = "generic";
    return [errorCode, errorMessage, user];
  }
  if (password !== confirmPassword) {
    errorMessage = "The passwords are not equals";
    errorCode = "generic";
    return [errorCode, errorMessage, user];
  }
  const isNotSecurePassword = passwordValidator(password);
  if (isNotSecurePassword) {
    errorMessage = isNotSecurePassword;
    errorCode = "generic";
    return [errorCode, errorMessage, user];
  }
  //Register User in Firebase
  await app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      user = userCredentials.user;
    })
    .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
    });
  if (errorCode) {
    return [errorCode, errorMessage, user];
  }
  //Save empty profile
  await db.collection("profiles")
    .doc(user.uid)
    .set({
      email: email,
      location: "Los Angeles",
      isAdmin: false,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  await Cookies.set('token',user.za)
  return [errorCode, errorMessage, user];
};

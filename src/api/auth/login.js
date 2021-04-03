import { app } from "../firebase/index";

export const login = ({ email, password }) => {
  let user, errorCode, errorMessage;
  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
    });
  if (errorCode) {
    return { errorCode, errorMessage };
  }
  return user;
};

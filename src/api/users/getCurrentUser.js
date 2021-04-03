import { app } from "../firebase";

export const getCurrentUser = async () => {
  var user = await app.auth().currentUser;
  if (user != null) {
    return {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      phoneNumber:user.phoneNumber,
      emailVerified: user.emailVerified,
      uid: user.uid,
    };
  }
};

import { db } from "../firebase";

export const getUserProfile = async (email) => {
  let profile;
  await db.collection("profiles")
    .where("email", "==", email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        profile = doc.data();
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return profile;
};

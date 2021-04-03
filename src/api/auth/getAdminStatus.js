import { db } from "../firebase";
import Cookies from "js-cookie";

export const getAdminStatus = async () => {
  let profile = { location: "", isAdmin: false };
  const token = Cookies.get("token");
  let userInfo = {email:""};
  if (token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    userInfo = await JSON.parse(window.atob(base64));
  }
  await db
    .collection("profiles")
    .where("email", "==", userInfo.email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        profile = doc.data();
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return profile.isAdmin;
};

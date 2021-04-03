import {db } from "../firebase";

export const updateAdminPermissions = async (userId,value) => {
  await db.collection("profiles").doc(userId).update({ isAdmin: value });
};

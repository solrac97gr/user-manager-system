import { app, db } from "../firebase";

export const updateUserProfile = async (
  name,
  email,
  phoneNumber,
  location,
  photoUrl
) => {
  let newName, newEmail, newPhoneNumber, newLocation, newPhotoUrl;
  const user = await app.auth().currentUser;
  if (user.displayName !== name) {
    await user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        newName = name;
      });
  }
  if (user.photoUrl !== photoUrl) {
    await user
      .updateProfile({
        photoURL: photoUrl,
      })
      .then(() => {
        newPhotoUrl = photoUrl;
      });
  }
  await db
  .collection("profiles")
  .doc(user.uid)
  .update({ cellphone: phoneNumber })
  .then(() => {
    newPhoneNumber = phoneNumber;
  });
  await db
    .collection("profiles")
    .doc(user.uid)
    .update({ location: location })
    .then(() => {
      newLocation = location;
    });
  return [newName, newEmail, newPhoneNumber, newLocation, newPhotoUrl];
};

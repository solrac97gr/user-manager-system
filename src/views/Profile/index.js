import React, { useState, useEffect } from "react";
import { useGetUser } from "../../hooks/useGetUser";
import { ProfileCard } from "../../components/ProfileCard";
import { updateUserProfile } from "../../api/users/updateUserProfile";

export const Profile = (props) => {
  const [editable, setEditable] = useState(false);
  const user = useGetUser(props["*"] ? props["*"] : null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [admin,setAdmin] = useState(false);
  const [userId,setUserId] = useState("")

  const setters = {
    setName: setName,
    setEmail: setEmail,
    setPhoneNumber: setPhoneNumber,
    setLocation: setLocation,
    setPhotoUrl: setPhotoUrl,
    setAdmin: setAdmin,
    setUserId: setUserId
  };
  useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
    setPhoneNumber(user.cellphone);
    setLocation(user.location);
    setPhotoUrl(user.photoUrl);
    setAdmin(user.isAdmin);
    setUserId(user.uid);
  }, [user]);
  const handleEdit = () => {
    setEditable(!editable);
  };
  const handleSave = async () => {
    const [
      newName,
      newEmail,
      newPhoneNumber,
      newLocation,
      newPhotoUrl,
    ] = await updateUserProfile(name, email,phoneNumber, location, photoUrl);
    if (newName) setEmail(newName);
    if (newEmail) setEmail(newEmail);
    if (newPhoneNumber) setPhoneNumber(newPhoneNumber);
    if (newLocation) setLocation(newLocation);
    if (newPhotoUrl) setPhotoUrl(newPhotoUrl);
    setEditable(false);
  };
  return (
    <ProfileCard
      name={name}
      email={email}
      phoneNumber={phoneNumber}
      location={location}
      photoUrl={photoUrl}
      editable={editable}
      handleEdit={handleEdit}
      handleSave={handleSave}
      setters={setters}
      admin={admin}
      userId={userId}
    ></ProfileCard>
  );
};

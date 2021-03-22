import React, { useState } from "react";
import { useGetUser } from "../../hooks/useGetUser";
import { ProfileCard } from "../../components/ProfileCard";

export const Profile = (props) => {
  const [editable, setEditable] = useState(false);
  const user = useGetUser(props['*'] ? props['*'] : null);
  const handleEdit = () => {
    setEditable(!editable);
  };
  const handleSave = () => {
    alert("User Edited");
  };
  return (
    <ProfileCard
      {...user}
      editable={editable}
      handleEdit={handleEdit}
      handleSave={handleSave}
    ></ProfileCard>
  );
};

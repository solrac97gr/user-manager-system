import React, { useState } from "react";
import { StyledCard, Container } from "./styles";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { useAdmin } from "../../hooks/useAdmin";
import { LogOutButton } from "../LogOutButton";
import { ManageUsersButton } from "../ManageUsersButton";
import { Switch } from "antd";
import { updateAdminPermissions } from "../../api/auth/updateAdminPermissions";

export const ProfileCard = ({
  userId,
  name,
  phoneNumber,
  email,
  location,
  editable,
  photoUrl,
  handleEdit,
  handleSave,
  setters,
  admin
}) => {
  const isAdmin = useAdmin();
  const [loading, setLoading] = useState(false);
  const updateAdmin = async (value) => {
    setLoading(true);
    updateAdminPermissions(userId,value).then(() => {
      setLoading(false);
      window.location.reload();
    });
  };
  return (
    <Container>
      {isAdmin ? <ManageUsersButton></ManageUsersButton> : <></>}
      <LogOutButton></LogOutButton>
      <StyledCard
        cover={
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "auto",
              marginTop: "50px",
              marginBottom: "10px",
            }}
          >
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              style={{
                heigh: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        }
      >
        <CustomInput
          value={name}
          disabled={!editable}
          onChange={(e) => setters.setName(e.target.value)}
        />
        <CustomInput
          value={phoneNumber}
          disabled={!editable}
          onChange={(e) => setters.setPhoneNumber(e.target.value)}
        />
        <CustomInput
          value={email}
          disabled={true}
          onChange={(e) => setters.setEmail(e.target.value)}
        />
        <CustomInput
          value={location}
          disabled={!editable}
          onChange={(e) => setters.setLocation(e.target.value)}
        />
        {isAdmin && (
          <div>
            <span>Admin </span>
            <Switch
              onChange={updateAdmin}
              loading={loading}
              checked={admin}
            ></Switch>
          </div>
        )}
        <CustomButton type="primary" content={"Edit"} onClick={handleEdit} on />
        <CustomButton type="danger" content={"Save"} onClick={handleSave} />
      </StyledCard>
    </Container>
  );
};

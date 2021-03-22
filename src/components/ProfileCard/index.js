import React from "react";
import { StyledCard, Container } from "./styles";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { useAdmin } from "../../hooks/useAdmin";
import { LogOutButton } from "../LogOutButton";
import { ManageUsersButton } from "../ManageUsersButton";

export const ProfileCard = ({
  name,
  phoneNumber,
  email,
  location,
  editable,
  photoUrl,
  handleEdit,
  handleSave,
}) => {
  const isAdmin = useAdmin();
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
        <CustomInput value={name} disabled={!editable} />
        <CustomInput value={phoneNumber} disabled={!editable} />
        <CustomInput value={email} disabled={!editable} />
        <CustomInput value={location} disabled={!editable} />
        <CustomButton type="primary" content={"Edit"} onClick={handleEdit} />
        <CustomButton type="danger" content={"Save"} onClick={handleSave} />
      </StyledCard>
    </Container>
  );
};

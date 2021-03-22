import React from "react";
import { ActionEditButton } from "../ActionEditButton";
import { LogOutButton } from "../LogOutButton";
import { Container, StyledTable } from "./styles";
import { useAdmin } from "../../hooks/useAdmin";
import { ManageUsersButton } from "../ManageUsersButton";
import { useNavigate } from "@reach/router";

const columns = [
  {
    title: "",
    dataIndex: "photoUrl",
    key: "photoUrl",
    render: (record) => {
      return (
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <img
            alt="example"
            src={record}
            loading="lazy"
            style={{
              heigh: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      );
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Created on",
    dataIndex: "birthDate",
    key: "birthDate",
  },
  {
    title: "Actions",
    key: "actions",
    render: (record) => (
      <ActionEditButton
        key={record.userId}
        userId={record.userId}
      ></ActionEditButton>
    ),
  },
];
export const UserTable = ({ users }) => {
  const isAdmin = useAdmin();
  const navigate = useNavigate();
  return (
    <Container>
      {isAdmin ? (
        <ManageUsersButton
          content="Profile"
          action={()=>navigate("profile")}
        ></ManageUsersButton>
      ) : (
        <></>
      )}
      <LogOutButton></LogOutButton>
      <StyledTable dataSource={users} columns={columns} />
    </Container>
  );
};

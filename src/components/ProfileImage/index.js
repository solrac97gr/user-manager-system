import React from "react";
import { Container, Image } from "./styles";

export const ProfileImage = (photoUrl) => {
  return (
    <Container>
      <Image
        alt="example"
        src={
          photoUrl
            ? photoUrl
            : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        }
      />
    </Container>
  );
};

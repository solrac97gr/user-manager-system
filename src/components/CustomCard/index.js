import React from "react";
import { Card, Input } from "antd";

export const CustomCard = ({
  name,
  cellphone,
  mail,
  location,
  editable,
  photoUrl,
}) => {
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Input value={name} disabled={!editable} />
      <Input value={cellphone} disabled={!editable} />
      <Input value={mail} disabled={!editable} />
      <Input value={location} disabled={!editable} />
    </Card>
  );
};

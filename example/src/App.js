import React from "react";
import { Container } from "react-bootstrap";

import { Confirm, Tile } from "adplist-react-lib";

export default () => {
  const handleConfirm = async () => {
    if (await Confirm({ confirmation: "Hello world", header: "Hello" })) {
    }
  };

  return (
    <Container>
      <Tile active onClick={() => handleConfirm()}>
        Hello
      </Tile>
    </Container>
  );
};

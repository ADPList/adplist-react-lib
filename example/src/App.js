import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Steps } from "adplist-react-lib";

export default () => {
  const [activeKey, setActiveKey] = useState(1);

  return (
    <Container>
      <h1>Testing something</h1>
      <Steps activeKey={activeKey} onClick={(key) => setActiveKey(key)}>
        <Steps.Step title="Login" />
        <Steps.Step title="Signup" />
      </Steps>
    </Container>
  );
};

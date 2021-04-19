import React, { FunctionComponent, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Login from '../LoginComponent';
import Register from '../RegisterComponent';
import { Wrapper, Header, StyledModal, CloseButton, Backdrop, Content } from './Modal.style';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({ isShown, hide }) => {

  const [key, setKey] = useState('login');

  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) =>setKey(k)}>
                <Tab eventKey="login" title="Login">
                  <Login />
                </Tab>
                <Tab eventKey="register" title="Register">
                  <Register />
                </Tab>
            </Tabs>
          </Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
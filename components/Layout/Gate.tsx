import React from "react";
import { Flex, Button, Text, useModal, Modal } from "sriracha-ui";
import { useQuery } from "@apollo/react-hooks";
import CurrentUser from "./CurrentUser";
import { IS_LOGGED_IN_QUERY } from "../../gql";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export default function Gate() {
  const { data: isLoggedInData, loading } = useQuery(IS_LOGGED_IN_QUERY);

  const { isModal: isLoginModal, toggleModal: toggleLoginModal } = useModal();
  const {
    isModal: isRegisterModal,
    toggleModal: toggleRegisterModal,
  } = useModal();

  const status = isLoggedInData?.isLoggedIn;
  console.log("status", status);

  return (
    <Flex aiCenter>
      {loading ? (
        <Text>Loading...</Text>
      ) : !status ? (
        <>
          <Button primary onClick={toggleLoginModal}>
            Log in
          </Button>
          <Button secondary onClick={toggleRegisterModal}>
            Sign up
          </Button>
        </>
      ) : (
        <CurrentUser />
      )}
      <Modal active={isLoginModal} toggle={toggleLoginModal}>
        <Login toggle={() => toggleLoginModal()} />
      </Modal>
      <Modal active={isRegisterModal} toggle={toggleRegisterModal}>
        <Register toggle={() => toggleRegisterModal()} />
      </Modal>
    </Flex>
  );
}

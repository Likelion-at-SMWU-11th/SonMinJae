import React, { useState } from "react";
import styled from "styled-components";
import { firebaseAuth } from "../fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(null);
  const onSocialClick = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(firebaseAuth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <GoogleBtn onClick={onSocialClick}>
        <FcGoogle />
      </GoogleBtn>
    </Container>
  );
};

export default GoogleLogin;

const Container = styled.div`
  text-align: center;
  justify-content: center;
  margin: 0 auto;
`;

const GoogleBtn = styled.div`
  width: 100px;
  height: 100px;
`;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import Button from "../components/common/Button";
import AuthTemplete from "../components/auth/AuthTemplete";
import {
  firebaseAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "../fbase";

const RegisterPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setRegisterEmail(value);
    } else if (name === "password") {
      setRegisterPassword(value);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      await sendEmailVerification(firebaseAuth.currentUser);
      alert("회원가입이 완료되었습니다! 이메일을 확인해주세요.");
      console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
      await updateProfile(firebaseAuth.currentUser);
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/weak-password":
          break;
        case "auth/invalid-email":
          break;
        case "auth/email-already-in-use":
          break;
        default:
          break;
      }
    }
  };

  return (
    <AuthTemplete>
      <AuthFormBlock>
        <h3>회원가입</h3>
        <form>
          <StyledInput
            type="email"
            placeholder="이메일"
            name="email"
            value={registerEmail}
            onChange={onChange}
          />
          <StyledInput
            type="password"
            placeholder="비밀번호"
            name="password"
            value={registerPassword}
            onChange={onChange}
          />
          <ButtonWidthMarginTop green fullWidth onClick={signup}>
            회원가입
          </ButtonWidthMarginTop>
        </form>
        <Footer>
          <Link to="/login">로그인</Link>
        </Footer>
      </AuthFormBlock>
    </AuthTemplete>
  );
};

export default RegisterPage;

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`;

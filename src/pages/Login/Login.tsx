import React from 'react';
import { Link } from 'react-router-dom';
import CoralLogo from '../../assets/logo-coral.png';
import { LoginWrap, LinkWrap } from './LoginStyle';
import LoginForm from 'src/components/common/Login/LoginForm';

const Login: React.FC = () => {
  return (
    <LoginWrap>
      <header>
        <h1>
          <Link to='/'>
            <img src={CoralLogo} alt='호두 로고 이미지' />
          </Link>
        </h1>
      </header>
      <main>
        <LoginForm />
        <LinkWrap>
          <Link to='/account/signup'>회원가입</Link>
          <p>|</p>
          <a>비밀번호 찾기</a>
        </LinkWrap>
      </main>
    </LoginWrap>
  );
};
export default Login;

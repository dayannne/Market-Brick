interface LoginErrorProps {
  idError: boolean;
  pwError: boolean;
  loginError: string;
}

const LoginError: React.FC<LoginErrorProps> = ({
  idError,
  pwError,
  loginError,
}) => {
  return (
    <>
      {(idError || pwError || loginError) && (
        <p>
          {idError || pwError
            ? '아이디 또는 비밀번호를 입력해 주세요.'
            : loginError}
        </p>
      )}
    </>
  );
};

export default LoginError;
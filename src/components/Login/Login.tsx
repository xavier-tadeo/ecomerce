import { useFormLogin } from "../../hooks/useFormLogin";

export const Login = () => {
  const { dataLogin, onChangeLogin, onSubmitLogin } = useFormLogin();

  const { password, userName } = dataLogin;

  return (
    <div className="form">
      <div className="form__title-container">
        <h2 className="form__title">SmartShopping</h2>
      </div>
      <form
        className="form__container"
        autoComplete="off"
        onSubmit={onSubmitLogin}
      >
        <h4 className="form__login">Login</h4>
        <div className="form__data-container">
          <div className="form__data">
            <label htmlFor="userName" className="form__firstnamelabel">
              User name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Your User Name"
              className="form__usernameinput"
              value={userName}
              onChange={onChangeLogin}
            />
            <label htmlFor="password" className="form__passwordlabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form__passwordinput"
              placeholder="*******"
              value={password}
              onChange={onChangeLogin}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

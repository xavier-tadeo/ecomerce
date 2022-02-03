import { useForm } from "../../hooks/useForm";
import "./Register.scss";

export const Register = () => {
  const { dataRegister, onChange, onSubmit } = useForm();

  const {
    firstName,
    lastName,
    userName,
    email,
    yourBirthday,
    age,
    yourDirection,
    password,
  } = dataRegister;

  return (
    <div className="form">
      <div className="form__title-container">
        <h2 className="form__title">SmartShopping</h2>
      </div>
      <form className="form__container" autoComplete="off" onSubmit={onSubmit}>
        <h4 className="form__register">Register</h4>
        <div className="form__data-container">
          <div className="form__data">
            <label htmlFor="firstName" className="form__firstnamelabel">
              Firts Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Your first name"
              className="form__firstnameinput"
              value={firstName}
              onChange={onChange}
            />
            <label htmlFor="lastName" className="form__lastnamelabel">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="form__lastnameinput"
              placeholder="Your last name"
              value={lastName}
              onChange={onChange}
            />

            <label htmlFor="email" className="form__emaillabel">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="form__emailinput"
              value={email}
              onChange={onChange}
            />
            <label htmlFor="yourBirthday" className="form__datelabel">
              Your birthday
            </label>
            <input
              type="date"
              className="form__dateinput"
              id="yourBirthday"
              placeholder="Your birthday"
              value={yourBirthday}
              onChange={onChange}
            />
          </div>

          <div className="form__data-info">
            <label htmlFor="userName" className="form__userlabel">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="form__userinput"
              placeholder="Your user name"
              value={userName}
              onChange={onChange}
            />
            <label htmlFor="age" className="form__agelabel">
              Age
            </label>
            <input
              type="number"
              className="form__ageinput"
              id="age"
              placeholder="Your birthday"
              min={18}
              max={100}
              value={age}
              onChange={onChange}
            />
            <label htmlFor="yourDirection" className="form__directionlabel">
              Your direction
            </label>
            <input
              type="text"
              className="form__directioninput"
              id="yourDirection"
              placeholder="Your direction"
              value={yourDirection}
              onChange={onChange}
            />
            <label htmlFor="password" className="form__passwordlabel">
              Your password
            </label>
            <input
              type="password"
              className="form__passwordinput"
              id="password"
              placeholder="**********"
              value={password}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form__container-button">
          <button className="form__button">Create User</button>
        </div>
      </form>
    </div>
  );
};

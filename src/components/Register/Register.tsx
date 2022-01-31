import "./Register.scss";

export const Register = () => {
  return (
    <div className="form">
      <h2 className="form__title">SmartShopping</h2>
      <form className="form__container">
        <h4 className="form__register">Register</h4>
        <div className="form__data-container">
          <div className="form__data">
            <label htmlFor="firstname" className="form__firstnamelabel">
              Firts Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Your first name"
              className="form__firstnameinput"
            />
            <label htmlFor="lastname" className="form__lastnamelabel">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="form__lastnameinput"
              placeholder="Your last name"
            />
            <label htmlFor="user" className="form__userlabel">
              User Name
            </label>
            <input
              type="text"
              id="user"
              className="form__userinput"
              placeholder="Your user name"
            />
            <label htmlFor="email" className="form__emaillabel">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="form__emailinput"
            />
          </div>
          <div className="form__data-info">
            <label htmlFor="date" className="form__datelabel">
              Your birthday
            </label>
            <input
              type="date"
              className="form__dateinput"
              id="date"
              placeholder="Your birthday"
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
            />
            <label htmlFor="avatar" className="form__avatarlabel">
              Avatar
            </label>
            <input type="file" className="form__avatarinput" id="avatar" />
            <label htmlFor="direction" className="form__directionlabel">
              Your direction
            </label>
            <input
              type="text"
              className="form__directioninput"
              id="direction"
              placeholder="Your direction"
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

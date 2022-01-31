import "./Register.scss";

export const Register = () => {
  return (
    <div className="form">
      <h2 className="form__title">SmartShopping</h2>
      <form className="form__container">
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
      </form>
    </div>
  );
};

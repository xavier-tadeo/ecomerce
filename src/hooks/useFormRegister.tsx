import React, { ChangeEvent, useState } from "react";

export const useFormRegister = () => {
  const registerValue = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    yourBirthday: "",
    age: "",
    yourDirection: "",
    password: "",
  };

  const [dataRegister, setDataRegister] = useState(registerValue);

  const onChangeRegister = (evt: ChangeEvent<HTMLInputElement>) => {
    setDataRegister({
      ...dataRegister,
      [evt.target.id]: evt.target.value,
    });
  };

  const onSubmitRegister = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
  };
  return {
    dataRegister,
    onChangeRegister,
    onSubmitRegister,
  };
};

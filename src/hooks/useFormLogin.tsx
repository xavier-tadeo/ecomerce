import { ChangeEvent, useState } from "react";

export const useFormLogin = () => {
  const loginValue = {
    userName: "",

    password: "",
  };

  const [dataLogin, setDataLogin] = useState(loginValue);

  const onChangeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    setDataLogin({
      ...dataLogin,
      [evt.target.id]: evt.target.value,
    });
  };

  const onSubmitLogin = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
  };

  return {
    dataLogin,
    onSubmitLogin,
    onChangeLogin,
  };
};

import { ChangeEvent, useState } from "react";

export const useForm = () => {
  const registerValue = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    yourBirthday: "",
    age: "",
    avatar: "",
    yourDirection: "",
  };

  const [dataRegister, setDataRegister] = useState(registerValue);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setDataRegister({
      ...dataRegister,
      [evt.target.id]:
        evt.target.type === "file" ? evt.target.files : evt.target.value,
    });
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
  };
  return {
    dataRegister,
    onChange,
    onSubmit,
  };
};

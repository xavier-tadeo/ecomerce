import { ChangeEvent, useState } from "react";

export const useForm = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    yourBirthday: "",
    age: "",
    avatar: "",
    yourDirection: "",
  };

  const [data, setData] = useState(initialValue);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [evt.target.id]:
        evt.target.type === "file" ? evt.target.files : evt.target.value,
    });
  };

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
  };
  return {
    data,
    onChange,
    onSubmit,
  };
};

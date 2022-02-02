import { ImagesRegister } from "../../components/Images/ImagesRegister/ImagesRegister";
import { Register } from "../../components/Register/Register";
import "./PageRegister.scss";

export const PageRegister = () => {
  return (
    <div className="container__page-register">
      <ImagesRegister />
      <Register />
    </div>
  );
};

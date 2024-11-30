/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const BackButton = ({ children }) => {
  const Navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        Navigate(-1);
      }}
    >
      {children}
    </Button>
  );
};

export default BackButton;

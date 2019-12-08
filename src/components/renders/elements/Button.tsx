import * as React from "react";
import { ButtonType } from "../../../models";

const Button = ({
  type,
  label,
  onClick
}: {
  type: ButtonType;
  label: string;
  onClick: (e: React.MouseEvent) => void;
}): React.ReactElement => (
  <button type={type} onClick={onClick}>
    {label}
  </button>
);
export default Button;

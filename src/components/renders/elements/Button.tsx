import * as React from "react";

const Button = ({
  label,
  onClick
}: {
  label: string;
  onClick: (e: React.MouseEvent) => void;
}): React.ReactElement => <button onClick={onClick}>{label}</button>;
export default Button;

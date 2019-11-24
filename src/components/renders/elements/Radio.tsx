import * as React from "react";
import { SearchBy } from "../../../models";

const Radio = ({
  input,
  onClick
}: {
  input: RadioInput;
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement => (
  <React.Fragment>
    <input
      type="radio"
      id={input.id}
      name={input.name}
      value={input.value}
      onClick={onClick.bind(this)}
    />
    <label htmlFor={input.id}>{input.label}</label>
  </React.Fragment>
);

export default Radio;

export type RadioInput = {
  id: string;
  name: string;
  label: string;
  value: SearchBy;
};

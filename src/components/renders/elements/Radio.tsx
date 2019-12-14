import * as React from "react";
import { SearchBy } from "../../../models";

const Radio = ({
  input,
  onChange
}: {
  input: RadioInput;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement => (
  <React.Fragment>
    <input
      type="radio"
      id={input.id}
      name={input.name}
      value={input.value}
      onChange={onChange}
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

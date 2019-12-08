import * as React from "react";
import Radio, { RadioInput } from "./Radio";

const RadioGroup = ({
  className,
  inputs,
  onChange
}: {
  className: string;
  inputs: RadioInput[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement => (
  <div className={className}>
    {inputs.map((input: RadioInput) => (
      <Radio key={input.value} input={input} onChange={onChange} />
    ))}
  </div>
);

export default RadioGroup;

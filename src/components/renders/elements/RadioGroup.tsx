import * as React from "react";
import Radio, { RadioInput } from "./Radio";

const RadioGroup = ({
  className,
  inputs,
  onClick
}: {
  className: string;
  inputs: RadioInput[];
  onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement => (
  <div className={className}>
    {inputs.map((input: RadioInput) => (
      <Radio key={input.value} input={input} onClick={onClick} />
    ))}
  </div>
);

export default RadioGroup;

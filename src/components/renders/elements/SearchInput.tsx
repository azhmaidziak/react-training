import * as React from "react";

const SearchInput = ({
  id,
  name,
  label,
  queryString,
  onChangeValue
}: {
  id: string;
  name: string;
  label: string;
  queryString: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement => (
  <React.Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      type="search"
      id={id}
      name={name}
      defaultValue={queryString}
      onChange={onChangeValue}
    />
  </React.Fragment>
);
export default SearchInput;

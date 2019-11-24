import * as React from "react";

const SearchInput = ({
  id,
  name,
  label,
  queryString
}: {
  id: string;
  name: string;
  label: string;
  queryString: string;
}): React.ReactElement => (
  <React.Fragment>
    <label htmlFor={id}>{label}</label>
    <input type="search" id={id} name={name} defaultValue={queryString} />
  </React.Fragment>
);
export default SearchInput;

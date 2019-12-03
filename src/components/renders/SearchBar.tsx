import * as React from "react";
import { MouseEvent } from "react";
import SearchInput from "./elements/SearchInput";
import Button from "./elements/Button";

const SearchBar = ({
  queryString,
  className,
  button
}: {
  queryString: string;
  className: string;
  button: {label:string, onClickToSearch:(e: MouseEvent) => void}
}): React.ReactElement => (
  <div className={className}>
    <SearchInput
      id="site-search"
      name="q"
      label=""
      queryString={queryString}
    />
    <Button label={button.label} onClick={button.onClickToSearch} />
  </div>
);
export default SearchBar;

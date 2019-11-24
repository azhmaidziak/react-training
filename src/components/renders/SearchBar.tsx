import * as React from "react";
import { MouseEvent } from "react";
import SearchInput from "./elements/SearchInput";
import Button from "./elements/Button";

const SearchBar = ({
  queryString,
  className,
  onClickToSearch
}: {
  queryString: string;
  className: string;
  onClickToSearch: (e: MouseEvent) => void;
}): React.ReactElement => (
  <div className={className}>
    <SearchInput
      id="site-search"
      name="q"
      label="Search the site:"
      queryString={queryString}
    />
    <Button label="SEARCH" onClick={onClickToSearch} />
  </div>
);
export default SearchBar;

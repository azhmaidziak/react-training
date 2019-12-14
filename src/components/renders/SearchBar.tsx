import * as React from "react";
import { MouseEvent } from "react";
import SearchInput from "./elements/SearchInput";
import Button from "./elements/Button";
import { ButtonType } from "../../models";

const SearchBar = ({
  className,
  input,
  button
}: {
  className: string;
  input: {
    queryString: string;
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  button: {
    type: ButtonType;
    label: string;
    onClickToSearch: (e: MouseEvent) => void;
  };
}): React.ReactElement => (
  <div className={className}>
    <SearchInput
      id="site-search"
      name="q"
      label=""
      queryString={input.queryString}
      onChangeValue={input.onChangeValue}
    />
    <Button
      type={button.type}
      label={button.label}
      onClick={button.onClickToSearch}
    />
  </div>
);
export default SearchBar;

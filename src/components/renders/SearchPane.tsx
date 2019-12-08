import * as React from "react";
import { MouseEvent } from "react";
import RadioGroup from "./elements/RadioGroup";
import { RadioInput } from "./elements/Radio";
import * as styles from "./SearchPane.module.sass";
import SearchBar from "./SearchBar";
import { ButtonType } from "../../models";

const SearchPane = ({
  options,
  queryString,
  onChangeValue,
  onClickToSearch,
  onClickToChoose
}: {
  options: RadioInput[];
  queryString: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickToSearch: (e: MouseEvent) => void;
  onClickToChoose: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement => (
  <form className={styles.search_pane}>
    <SearchBar
      className={styles.search_bar}
      button={{
        type: ButtonType.button,
        label: "search",
        onClickToSearch: onClickToSearch
      }}
      input={{ queryString: queryString, onChangeValue: onChangeValue }}
    />
    <RadioGroup
      className={styles.search_by}
      inputs={options}
      onChange={onClickToChoose}
    />
  </form>
);
export default SearchPane;

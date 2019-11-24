import * as React from "react";
import { MouseEvent } from "react";
import RadioGroup from "./elements/RadioGroup";
import { RadioInput } from "./elements/Radio";
import * as styles from "./SearchPane.module.sass";
import SearchBar from "./SearchBar";

const SearchPane = ({
  options,
  queryString,
  onClickToSearch,
  onClickToChoose
}: {
  options: RadioInput[];
  queryString: string;
  onClickToSearch: (e: MouseEvent) => void;
  onClickToChoose: (e: MouseEvent) => void;
}): React.ReactElement => (
  <div className={styles.search_pane}>
    <SearchBar
      className={styles.search_bar}
      queryString={queryString}
      onClickToSearch={onClickToSearch}
    />
    <RadioGroup
      className={styles.search_by}
      inputs={options}
      onClick={onClickToChoose}
    />
  </div>
);
export default SearchPane;

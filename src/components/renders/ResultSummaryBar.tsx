import * as React from "react";
import * as styles from "./ResultSummaryBar.module.sass";
import RadioGroup from "./elements/RadioGroup";
import { RadioInput } from "./elements/Radio";

const ResultSummaryBar = ({
  count,
  options,
  onClickToChoose
}: {
  count: number;
  options: RadioInput[];
  onClickToChoose: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): React.ReactElement => (
  <div className={styles.result_summary}>
    <div>{count} movie found</div>
    <RadioGroup
      className={styles.sort_by}
      inputs={options}
      onClick={onClickToChoose}
    />
  </div>
);

export default ResultSummaryBar;

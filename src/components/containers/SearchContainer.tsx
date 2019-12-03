import * as React from "react";
import { connect } from "react-redux";
import { Page, SearchQuery } from "../../models";
import SearchPane from "../renders/SearchPane";
import { searchBy } from "./options.json";

function onClickToChoose(event: React.ChangeEvent<HTMLInputElement>): void {
  // behaviour will be added in future
  console.log(event)
}

function onClickToSearch(event: React.MouseEvent): void {
  // behaviour will be added in future
  console.log(event);
}

function SearchContainer({
  search
}: {
  search: SearchQuery;
}): React.ReactElement {
  return (
    <SearchPane
      options={searchBy}
      queryString={search.query}
      onClickToChoose={onClickToChoose}
      onClickToSearch={onClickToSearch}
    />
  );
}

function map(state: Page): { search: SearchQuery } {
  const { top } = state;
  return { search: top as SearchQuery };
}
export default connect(map)(SearchContainer);

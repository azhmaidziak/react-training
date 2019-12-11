import * as React from "react";
import { connect } from "react-redux";
import { Page, SearchBy, SearchQuery } from "../../models";
import { SearchPane } from "../renders";
import { searchBy } from "./options.json";
import { MouseEvent } from "react";

class SearchContainer extends React.Component<
  { query: string },
  SearchRequest
> {
  constructor(props: { query: string }) {
    super(props);
    this.state = { query: props.query, searchBy: SearchBy.TITLE };
  }
  onChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: event.target.value, searchBy: this.state.searchBy });
  };

  onClickToChoose = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      query: this.state.query,
      searchBy: parseInt(event.target.value)
    });
  };

  onClickToSearch = (event: MouseEvent): void => {
    console.log(this.state);
  };

  render(): React.ReactElement {
    return (
      <SearchPane
        options={searchBy}
        queryString={this.props.query}
        onChangeValue={this.onChangeValue}
        onClickToChoose={this.onClickToChoose}
        onClickToSearch={this.onClickToSearch}
      />
    );
  }
}

function map(state: Page): { query: string } {
  const { query } = state.top as SearchQuery;
  return { query: query };
}

export default connect(map)(SearchContainer);

type SearchRequest = {
  query: string;
  searchBy: SearchBy;
};

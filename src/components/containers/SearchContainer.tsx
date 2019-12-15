import * as React from "react";
import {connect} from "react-redux";
import { Page, SearchBy } from "../../models";
import { SearchPane } from "../renders";
import { searchBy } from "./options.json";
import { MouseEvent } from "react";
import {createSearch} from "../../functions/store/actions";
import {Dispatch} from "redux";

class SearchContainer extends React.Component<
  { query: string, searchRequest: (request: { query:string , searchBy: SearchBy}) => void },
  SearchRequest
> {
  constructor(props: { query: string, searchRequest: (request: { query:string , searchBy: SearchBy}) => void}) {
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
      this.props.searchRequest(this.state)
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
  return { query: state.top.query };
}

function dispatchToProps(dispatch:  Dispatch) {
    return {
        searchRequest: (request: { query:string , searchBy: SearchBy})=> dispatch(createSearch(request))
    }
}

export default connect(map, dispatchToProps)(SearchContainer);

type SearchRequest = {
  query: string;
  searchBy: SearchBy;
};

import * as React from "react";
import AppDom from "../app";
import * as preload from "../preload";

import {
  create,
  ReactTestRenderer,
  ReactTestRendererJSON
} from "react-test-renderer";
import { cleanup } from "@testing-library/react";

describe("AppDom", () => {
  const { page } = preload;
  afterEach(cleanup);

  it("just test create component.", () => {
    const component: ReactTestRenderer = create(
      <AppDom menu={page.menu} body={page.body} />
    );
    const testInstance: ReactTestRendererJSON = component.toJSON();
    expect(testInstance).toMatchSnapshot();
  });
});

import * as React from "react";
export type ContextState = {
  state: string;
};
const ThemeContext: React.Context<ContextState> = React.createContext({
  state: "light"
});

export default ThemeContext;

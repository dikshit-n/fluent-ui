import React from "react";
import {
  FontWeights,
  IStackTokens,
  IStackStyles,
  ITextStyles,
  loadTheme,
  useTheme,
} from "@fluentui/react";
import "./App.css";
import { Table } from "./fixed-header-table";
import { Customizer } from "office-ui-fabric-react";
import { FluentCustomizations } from "@uifabric/fluent-theme";

const boldStyle: Partial<ITextStyles> = {
  root: { fontWeight: FontWeights.semibold },
};
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "960px",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <Customizer {...FluentCustomizations}>
      <Table />
    </Customizer>
  );
};

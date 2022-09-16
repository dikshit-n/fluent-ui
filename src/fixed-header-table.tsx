import {
  CheckboxVisibility,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  MarqueeSelection,
  Selection,
  SelectionMode,
} from "@fluentui/react";
import { IDetailsListProps } from "office-ui-fabric-react";
import { useMemo } from "react";
// import styled from 'styled-components';

// const TableComponentContainer = styled('div')(
//   ({ theme }) => `
//   box-sizing: border-box;
//   width: 100%;
//   position: relative;
//   //   height: fit-content;
//   height: calc(100vh - ${theme.header.height});
//   padding: 20px;
//   padding-top: 10px;
//   overflow: hidden;
//   display: grid;
//   grid-template-rows: auto 1fr auto;
// `
// );

export interface TABLE_PROPS extends IDetailsListProps {
  onSelect: (selection: Selection) => any;
}

export const Table: React.FC<TABLE_PROPS> = ({ onSelect, ...rest }) => {
  const items = [
    {
      name: "Dikshit",
      email: "dikshit@mailinator.com",
    },
    {
      name: "Jaga",
      email: "jaga@mailinator.com",
    },
  ];

  const columns: IColumn[] = [
    {
      key: "name",
      name: "Name",
      minWidth: 50,
      fieldName: "name",
    },
    {
      key: "email",
      name: "Email",
      minWidth: 50,
      fieldName: "email",
    },
  ];

  const selection = useMemo(() => new Selection(), []);
  console.log(selection.getSelection());

  return (
    <MarqueeSelection selection={selection}>
      <DetailsList
        items={items}
        columns={columns}
        checkboxVisibility={CheckboxVisibility.onHover}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        selectionMode={SelectionMode.none}
        selectionPreservedOnEmptyClick
      />
    </MarqueeSelection>
  );
};

import * as React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { TableCell, TableCellProps } from "@material-ui/core";
import { IControlInfo } from "../control-info.interface";

export class TextEditFieldControl implements IControlInfo {
  constructor(
    private currentValue: string,
    private onValueChange: (value: string) => void,
    private cellProps?: TableCellProps,
    private controlProps?: TextFieldProps
  ) {}

  createCell(children: JSX.Element, props: any): JSX.Element {
    return (
      <TableCell size="small" {...this.cellProps} {...props}>
        {children}
      </TableCell>
    );
  }

  createControl(props: any): JSX.Element {
    if (props.startAdornment) {
      props.InputProps = {
        startAdornment: props.startAdornment,
      };
    }
    return (
      <TextField
        fullWidth
        value={this.currentValue ?? ""}
        onChange={(e) => this.onValueChange(e.target.value)}
        {...this.controlProps}
        {...props}
      />
    );
  }
}

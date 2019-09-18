import TextField from "@material-ui/core/TextField";
import React from "react";

export const renderTextField = props => {
  return (
    <TextField
      fullWidth
      margin="dense"
      type="text"
      label={props.label}
      {...props.input}
      {...props.custom}
    />
  );
};

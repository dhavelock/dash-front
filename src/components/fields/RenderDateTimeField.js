import TextField from "@material-ui/core/TextField";
import React from 'react';

export const renderDateTimeField = props => {
  return (
    <TextField
      id="datetime"
      margin="dense"
      type="datetime-local"
      disabled={props.disabled}
      {...props.input}
      {...props.custom}
    />
  );
}
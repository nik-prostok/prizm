import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export const AddForm = ( ) => {
  const [value, setValue] = useState('');


  return (<form
    onSubmit={event => {
      event.preventDefault();
      setValue('');
    }}
  >
    <TextField
      variant="outlined"
      label="Step"
      name="Step"
      type="text"
      onChange={event => {
        setValue(event.target.value);
      }}
      value={value}
      autoFocus
      required />

    <Button
      variant="contained"
      color="primary" >
      Add Step
            </Button>
  </form>)
}

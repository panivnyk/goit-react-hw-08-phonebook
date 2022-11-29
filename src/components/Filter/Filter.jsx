import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(updFilter(event.currentTarget.value));
  };

  return (
    <TextField
      sx={{ marginRight: 5 }}
      type="text"
      name="filter"
      label="Search in contacts"
      placeholder="Type some text for search"
      value={filter}
      onChange={changeFilter}
    />
  );
};

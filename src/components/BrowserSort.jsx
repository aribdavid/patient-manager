import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function BrowserSort({setItemsPage}){
  return (
    <FormControl
    sx={{width: '50%', justifyContent: 'center'}}
    >
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Items Per Page
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'itemsperpage',
      id: 'uncontrolled-native',
    }}
    onChange={({target})=> setItemsPage(target.value)}
  >
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option selected value={4}>4</option>
    <option value={5}>5</option>
    <option value={6}>6</option>
    <option value={7}>7</option>
    <option value={9}>9</option>
    <option value={10}>10</option>

  </NativeSelect>
</FormControl>
  )
}
import React from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';

const SearchUser = ({term, handleSearch}) => {
  return (
    <div style={{width: '100%'}}>
      <TextField
        label='Search User'
        helperText={<HelperText>ie. Max, Stainer, Samantha</HelperText>}
        style={{width: '100%'}}
      >
        <Input value={term} onChange={handleSearch} />
      </TextField>
    </div>
  )
}

export default SearchUser;
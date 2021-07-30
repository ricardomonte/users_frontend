import React from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';
import Style from '../Styles/Search.module.css';

const SearchUser = ({term, handleSearch}) => {
  return (
    <div className={`w100 ${Style.sticky}`}>
      <TextField
        label='Search User'
        helperText={<HelperText>ie. Max, Stainer, Samantha</HelperText>}
        className='w100'
        trailingIcon={<MaterialIcon icon="search"/>}
      >
        <Input value={term} onChange={handleSearch} />
      </TextField>
    </div>
  )
}

export default SearchUser;
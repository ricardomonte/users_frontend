import React, { useEffect, useState } from 'react';
import SearchUser from './SearchUser';
import Card, { CardPrimaryContent } from "@material/react-card";
import {
  Headline6,
  Overline,
} from '@material/react-typography';
import '@material/react-card/dist/card.css';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/react-typography/dist/typography.css';

const Display = ({users}) => {
  const [listUsers, setListUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState('');


  useEffect(() => {
    setListUsers(users.data)
  },[users]);

  const handleChange = (e) => {
    setFilterUsers(e.target.value)
  }

  const userFilter = () => listUsers.filter((user) =>
    user.attributes.name.toLowerCase().includes(filterUsers.toLowerCase())
    ||
    user.attributes.lastname.toLowerCase().includes(filterUsers.toLowerCase()))

  const filteredListUsers = filterUsers === '' ? listUsers : userFilter()

  return (
    <div style={{width: '40%' }}>
      <Card className='mdc-card demo-card demo-ui-control' style={{rowGap: '2em', padding: '2em'}}>        
      <SearchUser term={filterUsers} handleSearch={handleChange} />
        { filteredListUsers.map((user) => (
          <CardPrimaryContent className='mdc-card__primary-action mdc-elevation--z4'>
            <div>
              <Headline6>{`${user.attributes.name} ${user.attributes.lastname}`}</Headline6>
            </div> 
            <div>
              <Overline>{user.attributes.email}</Overline>
            </div> 
          </CardPrimaryContent>
        )) }
      </Card>
    </div>
  );
};

export default Display
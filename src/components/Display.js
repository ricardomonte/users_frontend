import React, { useEffect, useState } from 'react';
import SearchUser from './SearchUser';
import MenuTop from './MenuTop';
import Card, { CardPrimaryContent, CardMedia, CardActionIcons } from "@material/react-card";
import { Headline6, Subtitle1, Subtitle2} from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import Style from '../Styles/Display.module.css'
import '@material/react-card/dist/card.css';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/react-typography/dist/typography.css';
import '@material/react-material-icon/dist/material-icon.css';

const baseUrl = 'http://localhost:4000';
const Display = ({users}) => {
  const [listUsers, setListUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState('');
  const [expand, setExpand] = useState([]);


  useEffect(() => {
    setListUsers(users.data)
  },[users]);

  const handleChange = (e) => {
    setFilterUsers(e.target.value)
  };

  const handleClick = (e, id) => {
    if (expand.includes(id)) {
      setExpand((prevState) => prevState.filter((idUser) => (idUser !== id)))
    }
    else {
      setExpand((prevState) => [...prevState, id])
    };
  };

  const userFilter = () => listUsers.filter((user) =>
    user.attributes.name.toLowerCase().includes(filterUsers.toLowerCase())
    ||
    user.attributes.lastname.toLowerCase().includes(filterUsers.toLowerCase()));

  const filteredListUsers = filterUsers === '' ? listUsers : userFilter();

  return (
    <>
      <MenuTop />
      <div className={Style.w40}>
        <Card className={`mdc-card--outlined ${Style.space_card}`}>      
          <SearchUser term={filterUsers} handleSearch={handleChange} />
          { filteredListUsers.map((user) => (
            <CardPrimaryContent className={` ${Style.cardContent} mdc-elevation--z4`} key={user.id}>
              <CardMedia square imageUrl={`${baseUrl}${user.attributes.avatar}`} className={Style.img} />
              <div className={`${Style.content_size} ${Style.info_card}`}>
                <div>
                  <Headline6>{`${user.attributes.name} ${user.attributes.lastname}`}</Headline6>
                  <Subtitle1>{user.attributes.job}</Subtitle1>
                </div>
                <CardActionIcons>
                  <MaterialIcon icon={expand.includes(user.id)? 'expand_less' : 'expand_more'} onClick={(e) => handleClick(e, user.id)}/>
                </CardActionIcons>
              </div>
              {expand.includes(user.id)
                && (
                  <div className={`${Style.content_size} ${Style.expandable_content}`}>
                    <div className={Style.email_phone}>
                      <MaterialIcon icon='mail' />
                      <a href={`mailto:${user.attributes.email}`}><Subtitle2>{user.attributes.email}</Subtitle2></a>
                    </div>
                    <div className={Style.email_phone}>
                      <MaterialIcon icon='phone_iphone' />
                      <Subtitle2>{user.attributes.phone}</Subtitle2>
                    </div>
                  </div>
                )
              }
            </CardPrimaryContent>
          )) }
        </Card>
      </div>
    </>
  );
};

export default Display;
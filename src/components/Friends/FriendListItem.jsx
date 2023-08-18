import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendsStyle';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status $statustype={isOnline}></Status>
    <Avatar src={avatar} alt="Avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

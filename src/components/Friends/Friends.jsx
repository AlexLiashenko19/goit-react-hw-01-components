import PropTypes from 'prop-types';
import { Avatar, Item, List, Name, Status } from './FriendsStyle';


const Friends = ({friends}) => {
    return (
        <List>
            {friends.map(({id, avatar, name, isOnline}) =>
            <Item key={id}>
                <Status>{isOnline}</Status>
                <Avatar src={avatar} alt="Avatar" width="48" />
                <Name>{name}</Name>
            </Item>
            )} 
        </List>
    )
}

export default Friends;

Friends.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };
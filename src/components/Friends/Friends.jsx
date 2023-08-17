import PropTypes from 'prop-types';


const Friends = ({friends}) => {
    return (
        <ul>
            {friends.map(({id, avatar, name, isOnline}) =>
            <li key={id}>
                <span>{isOnline ? "Online" : "Offline"}</span>
                <img src={avatar} alt="Avatar" width="48" />
                <p>{name}</p>
            </li>
            )} 
        </ul>
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
import PropTypes from "prop-types";
import { CardDiv, AboutDiv, UlPosition, LiPosition } from "./CardStyle";


const BlogCard = ({username, tag, location, avatar, stats:{followers, views, likes} }) => {
    return (<CardDiv>
    <AboutDiv>
      <img
        src={avatar}
        alt="User avatar"
      />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </AboutDiv>
  
    <UlPosition>
      <LiPosition>
        <span>Followers</span>
        <span>{followers}</span>
      </LiPosition>
      <LiPosition>
        <span>Views</span>
        <span>{views}</span>
      </LiPosition>
      <LiPosition>
        <span>Likes</span>
        <span>{likes}</span>
      </LiPosition>
    </UlPosition>
  </CardDiv>)
}

export default BlogCard;

BlogCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }
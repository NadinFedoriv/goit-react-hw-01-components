import * as Styled from './StyledFriendList';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <Styled.FriendList>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem 
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />

            ))}
        </Styled.FriendList>);
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
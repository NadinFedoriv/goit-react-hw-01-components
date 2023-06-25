import * as Styled from './StyledFriendListItem';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Styled.Item>
          <Styled.Status isOnline={isOnline}/>
             <Styled.Avatar src={avatar} alt="User avatar" width="48" />
      <Styled.Name>{name}</Styled.Name>
    </Styled.Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

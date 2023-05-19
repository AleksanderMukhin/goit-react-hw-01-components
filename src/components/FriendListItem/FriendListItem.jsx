import css from './FriendListItem.module.css'
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return <li key={id} className={css.item}>
    <span className={isOnline ? `${css.status} ${css.online}`
      : `${css.status} ${css.ofline}`}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="70" />
    <p className={css.name}>{name}</p>
  </li>
}

FriendListItem.propTypes = {
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool, 
  id:PropTypes.number,
}
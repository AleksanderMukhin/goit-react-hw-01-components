import css from './FriendList.module.css';
import friends from '../../friends.json';
import PropTypes from 'prop-types';

export const FriendList = () => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({avatar, name, isOnline, id}) => {
          return <li key={id} className={css.item}>
            <span className={isOnline ? `${css.status} ${css.online}`
              : `${css.status} ${css.ofline}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="70" />
            <p className={css.name}>{ name}</p>
          </li>
        })
      }
    </ul>
  )
}

FriendList.propTypes = {
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool, 
  id:PropTypes.number,
}
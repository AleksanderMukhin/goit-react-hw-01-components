import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      })}
    </ul>
  )
}


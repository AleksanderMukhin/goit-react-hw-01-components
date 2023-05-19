import { Profile } from "./Profile/Profile";
import user from '../user.json';

import { Statistics } from "./Statistics/Statistics";
import data from '../data.json';

import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data}
      title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

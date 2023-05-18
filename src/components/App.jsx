import { Profile } from "./Profile/Profile";
import user from '../user.json';

import { Statistics } from "./Statistics/Statistics";
import data from '../data.json';


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
      <Statistics stats={data} />
    </div>
  );
};

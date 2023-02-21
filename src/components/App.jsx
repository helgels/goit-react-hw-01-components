import user from "../info/user.json";
import data from "../info/data.json";
import friends from "../info/friends.json";
import transactions from "../info/transactions.json";

import User from "../components/User/User.js";
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/Transactions";

export function App() {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Uploads stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </>
      );
    }
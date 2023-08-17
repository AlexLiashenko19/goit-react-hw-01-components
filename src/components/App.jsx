import user from "../data/user.json";
import BlogCard from "../components/BlogCard/BlogCard"

import data from "../data/data.json";
import StatisticsUser from "./Statistics/Statistics";

import friends from "../data/friends.json"
import Friends from "./Friends/Friends";

import transactions from "../data/transactions.json"
import TransactionHistory from "./Transition/TransactionHistory";


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}
      <BlogCard {...user}/>
      <StatisticsUser title="Upload stats" stats={data} />
      <Friends friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};

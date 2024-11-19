import React from 'react';
import UserProfileCard from './UserProfileCard'; 

function App() {
  const user = {
    name: 'Jay',
    email: 'jay@example.com',
    number: '9966345313'
  };

  const user1 = {
    name: 'Rahul',
    email: 'rahul@example.com',
     number: '9966345313'
  };

  const user2 = {
    name: 'Kenil',
    email: 'kenil@example.com',
     number: '9966345313'
  };

  const user3 = {
    name: 'Khusi',
    email: 'khusi@example.com',
    number: '9966345313'
  };


  return (
    <div className="App">
      <h2>User Profiles</h2>
      <UserProfileCard 
        name={user.name} 
        email={user.email} 
        number={user.number}
      />

<UserProfileCard 
        name={user1.name} 
        email={user1.email} 
        number={user1.number}
      />

<UserProfileCard 
        name={user2.name} 
        email={user2.email} 
        number={user2.number}
      />

<UserProfileCard 
        name={user3.name} 
        email={user3.email} 
        number={user3.number}
      />
    </div>
  );
}

export default App;

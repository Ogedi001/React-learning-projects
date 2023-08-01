import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import ListUser from './components/AddUser/ListUser';
function App() {
  const [userlist, setUserlist] = useState([])
  const UserDetails = userInfo => {

    setUserlist(prevUser => {
      return [...prevUser, userInfo]
    })
    console.log(userlist);
  }

  return (
    <>
      <AddUser myform={UserDetails} />
      <ListUser users={userlist} />
    </>
  );
}

export default App;

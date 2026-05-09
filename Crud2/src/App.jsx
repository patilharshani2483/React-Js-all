import { useState } from "react";
import { Create } from "./Components/Create";
import { Display } from "./Components/Display";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [users, setUsers] = useState([]);

  // ADD USER
  const addUser = (userData) => {

    setUsers([...users, userData]);

  };


  const deleteUser=(index)=>{

    const filterData=users.filter((_,i)=>i!==index);
    setUsers(filterData)

  }
  return (
    <>
      <Create addUser={addUser} />

      <Display users={users} deleteUser={deleteUser} />
    </>
  );
};

export default App;
import { useState } from "react";

import { Create } from "./Components/Create";
import { Display } from "./Components/Display";

const App = () => {

  // MAIN DATA STORE
  const [users, setUsers] = useState([]);

  // ADD FUNCTION
  const addUser = (userData) => {

    setUsers([...users, userData]);

  };

  return (
    <>
      {/* Function Send */}
      <Create addUser={addUser} />

      {/* Data Send */}
      <Display users={users} />
    </>
  );
};

export default App;
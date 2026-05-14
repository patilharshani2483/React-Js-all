import { useState } from "react";
import { Title } from "./Components/Title";
import { Create } from "./Components/Create";
import { Display } from "./Components/Display";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  // ADD USER
  const [users, setUsers] = useState([]);

  // EDIT INDEX
  const [edit, setEdit] = useState(null);

  // EDIT DATA
  const [editData, setEditData] = useState({
    user: "",
    email: "",
    phone: "",
  });

  // SEARCH
  const [search, setSearch] = useState("");

  //theme state (1)
  const [theme, settheme] = useState(false)






  // ADD USER
  const addUser = (data) => {

    setUsers([...users, data]);

  };

  // DELETE USER
  const deleteUser = (index) => {

    const newArray = users.filter((_, i) => i !== index);

    setUsers(newArray);

  };

  // EDIT BUTTON
  const editUser = (index) => {

    // SAVE INDEX
    setEdit(index);

    // SAVE SELECTED DATA
    setEditData(users[index]);

  };

  // UPDATE USER
  const updatedUser = (updatedData) => {

    const newData = [...users];

    newData[edit] = updatedData;

    setUsers(newData);

    // CLEAR EDIT
    setEdit(null);

    // CLEAR EDIT DATA
    setEditData({
      user: "",
      email: "",
      phone: "",
    });

  };

  // SEARCH FILTER
  const searchData = users.filter((item) => {

    return item.user
      .toLowerCase()
      .includes(search.toLowerCase());

  });

  //Toggle Function
  const Change = () => {
    settheme(!theme);
  };

  return (
    <>

      <div
        className={
          theme
            ? "bg-dark text-white min-vh-100 p-5"
            : "bg-light text-dark min-vh-100 p-5"
        }
      >

        <Title />

        <Create
          addUser={addUser}
          updatedUser={updatedUser}
          edit={edit}
          editData={editData}
          theme={theme}
          Change={Change}
        />

        <Display
          users={searchData}
          deleteUser={deleteUser}
          editUser={editUser}
          search={search}
          setSearch={setSearch}
        />

      </div>

    </>
  );
};

export default App;
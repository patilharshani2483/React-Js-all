import { useState } from "react";
import { Title } from "./Componsents/Title";
import { Create } from "./Componsents/Create";
import { Display } from "./Componsents/Display";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  // ADD STUDENT
  const [datas, setData] = useState([]);

  // EDIT INDEX
  const [edit, setEditIndex] = useState(null);

  // EDIT DATA
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //Serach Data

  const[search,setSearch]=useState("")

  // ADD USER
  const addUser = (userdata) => {

    setData([...datas, userdata]);

  };

  // DELETE USER
  const deleteUser = (index) => {

    const newArray = datas.filter((_, i) => i !== index);

    setData(newArray);

  };

  // EDIT BUTTON CLICK
  const editStudent = (index) => {

    // SAVE INDEX
    setEditIndex(index);

    // SAVE SELECTED DATA
    setEditData(datas[index]);

  };


  //uPDATED DATA
  const updateUser=(updatedData)=>
  {
    const newData=[...datas]
    newData[edit]=updatedData;
    setData(newData)
    setEditIndex(null)
  }

  //Crearte filter adat serach bar
  const filterData=datas.filter((user)=>{
    return user.name.toLowerCase().includes(search.toLowerCase())

  })


  return (
    <>
      <Title></Title>

      <Create
        addUser={addUser}
        edit={edit}
        editData={editData}
        setEditIndex={setEditIndex}
        updateUser={updateUser}
      ></Create>

      <Display
        datas={filterData}
        deleteUser={deleteUser}
        editStudent={editStudent}
        search={search}
        setSearch={setSearch}
      ></Display>
    </>
  );
};

export default App;
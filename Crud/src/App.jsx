import { Create } from "./Components/Create"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Display } from "./Components/Display"
import { useState } from "react"
const App = () => {


  const [users, setusers] = useState([]);

  //edit
  const[editIndex,setEditIndex]=useState(null);
  const[editData,setEditData]=useState(null);

  //users:all data ,setusers:update data

  //Create

  const addUser = (userData) => {
    setusers([...users, userData]);
  };



  //delete
  const deleteUser = (index) => {

    //filter() ke andar 2 parameters aate hai:
    //Mujhe first value use nahi karni

    //(item, index)
    const filterData = users.filter((_, i) => i !== index);
    setusers(filterData);
  };


  //edit
  const editUser=(index)=>{
    //Kaunsa row edit karna hai uska data form me bhejo
    setEditIndex(index);
    setEditData(users[index])
  }


  //update Function

  const updateUser=(updateData)=>{
    const updateUser=[...users];
    updateUser[editIndex]=updateData;
    setusers(updateUser)
    setEditIndex(null);
    setEditData(null);
  }

  return (
    <>


      {/*send the props*/}
      <Create addUser=
        {addUser} editData={editData} updateUser={updateUser} editIndex={editIndex}></Create>
      <Display users={users} deleteUser={deleteUser} editUser={editUser}></Display>

    </>
  )
}

export default App
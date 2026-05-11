import { useState } from "react"
import { Create } from "./Components/Create"
import { Display } from "./Components/Display"
import { List } from "./Components/List"
import { Title } from "./Components/Title"
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
//multiple div hoy tiyare <> use and array tempo data store used


   var[students,setstudents]=useState([])

   //index data
   var[editIndex,setEditIndex]=useState(null)

   //updated data
   var[editdata,setEditData]=useState({
    user:"",
    email:"",
    phone:"",
   });

//add 
  const addstudent=(data)=>{
    setstudents([...students,data]);

  }

  //delete user
  const deleteStudent=(index)=>
  {
    const newArray=students.filter((_,i)=> i!==index)
    setstudents(newArray)
    
  }

  //edit Button click]
  const editStudent=(index)=>{
    setEditIndex(index);
    setEditData(students[index]);
  };

  //updated data
  const updateStudent=(data)=>{
    const updatedData=[...students];
    updatedData[editIndex]=data;
    setstudents(updatedData)
    //Reset edit mode
    setEditIndex(null)
 
    setEditData(
      {
        user:"",
        email:"",
        phone:"",
      }
    )

  }

       
  return(
    <>
    <Title></Title>
    <Create addstudent={addstudent} updateStudent={updateStudent} editIndex={editIndex} editdata=
    {editdata}></Create>
    <Display students={students} deleteStudent={deleteStudent} editStudent={editStudent}></Display>
    <List></List>
    </>
  )
}
export default App